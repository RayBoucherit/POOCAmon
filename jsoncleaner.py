import json
import os
os.system("curl https://api.tcgdex.net/v2/en/cards/ -o res.json")
# open json file and load data
with open("res.json", "r") as file:
    data = json.load(file)

for item in data:
    if "id" in item:
        del item["id"]
    if "image" in item:
      item["img"] = item.pop("image")
    if "localId" in item:
        item["id"] = item.pop("localId")

data = [item for item in data if "img" in item]

# open json file and dump updated data
with open("res.json", "w") as file:
    json.dump(data, file)
