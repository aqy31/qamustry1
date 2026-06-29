import re

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update the Akkadian layout header
old_layout = """<div class="ed-head" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap;">
                        <div class="ed-name-ar" style="flex: 1; text-align: right; margin-bottom: 0;">${entry.nameAr}</div>
                        <div class="ed-name-akk" style="flex: 0 0 auto; text-align: left; font-size: 2.2rem; margin-bottom: 0; margin-top: 8px; color: var(--red); opacity: 0.85;">${akkNameOnly}</div>
                    </div>"""

new_layout = """<div class="ed-head" style="display: block; text-align: right; padding-bottom: 10px;">
                        <div class="ed-name-akk" style="float: left; text-align: left; font-size: 2.2rem; margin-bottom: 5px; margin-top: 5px; margin-right: 20px; color: var(--red); opacity: 0.85;">${akkNameOnly}</div>
                        <div class="ed-name-ar" style="display: block; margin-bottom: 0; padding-top: 5px;">${entry.nameAr}</div>
                        <div style="clear: both;"></div>
                    </div>"""
html = html.replace(old_layout, new_layout)

# 2. Update the search focus logic
# Replace `searchInput.addEventListener('focus', () => {`
# to add `document.getElementById('searchContainer').classList.remove('centered');`
old_focus = """                searchInput.addEventListener('focus', () => {
                    isSearchFocused = true;
                    document.getElementById('topNav').style.transform = 'translateY(0)';
                    document.querySelector('.search-bar-row').style.transform = 'translateY(0)';"""
new_focus = """                searchInput.addEventListener('focus', () => {
                    isSearchFocused = true;
                    document.getElementById('searchContainer').classList.remove('centered');
                    document.getElementById('topNav').style.transform = 'translateY(0)';
                    document.querySelector('.search-bar-row').style.transform = 'translateY(0)';"""
html = html.replace(old_focus, new_focus)

# 3. Update the search blur logic
old_blur = """                searchInput.addEventListener('blur', () => {
                    isSearchFocused = false;
                });"""
new_blur = """                searchInput.addEventListener('blur', () => {
                    isSearchFocused = false;
                    if (searchInput.value.trim().length === 0) {
                        document.getElementById('searchContainer').classList.add('centered');
                    }
                });"""
html = html.replace(old_blur, new_blur)

# 4. Update doSearch logic so it doesn't jump back and forth
old_do_search = """            if (normalizedQ.length === 0) {
                container.classList.add('centered');
                document.getElementById('autocompleteDropdown').style.display = 'none';
                return;
            } else { container.classList.remove('centered'); }"""
new_do_search = """            if (normalizedQ.length === 0) {
                if (!document.activeElement || document.activeElement.id !== 'searchInput') {
                    container.classList.add('centered');
                }
                document.getElementById('autocompleteDropdown').style.display = 'none';
                return;
            } else { container.classList.remove('centered'); }"""
html = html.replace(old_do_search, new_do_search)

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated HTML logic.")
