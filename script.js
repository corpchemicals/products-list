const jsonContainer = document.querySelector("#json") 

const codes = [
  "ORMM002",
  "ORMM003",
  "ORMM004",
  "ORMM005",
  "ORMM006",
  "ORMM007",
  "ORMM008",
  "ORMM009",
  "ORMM010",
  "ORMM011",
  "ORMM012",
  "ORMM013",
  "ORMM014",
  "ORMM015",
  "ORMM016",
  "ORMM017",
  "ORMM018",
  "ORMM019",
  "ORMM020",
  "ORMM021",
  "ORMM022",
  "ORMM023",
  "ORMM024",
  "ORMM025",
  "ORMM026",
  "ORMM027",
  "ORMM028",
  "ORMM029",
  "ORMM030",
  "ORMM031",
  "ORMM032",
  "ORMM033",
  "ORMM034",
  "ORMM035",
  "ORMM036",
  "ORMM037",
  "ORMM038",
  "ORMM039",
  "ORMM040",
  "ORMM041",
  "ORMM042",
  "ORMM057",
  "ORMM043",
  "ORMM044",
  "ORMM045",
  "ORMM046",
  "ORMM047",
  "ORMM048",
  "ORMM049",
  "ORMM050",
  "ORMM051",
  "ORMM001",
  "ORMM053",
  "ORMM052",
  "ORMM054",
  "ORMM055",
  "ORMM056",  
]

const names = [
"Oring Milimetrico NBR  4x3",
"Oring Milimetrico NBR  8x3",
"Oring Milimetrico NBR  10x3",
"Oring Milimetrico NBR  11x3",
"Oring Milimetrico NBR  12x3",
"Oring Milimetrico NBR  13x3",
"Oring Milimetrico NBR  14x3",
"Oring Milimetrico NBR  20x3",
"Oring Milimetrico NBR  28x3",
"Oring Milimetrico NBR  38x3",
"Oring Milimetrico NBR  40x3",
"Oring Milimetrico NBR  56x3",
"Oring Milimetrico NBR  84x3",
"Oring Milimetrico NBR  85x3",
"Oring Milimetrico NBR  96x3",
"Oring Milimetrico NBR  99x3",
"Oring Milimetrico NBR  101x3",
"Oring Milimetrico NBR  109x3",
"Oring Milimetrico NBR  142x3",
"Oring Milimetrico NBR  4x2",
"Oring Milimetrico NBR  5x2",
"Oring Milimetrico NBR  6x2",
"Oring Milimetrico NBR  7x2",
"Oring Milimetrico NBR  8x2",
"Oring Milimetrico NBR  9x2",
"Oring Milimetrico NBR  10x2",
"Oring Milimetrico NBR  11x2",
"Oring Milimetrico NBR  12x2",
"Oring Milimetrico NBR  13x2",
"Oring Milimetrico NBR  14x2",
"Oring Milimetrico NBR  15x2",
"Oring Milimetrico NBR  16x2",
"Oring Milimetrico NBR  17x2",
"Oring Milimetrico NBR  18x2",
"Oring Milimetrico NBR  19x2",
"Oring Milimetrico NBR  20x2",
"Oring Milimetrico NBR  21x2",
"Oring Milimetrico NBR  22x2",
"Oring Milimetrico NBR  23x2",
"Oring Milimetrico NBR  75x2",
"Oring Milimetrico NBR  10x2.5",
"Oring Milimetrico NBR  91.92x2.95",
"Oring Milimetrico NBR  20x4",
"Oring Milimetrico NBR  21x4",
"Oring Milimetrico NBR  27x4",
"Oring Milimetrico NBR  28x4",
"Oring Milimetrico NBR  30x4",
"Oring Milimetrico NBR  32x4",
"Oring Milimetrico NBR  33x4",
"Oring Milimetrico NBR  34x4",
"Oring Milimetrico NBR  35x4",
"Oring Milimetrico NBR  36x4",
"Oring Milimetrico NBR  46x4",
"Oring Milimetrico NBR  55x4",
"Oring Milimetrico NBR  18x6",
"Oring Milimetrico NBR  22x6",
"Oring Milimetrico NBR  16x7",
]

const prices = [
  0.2318,
  0.2025,
  0.2187,
  0.2210,
  0.2264,
  0.2295,
  0.2318,
  0.2649,
  0.3103,
  0.3596,
  0.3773,
  0.5167,
  0.6961,
  0.7022,
  0.7785,
  0.8193,
  0.8385,
  0.9048,
  1.2220,
  0.1856,
  0.1871,
  0.1910,
  0.1925,
  0.1940,
  0.1956,
  0.1956,
  0.1979,
  0.2025,
  0.2048,
  0.2087,
  0.2133,
  0.2141,
  0.2187,
  0.2225,
  0.2264,
  0.2318,
  0.2364,
  0.2418,
  0.2441,
  0.5344,
  0.2064,
  0.8109,
  0.3042,
  0.3149,
  0.3611,
  0.3665,
  0.3796,
  0.3950,
  0.3989,
  0.4012,
  0.4073,
  0.4150,
  0.5097,
  0.6237,
  0.4682,
  0.4951,
  0.4759,
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
    // const category = "or900"
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