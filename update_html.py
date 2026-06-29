import re
import json

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('new_lexicon.json', 'r', encoding='utf-8') as f:
    new_entries_json_str = f.read()

# Replace entries
# The data is between:
#             akkadian_lexicon: {
#                 nameAr: "فهرست اللغة الأكدية",
#                 nameEn: "Akkadian Lexicon",
#                 entries: [
#                     ...
#                 ]
#             },
#             // ============================================
#             // المدن — CITIES

pattern_entries = r'(akkadian_lexicon:\s*\{\s*nameAr:\s*"[^"]*",\s*nameEn:\s*"[^"]*",\s*entries:\s*)\[.*?\](\s*\}(?:,\s*)?// ============================================)'
html = re.sub(pattern_entries, r'\1' + new_entries_json_str.replace('\\', '\\\\') + r'\2', html, flags=re.DOTALL)

# Now modify CSS for .akk-akk
html = re.sub(r'(\.akk-akk\s*\{[^}]*font-size:\s*)1\.8rem([^}]*\})', r'\g<1>2.2rem\2', html)
html = re.sub(r'(\.akk-akk\s*\{[^}]*font-size:\s*)1\.3rem([^}]*\})', r'\g<1>1.6rem\2', html)

# Modify HTML template
#   <div class="akk-ar">
#       ${index === 0 ? entry.nameAr : ''}
#   </div>
# to
#   <div class="akk-ar">
#       ${r.arabic || ''}
#   </div>

html = html.replace(
    '<div class="akk-ar">\n                            ${index === 0 ? entry.nameAr : \'\'}\n                        </div>',
    '<div class="akk-ar">\n                            ${r.arabic || \'\'}\n                        </div>'
)

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html")
