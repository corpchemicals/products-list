const jsonContainer = document.querySelector("#json")

const codes = [
 "OHK001",
 "OHG001",
 "OFK001",
 "OFB001", 
]

const names = [
 "Kit Oring para Reparación de gatos y Cajetines Hidráulicos (110 Piezas)",
 "Oring Tapa Guía para Gato Tipo Botella 20 TN",
 "Kit Oring para Frenos (200 Piezas)",
 "Oring Bomba de Freno Wagoneer / Caprice / Malibu (10 Unidades)"
]

const prices = [
  13.70,
  6.05,
  26.08,
  2.08,
]

function newData(data) {
const codesLength = codes.length
const namesLength = names.length
const pricesLength = prices.length

if(pricesLength > 0 && pricesLength !== codesLength) alert("Faltó un valor en prices")
if(namesLength > 0 && namesLength !== codesLength) alert("Faltó un valor en names")


codes.forEach((code, index) => {
const keyName = code.toLowerCase()
const category = code.replace(/[0-9]/g, '').toLowerCase();
// const category ="or900"
const dataIndex = data[category].findIndex(element => element.keyName === keyName)
if(dataIndex !== -1) {
if(pricesLength > 0) data[category][dataIndex]["uPrice"] = prices[index]
if(namesLength > 0) data[category][dataIndex]["name"] = names[index]
} else {
console.log(`${keyName}: No Existía, fue creado`);
const newProduct = {
"number": code.replace(/[a-zA-Z]/g, '').toLowerCase(),
"name": names[index],
"uPrice": prices[index],
"keyName": keyName
}
console.log(newProduct);
data[category].push(newProduct)
}
})
}

fetch('./products.json')
.then(response => response.json())
.then(data => { 
newData(data)
 jsonContainer.innerText = JSON.stringify(data);
})