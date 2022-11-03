const jsonContainer = document.querySelector("#json")

const codes = [
  "OR400",
  "OR401",
  "OR402",
  "OR404",
  "OR405",
  "OR406",
  "OR407",
  "OR408",
  "OR409",
  "OR410",
  "OR411",
  "OR412",
  "OR413",
  "OR414",
  "OR415",
  "OR416",
  "OR417",
  "OR418",
  "OR419",
  "OR420",
  "OR421",
  "OR422",
  "OR423",
  "OR424",
  "OR425",
  "OR426",
  "OR427",
  "OR428",
  "OR429",
  "OR430",
  "OR431",
  "OR432",
  "OR433",
  "OR434",
  "OR435",
  "OR436",
  "OR437",
  "OR438",
  "OR439",
  "OR440",
  "OR441",
  "OR442",
  "OR443",
  "OR444",
  "OR445",
  "OR446",
  "OR447",
  "OR448",
  "OR449",  
]

const names = [
]

const prices = [
  1.0511,
  1.0868,
  1.1123,
  1.1834,
  1.5295,
  1.5847,
  1.6052,
  1.6263,
  1.6895,
  1.7422,
  1.7664,
  1.8017,
  2.1420,
  2.1658,
  2.1931,
  2.2406,
  2.4940,
  2.3681,
  2.4077,
  2.4955,
  2.5308,
  2.5538,
  2.5769,
  2.6122,
  2.7750,
  2.9951,
  3.0611,
  3.1275,
  3.2352,
  3.3134,
  3.3939,
  3.4465,
  3.5151,
  3.5690,
  3.6822,
  4.0158,
  3.9717,
  4.1296,
  4.2195,
  4.4551,
  4.8255,
  4.9795,
  5.0864,
  5.2785,
  5.3020,
  5.6985,
  5.9118,
  6.0552,
  6.3269,  
]

function newData(data) {
  const codesLength = codes.length
  const namesLength = names.length
  const pricesLength = prices.length

  if(pricesLength > 0 && pricesLength !== codesLength) alert("Faltó un valor en prices")
  if(namesLength > 0 && namesLength !== codesLength) alert("Faltó un valor en names")


  codes.forEach((code, index) => {
  const keyName = code.toLowerCase()
  // const category = code.replace(/[0-9]/g, '').toLowerCase();
  const category ="or400"
  const dataIndex = data[category].findIndex(element => element.keyName === keyName)
  if(dataIndex !== -1) {
    if(pricesLength > 0) data[category][dataIndex]["uPrice"] = prices[index]
    if(namesLength > 0) data[category][dataIndex]["name"] = names[index]
    if(data[category][dataIndex]["name"] === undefined) {
      const newName = `Oring NBR ${code.replace(/[a-zA-Z]/g, '').toLowerCase()}`
      console.log(`El ${keyName} no tiene nombre, se le va a crear ${newName}`);
      data[category][dataIndex]["name"] = newName
    }
  } else {
    console.log(`${keyName}: No Existía, fue creado`);
    const newProduct = {
    "number": code.replace(/[a-zA-Z]/g, '').toLowerCase(),
    "name": names[index] || alert('Será creado sin nombre'),
    "uPrice": prices[index],
    "keyName": keyName
    }
    console.log(newProduct);
    data[category].push(newProduct)
  }
  })
}

function sortData(data) {
  Object.keys(data).forEach(key => {
    data[key].sort((a,b) => a.number - b.number)
  })
}

fetch('./products.json')
.then(response => response.json())
.then(data => { 
  newData(data)
  sortData(data)
 jsonContainer.innerText = JSON.stringify(data);
})