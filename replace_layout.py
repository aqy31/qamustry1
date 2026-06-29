import re

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the block for akkadian_lexicon in showDetail
start_marker = "// 1. تصميم فهرست اللغة الأكدية كما طلبت تماماً"
end_marker = "// 2. تصميم فهرست الأسماء"

new_block = """// 1. تصميم فهرست اللغة الأكدية كما طلبت تماماً
            // ============================================
            if (catKey === 'akkadian_lexicon' || isAkkadianLexiconMode) {
                let htmlStr = `
                    <div class="ed-head" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap;">
                        <div class="ed-name-ar" style="flex: 1; text-align: right; margin-bottom: 0;">${entry.nameAr}</div>
                        <div class="ed-name-akk" style="flex: 0 0 auto; text-align: left; font-size: 2.2rem; margin-bottom: 0; margin-top: 8px;">${akkNameOnly}</div>
                    </div>
                    <div class="ed-readings">
                `;
                
                const readingsHTML = entry.sumerianReadings.map((r, index) => {
                    let extraAr = '';
                    if (index > 0 && r.arabic && r.arabic.trim() !== '' && r.arabic.trim() !== entry.nameAr.trim()) {
                        extraAr = `<div style="font-family: 'Scheherazade New', 'Amiri', serif; font-size: 1.8rem; font-weight: 700; color: var(--text); margin-bottom: 10px; padding-top: 15px; border-top: 1px dashed var(--border-light);">${r.arabic}</div>`;
                    }
                    
                    return `
                        ${extraAr}
                        <div class="ed-row">
                            <span class="ed-labat" style="font-family:'Cardo', serif; color:var(--red);">
                                ${r.labat ? r.labat : ''}
                            </span>
                            <span class="ed-cunei">
                                ${r.cuneiform}
                            </span>
                            <div class="ed-row-left">
                                <span class="ed-sum">${r.sumerian}</span>
                            </div>
                        </div>
                    `;
                }).join('');
                
                htmlStr += readingsHTML + `</div>`;
                detail.innerHTML = htmlStr;
            } 
            // ============================================
            // 2. تصميم فهرست الأسماء"""

# Use regex to replace everything between start_marker and end_marker
pattern = re.compile(re.escape(start_marker) + r'.*?' + re.escape('// 2. تصميم فهرست الأسماء'), re.DOTALL)
html = pattern.sub(new_block, html)

with open('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated layout successfully.")
