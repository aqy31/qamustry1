import pandas as pd
import json

df = pd.read_excel('/Users/abdulrhman/Documents/تجربه ذكائ اصنطاعي في موقع القاموس /فهرست اكدي .xlsx')
# drop completely empty rows
df = df.dropna(how='all')
df = df.fillna('')
print(json.dumps(df.head(25).to_dict(orient='records'), ensure_ascii=False, indent=2))
