import pandas as pd
import json
import re

# Comprehensive coordinates mapping for 65+ cities
coords_map = {
    "adab": {"lat": 31.948, "lng": 45.969},
    "akkad": {"lat": 33.1, "lng": 44.1},
    "aksak": {"lat": 33.9, "lng": 44.3},
    "amurru": {"lat": 34.5, "lng": 36.5},
    "arbeles": {"lat": 36.191, "lng": 44.009},
    "arrapha": {"lat": 35.468, "lng": 44.392},
    "aratta": {"lat": 33.0, "lng": 49.0},
    "asur": {"lat": 35.456, "lng": 43.261},
    "awil": {"lat": 33.0, "lng": 44.0}, # fallback
    "babilon": {"lat": 32.542, "lng": 44.421},
    "babilu": {"lat": 32.542, "lng": 44.421},
    "badtibira": {"lat": 31.78, "lng": 45.99},
    "basta": {"lat": 33.0, "lng": 44.0}, # fallback
    "bilak": {"lat": 33.0, "lng": 44.0}, # fallback
    "birs": {"lat": 32.39, "lng": 44.34}, # Borsippa
    "borsippa": {"lat": 32.39, "lng": 44.34},
    "der": {"lat": 33.15, "lng": 46.28},
    "dilmun": {"lat": 26.06, "lng": 50.55},
    "durkurigalzu": {"lat": 33.35, "lng": 44.13}, # Aqar Quf
    "dursarrukin": {"lat": 36.51, "lng": 43.30}, # Khorsabad
    "ebla": {"lat": 35.79, "lng": 36.79},
    "elam": {"lat": 32.0, "lng": 48.0},
    "eris": {"lat": 31.81, "lng": 45.96},
    "eridu": {"lat": 30.81, "lng": 45.99},
    "esnunna": {"lat": 33.75, "lng": 44.73},
    "girsu": {"lat": 31.55, "lng": 46.15},
    "guti": {"lat": 35.0, "lng": 45.0}, # Gutium
    "halab": {"lat": 36.20, "lng": 37.15},
    "harran": {"lat": 36.86, "lng": 39.03},
    "hatra": {"lat": 35.59, "lng": 42.71},
    "isana": {"lat": 34.5, "lng": 43.5},
    "isin": {"lat": 31.88, "lng": 45.27},
    "karkamis": {"lat": 36.83, "lng": 38.01},
    "kassu": {"lat": 34.0, "lng": 46.0}, # Kassites
    "kes": {"lat": 31.9, "lng": 45.1},
    "kish": {"lat": 32.53, "lng": 44.60},
    "kis": {"lat": 32.53, "lng": 44.60},
    "kullab": {"lat": 31.32, "lng": 45.63},
    "kuta": {"lat": 32.76, "lng": 44.62},
    "lagas": {"lat": 31.40, "lng": 46.40},
    "larsa": {"lat": 31.28, "lng": 45.85},
    "magan": {"lat": 23.0, "lng": 57.0}, # Oman
    "makan": {"lat": 23.0, "lng": 57.0},
    "mari": {"lat": 34.55, "lng": 40.89},
    "meluhha": {"lat": 25.0, "lng": 65.0}, # Indus
    "nimrud": {"lat": 36.09, "lng": 43.32}, # Kalhu
    "ninua": {"lat": 36.36, "lng": 43.15},
    "nippur": {"lat": 32.12, "lng": 45.23},
    "nuzi": {"lat": 35.31, "lng": 44.25},
    "susa": {"lat": 32.19, "lng": 48.24},
    "susan": {"lat": 32.19, "lng": 48.24},
    "sus": {"lat": 32.19, "lng": 48.24},
    "sippar": {"lat": 33.06, "lng": 44.25},
    "sirara": {"lat": 31.5, "lng": 46.2},
    "suruppak": {"lat": 31.77, "lng": 45.51},
    "terqa": {"lat": 34.93, "lng": 40.52},
    "tuttul": {"lat": 35.95, "lng": 39.05},
    "ugarit": {"lat": 35.60, "lng": 35.78},
    "umma": {"lat": 31.66, "lng": 45.88},
    "ur": {"lat": 30.96, "lng": 46.10},
    "urartu": {"lat": 38.0, "lng": 43.0},
    "uruk": {"lat": 31.32, "lng": 45.63},
    "zabalam": {"lat": 31.75, "lng": 45.87},
    "zimbir": {"lat": 33.06, "lng": 44.25} # Sippar
}

