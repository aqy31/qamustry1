import json

coordinates_map = {
    "city_adab": {"lat": 31.948, "lng": 45.969},
    "city_akkad": {"lat": 33.1, "lng": 44.1},
    "city_aksak": {"lat": 33.9, "lng": 44.3},
    "city_amurru": {"lat": 34.5, "lng": 36.5},
    "city_arbeles": {"lat": 36.191, "lng": 44.009},
    "city_arrapha": {"lat": 35.468, "lng": 44.392},
    "city_aratta": {"lat": 33.0, "lng": 49.0},
    "city_asur": {"lat": 35.456, "lng": 43.261},
    "city_dilmun": {"lat": 26.06, "lng": 50.55},
    "city_eridu": {"lat": 30.81, "lng": 45.99},
    "city_esinunna": {"lat": 33.75, "lng": 44.73}, 
    "city_girsu": {"lat": 31.55, "lng": 46.15},
    "city_halab": {"lat": 36.2, "lng": 37.15},
    "city_harran": {"lat": 36.86, "lng": 39.03},
    "city_isin": {"lat": 31.88, "lng": 45.27},
    "city_kis": {"lat": 32.53, "lng": 44.60},
    "city_kullab": {"lat": 31.32, "lng": 45.63},
    "city_larsa": {"lat": 31.28, "lng": 45.85},
    "city_mari": {"lat": 34.55, "lng": 40.89},
    "city_nimrud": {"lat": 36.09, "lng": 43.32},
    "city_ninua": {"lat": 36.36, "lng": 43.15},
    "city_nippur": {"lat": 32.12, "lng": 45.23},
    "city_sippar": {"lat": 33.06, "lng": 44.25},
    "city_susan": {"lat": 32.19, "lng": 48.24},
    "city_suruppak": {"lat": 31.77, "lng": 45.51},
    "city_terqa": {"lat": 34.93, "lng": 40.52},
    "city_tuttul": {"lat": 35.95, "lng": 39.05},
    "city_umma": {"lat": 31.66, "lng": 45.88},
    "city_ur": {"lat": 30.96, "lng": 46.10},
    "city_uruk": {"lat": 31.32, "lng": 45.63}
}

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

count = 0
for city_id, coords in coordinates_map.items():
    target_str = f'"id": "{city_id}",'
    replacement_str = f'"id": "{city_id}",\n                            "coordinates": {{ "lat": {coords["lat"]}, "lng": {coords["lng"]} }},'
    if target_str in content:
        content = content.replace(target_str, replacement_str)
        count += 1

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Coordinates successfully added to {count} matching cities!")
