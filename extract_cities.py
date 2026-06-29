import re
import json

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find cities block
cities_block_match = re.search(r'(cities:\s*\{\s*nameAr:\s*"المدن",\s*nameEn:\s*"Cities",\s*entries:\s*\[.*?\]\s*\})', content, re.DOTALL)

if cities_block_match:
    cities_str = cities_block_match.group(1)
    # Extract all city IDs
    ids = re.findall(r'"id":\s*"([^"]+)"', cities_str)
    print("Found cities:")
    for city_id in ids:
        print(city_id)
else:
    print("Cities block not found.")
