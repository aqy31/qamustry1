import pandas as pd
import json
import re

# 1. Parse Excel
df = pd.read_excel('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /فهرست اكدي -2.xlsx')
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
        clean_id = re.sub(r'[^a-zA-ZāēīōūšṣṭḫĀĒĪŌŪŠṢṬḪ]', '', akk).lower()
        if not clean_id:
            clean_id = f"entry_{len(entries)}"
        
        current_entry = {
            "id": clean_id + "_" + str(len(entries)),
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
        if current_entry:
            current_entry["sumerianReadings"].append({
                "arabic": ar,
                "sumerian": sumerian,
                "cuneiform": cunei,
                "labat": sign_num
            })
            if ar and ar not in current_entry["nameAr"]:
                current_entry["keywords"].extend([k.strip() for k in ar.split('،') if k.strip()])

new_entries_json_str = json.dumps(entries, ensure_ascii=False, indent=4)

# 2. Update HTML
with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'r', encoding='utf-8') as f:
    html = f.read()

pattern_entries = r'(akkadian_lexicon:\s*\{\s*nameAr:\s*"[^"]*",\s*nameEn:\s*"[^"]*",\s*entries:\s*)\[.*?\](\s*\}(?:,\s*)?// ============================================)'
html = re.sub(pattern_entries, r'\1' + new_entries_json_str.replace('\\', '\\\\') + r'\2', html, flags=re.DOTALL)

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Updated index.html with {len(entries)} entries from the new excel file.")
