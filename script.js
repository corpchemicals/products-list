const jsonContainer = document.querySelector("#json")

const codes = [
  "KIT001",
  "KIT002",
  "KIT003",
  "KIT004",
  "KIT005",
  "KIT006",
  "KIT007",
  "KIT008",
  "KIT009",
  "KIT010",
  "KIT011",
  "KIT012",
  "KIT013",
  "KIT014",
  "KIT015",
  "KIT016",
  "KIT017",
  "KIT018",
  "KIT021",
  "KIT022",
  "KIT023",
  "KIT024",
  "KIT025",
  "KIT026",
  "KIT027",
  "KIT028",
  "KIT029",
  "KIT030",
  "KIT031",
  "KIT032",
  "KIT033",
  "KIT034",
  "KIT035",
  "KIT036",
  "KIT037",
  "KIT038",
]

const names = [
  "Kit de Inyección Asiático 4 CIL.",
  "Kit de Inyección Universal 6 CIL. ",
  "Kit de Inyección Universal 8 CIL. ",
  "Kit de Inyección Chevy Confort C2 / Aveo 2011 en Adelante ",
  "Kit de Inyección Universal WEBBER (EUROPEO) 4 CIL. Inyectores Marineli ",
  "Kit de Inyección AVEO hasta 2010",
  "Kit de Inyección UNIVERSAL 4 CIL ",
  "Kit de Inyección UNIVERSAL 4 CIL ",
  "Kit de Inyección Universal 6 CIL. ",
  "Kit de Inyección Universal 8 CIL. ",
  "Kit de Inyección AVEO hasta 2010",
  "Kit de Inyección UNIVERSAL GENERICO (EUROPEO) 4 CIL.",
  "Kit de Inyección Universal WEBBER (EUROPEO) 4 CIL.",
  "Kit de Inyección SILVERADO 8 CIL.",
  "Kit de Inyección SILVERADO 8 CIL. (INY 11-12) ",
  "Kit de Inyección SILVERADO 8 CIL.",
  "Kit de Inyección Asiático 6 CIL.",
  "Kit Sello Oring y Estopera para Distribuidor TOYOTA COROLLA (ALTA TEMPERATURA) ",
  "Kit de Inyección TrailBlazer 6 CIL.  Motor 4.2",
  "Kit de Inyección Asiático 8 CIL. Toyota: 4Runner / Tundra / For Tuner",
  "Kit de Inyección CHEVY CONFORT C4 - AVEO LT (53) ",
  "Kit de Inyección Asiático 6 CIL. Modelo Nuevo 2012 - 2018",
  "Kit de Inyección UNIVERSAL 4 CIL ",
  "Kit de Inyección Asiático 4 CIL.",
  "Kit de Inyección Asiático 6 CIL.",
  "Kit de Inyección Universal WEBBER (EUROPEO) 4 CIL.",
  "Kit de Inyección TrailBlazer 6 CIL.  Motor 4.2",
  "Kit Araña Blazer y Grand Blazer ",
  "Kit de Inyección Asiático 4 CIL. VITON/VITON",
  "Kit de Inyección Asiático 6 CIL.  VITON/VITON Toyota: 4Runner / Prado / For Tuner",
  "Kit de Inyección Asiático 8 CIL.   NBR/VITON",
  "Kit de Inyección Asiático 6 CIL. Modelo Nuevo 2012 - 2018 NBR/VITON",
  "Kit de Inyección Renault 4 CIL  NBR/NBR",
  "Kit de Inyección Renault 4 CIL  NBR/VITON",
  "Kit Caterpillar  NBR/NBR (132 Piezas) ",
  "Kit de Inyección Asiático TERIUS 4 CIL.",
]

const prices = [
  "1.62",
  "1.41",
  "1.85",
  "1.12",
  "1.48",
  "0.96",
  "0.97",
  "1.65",
  "2.42",
  "3.20",
  "1.59",
  "1.23",
  "2.83",
  "2.15",
  "2.18",
  "3.42",
  "2.38",
  "7.80",
  "1.39",
  "3.14",
  "1.58",
  "2.30",
  "2.32",
  "2.91",
  "4.31",
  "2.16",
  "2.34",
  "0.23",
  "3.53",
  "5.24",
  "5.71",
  "4.23",
  "1.61",
  "2.29",
  "16.82",
  "1.61"
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