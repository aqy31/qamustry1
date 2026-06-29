import pandas as pd
import json

df = pd.read_excel('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /فهرست اكدي .xlsx')
df = df.dropna(how='all')
df = df.fillna('')
records = df.to_dict(orient='records')
for r in records:
    if r['Akkadian'] == '' and r['Arabic'] != '':
        print("Found empty Akkadian with Arabic:", r)
