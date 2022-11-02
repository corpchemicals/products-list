const jsonContainer = document.querySelector("#json") 

const codes = [
"OBA002",
"OBA006",
"OBA007",
"OBA010",
"OBA011",
"OBA012",
"OCM001",
"OCM002",
"OUU001",
"OUU002",
"OGK001",
"OGK002",
"OGK003",
"OGF001",
"OOK001",
]

const names = [
 "Oring Bomba de Agua 1/2 HP",
 "Oring Bomba de Agua 1 HP",
 "Oring Bomba de Agua 3/4 HP",
 "Oring Bomba de Agua Asiatica para Base de Lavadora LG Puro Cuerpo 35 - 45 - 85 Watts",
 "Oring Tapa Bomba de Agua Centrifuga 1 HP",
 "Oring Tapa Bomba de Agua Centrifuga 2 HP",
 "Oring Conector Manguera de Agua 3/8",
 "Oring Conector Manguera de Agua 3/4",
 "Oring para Unión Universal Junta Soldada Tubrica 1/2",
 "Oring para Unión Universal Junta Soldada Tubrica 3/4",
 "Kit Oring para Vastagos (100 Piezas)",
 "Kit Oring para Cuellos (120 Piezas)",
 "Kit Oring para Monomandos (40 Piezas)",
 "Oring Filtro de Agua Planta Ozono",
 "Kit Oring Bombonas de Oxigeno (140 Piezas)",
]

const prices = [
 0.5535,
 0.5394,
 0.5559,
 0.4204,
 1.6493,
 2.6003,
 0.0333,
 0.2391,
 0.2391,
 0.2604,
 4.1300,
 9.39,
 12.89,
 10.55,
 8.26,
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