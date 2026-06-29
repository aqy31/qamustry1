import pandas as pd
import json
import re

# Read Excel file
df = pd.read_excel('فهرسة بالمفردات الاكدية ب.xlsx', header=None)
df = df.where(pd.notnull(df), None)

entries = []
current_entry = None

for idx, row in df.iterrows():
    akk = row[0]
    ar = row[1]
    labat = row[2]
    sumerian = row[3]
    cuneiform = row[4]
    
    if akk is not None and str(akk).strip() != "":
        if current_entry is not None:
            entries.append(current_entry)
        
        base_id = re.sub(r'[^a-zA-Z0-9_]', '', str(akk).lower().replace(' ', '_'))
        
        current_entry = {
            "id": f"{base_id}_b_{len(entries)}",
            "nameAr": str(ar) if ar else "",
            "nameAkk": str(akk),
            "sumerianReadings": [],
            "keywords": [str(ar)] if ar else []
        }
        
    if current_entry is not None:
        reading = {
            "arabic": str(ar) if ar else "",
            "sumerian": str(sumerian) if sumerian else "",
            "cuneiform": str(cuneiform) if cuneiform else "",
            "labat": str(int(labat)) if isinstance(labat, float) and labat.is_integer() else str(labat) if labat else ""
        }
        current_entry["sumerianReadings"].append(reading)

if current_entry is not None:
    entries.append(current_entry)

# Convert to formatted string
new_items_str = ""
for e in entries:
    new_items_str += ",\n" + json.dumps(e, ensure_ascii=False, indent=4).replace('\n', '\n    ')

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the end of akkadian_lexicon entries
# The end of akkadian_lexicon is:
# 5512:     }
# 5513: ]
# 5514:             },
# 5516:             // ============================================
# 5517:             // المدن — CITIES

target = """    }
]
            },

            // ============================================
            // المدن — CITIES"""

replacement = """    }""" + new_items_str + """
]
            },

            // ============================================
            // المدن — CITIES"""

if target in content:
    content = content.replace(target, replacement)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully added new entries to index.html")
else:
    print("Could not find the insertion point in index.html")

