import pandas as pd
import json
import re

# Read Excel file
df = pd.read_excel('اله.xlsx', header=None)
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
        
        base_id = re.sub(r'[^a-zA-Z0-9_]', '', str(akk).lower().replace(' ', '_').replace('/', ''))
        
        current_entry = {
            "id": f"god_{base_id}",
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

# Replace the Gods category placeholder
target = """            gods: {
                nameAr: "الآلهة",
                nameEn: "Gods",
                entries: [
                    {
                        id: "Adad",
                        nameAr: "الاله ادد",
                        nameAkk: "adad/addu",
                        sumerianReadings: [
                            { sumerian: "DARA3", cuneiform: "𒁰", labat: 100 },
                            { sumerian: "IŠKUR", cuneiform: "𒅎", labat: 399 },
                            { sumerian: "LUGAL", cuneiform: "𒈗", labat: 151 },
                            { sumerian: "U", cuneiform: "𒌋", labat: 411 }
                        ],
                        keywords: ["آنو", "anu", "anum", "انو", "إله السماء"]
                    },
                    {
                        id: "enlil",
                        nameAr: " الإله ايا ",
                        nameAkk: "aia",
                        sumerianReadings: [
                            { sumerian: "GAL", cuneiform: "𒃲", labat: 343 }
                        ],
                        keywords: ["إنليل", "انليل", "enlil", "ellil", "إله الرياح"]
                    }
                ]
            },"""

if target in content:
    # Build replacement
    first_item = json.dumps(entries[0], ensure_ascii=False, indent=4).replace('\n', '\n                        ')
    rest_items = ""
    for e in entries[1:]:
        rest_items += ",\n                        " + json.dumps(e, ensure_ascii=False, indent=4).replace('\n', '\n                        ')
    
    replacement_entries = first_item + rest_items
    replacement = f"""            gods: {{
                nameAr: "الآلهة",
                nameEn: "Gods",
                entries: [
                    {replacement_entries}
                ]
            }},"""
            
    content = content.replace(target, replacement)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully added {len(entries)} gods.")
else:
    print("Could not find the gods placeholder.")