# Read Excel file
df = pd.read_excel('مدن .xlsx', header=None)
df = df.where(pd.notnull(df), None)

entries = []
current_entry = None

def get_coords(city_name):
    clean = re.sub(r'[^a-z0-9]', '', str(city_name).lower())
    if clean in coords_map: return coords_map[clean]
    for key in coords_map:
        if key in clean or clean in key:
            return coords_map[key]
    return {"lat": 33.0, "lng": 44.0} # default somewhere in central Iraq

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
        
        # Remove "مدينة " if it exists
        ar_clean = str(ar).replace('مدينة ', '').replace('مدينة', '').strip() if ar else ""
        
        current_entry = {
            "id": f"city_{base_id}",
            "nameAr": ar_clean,
            "nameAkk": str(akk),
            "sumerianReadings": [],
            "keywords": [str(akk)]
        }
        if ar_clean:
            current_entry["keywords"].append(ar_clean)
        
        # ADD COORDINATES HERE
        current_entry["coordinates"] = get_coords(str(akk))
        
    if current_entry is not None:
        if str(sumerian).strip() == '#ERROR!':
            sumerian = ""
            
        reading = {
            "sumerian": str(sumerian) if sumerian else "",
            "cuneiform": str(cuneiform) if cuneiform else ""
        }
        if labat is not None:
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
# We need to prepend babylon as well since it was historically there
babylon = {
    "id": "babylon",
    "nameAr": "بابل",
    "nameAkk": "bābilu",
    "sumerianReadings": [
        { "sumerian": "E-KI", "cuneiform": "𒂍𒆠",  "labat": 141 },
        { "sumerian": "KÁ-DINGIR(-RA)", "cuneiform": "𒆍𒀭را", "labat": 97 },
        { "sumerian": "KÁ-DINGIR(-MEŠ)", "cuneiform": "𒆍𒀭𒈨𒌍", "labat": 97 },
        { "sumerian": "KÁ-DIŠ(-DIŠ)", "cuneiform": "𒆍𒁹𒁹", "labat": 97 },
        { "sumerian": "NUN", "cuneiform": "𒉣", "labat": 79 },
        { "sumerian": "ŠU-AN-NA", "cuneiform": "𒋗𒀭𒈾", "labat": 163 },
        { "sumerian": "TIN-TIR", "cuneiform": "𒁷𒌁", "labat": 209 },
        { "sumerian": "(UD-)KIB-NUN", "cuneiform": "𒌓𒄒𒉣", "labat": 125 }
    ],
    "coordinates": { "lat": 32.5421, "lng": 44.4210 },
    "keywords": ["بابل", "babylon", "babil", "بابليون", "bābilu", "babilu", "باب ايلي"]
}

# Prepend babylon if not already in entries
babylon_found = any("babil" in e["nameAkk"].lower() for e in entries)
if not babylon_found:
    entries.insert(0, babylon)
else:
    # ensure it has the readings
    for e in entries:
        if "babil" in e["nameAkk"].lower():
            e["sumerianReadings"].extend(babylon["sumerianReadings"])

first_item = json.dumps(entries[0], ensure_ascii=False, indent=4).replace('\n', '\n                        ')
rest_items = ""
for e in entries[1:]:
    rest_items += ",\n                        " + json.dumps(e, ensure_ascii=False, indent=4).replace('\n', '\n                        ')

replacement_entries = first_item + rest_items

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace cities block completely
# Use string partition to find start and end of cities array
start_marker = 'cities: {\n                nameAr: "المدن",\n                nameEn: "Cities",\n                entries: [\n'
end_marker = '\n                ]\n            },\n\n            // ============================================\n            // الآلهة — GODS'

if start_marker in content and end_marker in content:
    pre = content.split(start_marker)[0]
    post = content.split(end_marker)[1]
    
    new_content = pre + start_marker + "                    " + replacement_entries + end_marker + post
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced all cities with coordinates included!")
else:
    # Try alternate find
    import re
    match = re.search(r'(cities:\s*\{\s*nameAr:\s*"المدن",\s*nameEn:\s*"Cities",\s*entries:\s*\[).*?(\]\s*\})', content, re.DOTALL)
    if match:
        new_content = content[:match.end(1)] + "\n                    " + replacement_entries + "\n                " + content[match.start(2):]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully replaced all cities with coordinates included (Regex fallback)!")
    else:
        print("Could not locate cities block.")
