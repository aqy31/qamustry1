import re
import json

# Known coordinates for ancient Mesopotamian cities
coordinates_map = {
    "adab": {"lat": 31.948, "lng": 45.969},
    "akkad": {"lat": 33.1, "lng": 44.1}, # Approximate
    "aksak": {"lat": 33.9, "lng": 44.3}, # Approximate
    "amurru": {"lat": 34.5, "lng": 36.5}, # Region
    "arbeles": {"lat": 36.191, "lng": 44.009}, # Erbil
    "arrapha": {"lat": 35.468, "lng": 44.392}, # Kirkuk
    "aratta": {"lat": 33.0, "lng": 49.0}, # Mythical/Iran
    "asur": {"lat": 35.456, "lng": 43.261},
    "babilu": {"lat": 32.542, "lng": 44.421},
    "badtibira": {"lat": 31.78, "lng": 45.99},
    "dilmun": {"lat": 26.06, "lng": 50.55}, # Bahrain
    "der": {"lat": 33.15, "lng": 46.28},
    "eris": {"lat": 31.81, "lng": 45.96}, # Eresh
    "eridu": {"lat": 30.81, "lng": 45.99},
    "esnunna": {"lat": 33.75, "lng": 44.73}, # Eshnunna
    "girsu": {"lat": 31.55, "lng": 46.15},
    "halab": {"lat": 36.2, "lng": 37.15}, # Aleppo
    "harran": {"lat": 36.86, "lng": 39.03},
    "isana": {"lat": 34.5, "lng": 43.5},
    "isin": {"lat": 31.88, "lng": 45.27},
    "karkamis": {"lat": 36.83, "lng": 38.01}, # Carchemish
    "kes": {"lat": 31.9, "lng": 45.1}, # Kesh
    "kullab": {"lat": 31.32, "lng": 45.63}, # Part of Uruk
    "kuta": {"lat": 32.76, "lng": 44.62}, # Kutha
    "larsa": {"lat": 31.28, "lng": 45.85},
    "mari": {"lat": 34.55, "lng": 40.89},
    "nimrud": {"lat": 36.09, "lng": 43.32},
    "ninua": {"lat": 36.36, "lng": 43.15}, # Nineveh
    "nippur": {"lat": 32.12, "lng": 45.23},
    "sirara": {"lat": 31.5, "lng": 46.2},
    "sippar": {"lat": 33.06, "lng": 44.25},
    "sus": {"lat": 32.19, "lng": 48.24}, # Susa
    "suruppak": {"lat": 31.77, "lng": 45.51}, # Shuruppak
    "terqa": {"lat": 34.93, "lng": 40.52},
    "tuttul": {"lat": 35.95, "lng": 39.05},
    "umma": {"lat": 31.66, "lng": 45.88},
    "ur": {"lat": 30.96, "lng": 46.10},
    "uruk": {"lat": 31.32, "lng": 45.63},
    "zabalam": {"lat": 31.75, "lng": 45.87}
}

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to find all cities in the JS object and add coordinates
# We can do this by regexing the JSON-like objects in cities category
cities_block_match = re.search(r'cities:\s*\{\s*nameAr:\s*"المدن",\s*nameEn:\s*"Cities",\s*entries:\s*\[(.*?)\]\s*\}\s*,', content, re.DOTALL)

if cities_block_match:
    cities_str = cities_block_match.group(1)
    # This is tricky because it's JS, not pure JSON (some keys might not be quoted, though my script quoted them).
    # Since my script quoted them, we can try to parse it. But babylon is not quoted!
    # Let's do a regex replacement on each city object.
    
    # Iterate over every city ID
    def add_coords(match):
        city_id = match.group(1)
        # Normalize the name for lookup
        lookup_name = city_id.lower().replace('city_', '').replace('_', '')
        
        # specific manual mappings
        if lookup_name == 'babilu': lookup_name = 'babylon'
        if lookup_name == 'asur': lookup_name = 'assur'
        if lookup_name == 'ninua': lookup_name = 'nineveh'
        if lookup_name == 'sus': lookup_name = 'susa'
        if lookup_name == 'aratta': lookup_name = 'aratta'
        
        # Check against coordinates map
        coords = coordinates_map.get(lookup_name)
        if coords:
            return match.group(0) + f',\n                            "coordinates": {{ "lat": {coords["lat"]}, "lng": {coords["lng"]} }}'
        return match.group(0)
    
    # Match keywords array to insert coordinates after it
    # Find `keywords: [...]` or `"keywords": [...]`
    new_cities_str = re.sub(r'("id"|id):\s*"([^"]+)",(.*?)(["\']?keywords["\']?:\s*\[.*?\])', add_coords, cities_str, flags=re.DOTALL)
    
    new_content = content[:cities_block_match.start(1)] + new_cities_str + content[cities_block_match.end(1):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Coordinates added!")
else:
    print("Cities block not found.")
