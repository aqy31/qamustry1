with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Revert focus change
old_focus = """                searchInput.addEventListener('focus', () => {
                    isSearchFocused = true;
                    document.getElementById('searchContainer').classList.remove('centered');
                    document.getElementById('topNav').style.transform = 'translateY(0)';
                    document.querySelector('.search-bar-row').style.transform = 'translateY(0)';"""
new_focus = """                searchInput.addEventListener('focus', () => {
                    isSearchFocused = true;
                    document.getElementById('topNav').style.transform = 'translateY(0)';
                    document.querySelector('.search-bar-row').style.transform = 'translateY(0)';"""
html = html.replace(old_focus, new_focus)

# Revert blur change
old_blur = """                searchInput.addEventListener('blur', () => {
                    isSearchFocused = false;
                    if (searchInput.value.trim().length === 0) {
                        document.getElementById('searchContainer').classList.add('centered');
                    }
                });"""
new_blur = """                searchInput.addEventListener('blur', () => {
                    isSearchFocused = false;
                });"""
html = html.replace(old_blur, new_blur)

# Revert doSearch change
old_do_search = """            if (normalizedQ.length === 0) {
                if (!document.activeElement || document.activeElement.id !== 'searchInput') {
                    container.classList.add('centered');
                }
                document.getElementById('autocompleteDropdown').style.display = 'none';
                return;
            } else { container.classList.remove('centered'); }"""
new_do_search = """            if (normalizedQ.length === 0) {
                container.classList.add('centered');
                document.getElementById('autocompleteDropdown').style.display = 'none';
                return;
            } else { container.classList.remove('centered'); }"""
html = html.replace(old_do_search, new_do_search)

# Fix CSS so it doesn't jump wildly on mobile
old_css = """.search-container.centered .search-bar-row {
            margin-top: 30vh;
        }"""
new_css = """.search-container.centered .search-bar-row {
            margin-top: 30vh;
        }
        @media (max-width: 768px) {
            .search-container.centered .search-bar-row {
                margin-top: 2vh; /* تقليل القفزة في الموبايل */
            }
        }"""
html = html.replace(old_css, new_css)

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Fixed search bar jump on mobile.")
