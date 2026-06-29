import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find cities block
cities_block_match = re.search(r'(cities:\s*\{\s*nameAr:\s*"المدن",\s*nameEn:\s*"Cities",\s*entries:\s*\[.*?\]\s*\})', content, re.DOTALL)

if cities_block_match:
    cities_str = cities_block_match.group(1)
    # Remove "مدينة " from nameAr and keywords
    new_cities_str = cities_str.replace('"nameAr": "مدينة ', '"nameAr": "').replace('"مدينة ', '"')
    
    # Check if there's any other variations like "مدينة " without quotes (though in JSON they are quoted)
    new_cities_str = new_cities_str.replace('مدينة ', '')
    
    new_content = content[:cities_block_match.start(1)] + new_cities_str + content[cities_block_match.end(1):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully removed 'مدينة' from cities section.")
else:
    print("Could not find cities block.")
