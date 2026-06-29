import pandas as pd
import json
import re

# Read Excel file
df = pd.read_excel('مدن .xlsx', header=None)
df = df.where(pd.notnull(df), None)

entries = []
current_entry = None

# Skip header row (index 0)
for idx, row in df.iterrows():
    if idx == 0:
        continue
        
    akk = row[5]  # الأكدي
    ar = row[6]   # عربي
    labat = row[7] # رقم العلامة
    sumerian = row[8] # سومري
    cuneiform = row[9] # علامة مسمارية Unicode
    
    if akk is not None and str(akk).strip() != "":
        if current_entry is not None:
            entries.append(current_entry)
        
        base_id = re.sub(r'[^a-zA-Z0-9_]', '', str(akk).lower().replace(' ', '_'))
        
        current_entry = {
            "id": f"city_{base_id}",
            "nameAr": str(ar) if ar else "",
            "nameAkk": str(akk),
            "sumerianReadings": [],
            "keywords": [str(akk)]
        }
        if ar:
            current_entry["keywords"].append(str(ar))
        
    if current_entry is not None:
        if str(sumerian).strip() == '#ERROR!':
            sumerian = ""
            
        reading = {
            "sumerian": str(sumerian) if sumerian else "",
            "cuneiform": str(cuneiform) if cuneiform else ""
        }
        if labat is not None:
            # Handle float values like 381.0
            if isinstance(labat, float) and labat.is_integer():
                reading["labat"] = int(labat)
            else:
                reading["labat"] = str(labat).replace('.0', '')
        
        # Don't add completely empty readings
        if reading["sumerian"] or reading["cuneiform"] or "labat" in reading:
            current_entry["sumerianReadings"].append(reading)

if current_entry is not None:
    entries.append(current_entry)

# Convert to formatted string
new_items_str = ""
for e in entries:
    new_items_str += ",\n" + json.dumps(e, ensure_ascii=False, indent=4).replace('\n', '\n                        ')

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We will just append before the closing bracket of the cities array.
# Let's find the 'Adab' entry and replace it + append new ones, or just append after Adab.
# Since 'Adab' is in the excel file, it's better to replace the placeholder Adab.

target = """                    {
                        id: "Adab",
                        nameAr: " أدب",
                        nameAkk: "ud-nun-ki",
                        sumerianReadings: [
                            { sumerian: "ADAB", cuneiform: "𒀏", labat: "175²" }
                        ],
                        coordinates: { lat: 36.3600, lng: 43.1530 },
                        keywords: ["أدب", "adab", "ud-nun", "مدينة أدب"]
                    }"""

if target in content:
    # Remove the placeholder Adab and insert the new array
    # Since babylon is before Adab, babylon has a trailing comma.
    # We strip the first leading comma from new_items_str just in case, but actually wait, new_items_str starts with ",\n"
    # So if we replace `target` with `new_items_str[2:]`, it would be perfect if we want to remove the placeholder. Wait, `new_items_str` starts with `,\n`.
    # Actually, babylon is `}, { id: "Adab" ... }`. So we replace `target` with the new entries (without leading comma since Babylon already provided one before Adab? No, Babylon has `,` before target).
    
    # Let's just replace target with the first item (no leading comma) and the rest with leading comma
    first_item = json.dumps(entries[0], ensure_ascii=False, indent=4).replace('\n', '\n                        ')
    rest_items = ""
    for e in entries[1:]:
        rest_items += ",\n                        " + json.dumps(e, ensure_ascii=False, indent=4).replace('\n', '\n                        ')
    
    replacement = first_item + rest_items
    content = content.replace(target, replacement)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully added {len(entries)} cities and removed placeholder Adab.")
else:
    print("Could not find the Adab placeholder. Appending to the end of cities array instead.")
    # Fallback to appending
    # Find cities end
    cities_end_target = """                        keywords: ["أدب", "adab", "ud-nun", "مدينة أدب"]
                    }
                ]
            },"""
    if cities_end_target in content:
        replacement = """                        keywords: ["أدب", "adab", "ud-nun", "مدينة أدب"]
                    }""" + new_items_str + """
                ]
            },"""
        content = content.replace(cities_end_target, replacement)
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully appended {len(entries)} cities.")
    else:
        print("Could not find insertion point!")
