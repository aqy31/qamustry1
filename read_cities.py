import pandas as pd
import json

df = pd.read_excel('مدن .xlsx', header=None)
print(df.head(10).to_json(orient='records', force_ascii=False))
