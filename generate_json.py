import pandas as pd
import json
import re

df = pd.read_excel('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /فهرست اكدي .xlsx')
df = df.dropna(how='all')
df = df.fillna('')
records = df.to_dict(orient='records')

entries = []
current_entry = None

for r in records:
    akk = str(r.get('Akkadian', '')).strip()
    ar = str(r.get('Arabic', '')).strip()
    sign_num = str(r.get('Sign Number', '')).strip()
    sumerian = str(r.get('Sumerian', '')).strip()
    cunei = str(r.get('Cuneiform', '')).strip()

    if akk != '':
        # New entry
        # Extract a clean id (letters only maybe, or just use akk)
        clean_id = re.sub(r'[^a-zA-ZāēīōūšṣṭḫĀĒĪŌŪŠṢṬḪ]', '', akk).lower()
        if not clean_id:
            clean_id = f"entry_{len(entries)}"
        
        current_entry = {
            "id": clean_id + "_" + str(len(entries)),  # ensure unique
            "nameAr": ar,
            "nameAkk": akk,
            "sumerianReadings": [],
            "keywords": [k.strip() for k in ar.split('،') if k.strip()]
        }
        current_entry["sumerianReadings"].append({
            "arabic": ar,
            "sumerian": sumerian,
            "cuneiform": cunei,
            "labat": sign_num
        })
        entries.append(current_entry)
    else:
        # Belongs to previous
        if current_entry:
            current_entry["sumerianReadings"].append({
                "arabic": ar,
                "sumerian": sumerian,
                "cuneiform": cunei,
                "labat": sign_num
            })
            if ar and ar not in current_entry["nameAr"]:
                current_entry["keywords"].extend([k.strip() for k in ar.split('،') if k.strip()])

# Write to a javascript file so we can just grab the string and replace
with open('new_lexicon.json', 'w', encoding='utf-8') as f:
    json.dump(entries, f, ensure_ascii=False, indent=4)

print(f"Generated {len(entries)} entries.")
