const jsonContainer = document.querySelector("#json") 

const codes = [
  "OR102",
  "OR103",
  "OR104",
  "OR105",
  "OR106",
  "OR107",
  "OR108",
  "OR109",
  "OR110",
  "OR111",
  "OR112",
  "OR113",
  "OR114",
  "OR115",
  "OR116",
  "OR117",
  "OR118",
  "OR119",
  "OR120",
  "OR121",
  "OR122",
  "OR123",
  "OR124",
  "OR125",
  "OR126",
  "OR127",
  "OR128",
  "OR129",
  "OR130",
  "OR131",
  "OR132",
  "OR133",
  "OR134",
  "OR135",
  "OR136",
  "OR137",
  "OR138",
  "OR139",
  "OR140",
  "OR141",
  "OR142",
  "OR143",
  "OR144",
  "OR145",
  "OR146",
  "OR147",
  "OR148",
  "OR149",
  "OR150",
  "OR151",
  "OR152",
  "OR153",
  "OR154",
  "OR155",
  "OR156",
  "OR157",
  "OR158",
  "OR159",
  "OR160",
  "OR161",
  "OR162",
  "OR163",
  "OR164",
  "OR165",
  "OR166",
  "OR167",
  "OR168",
  "OR169",
  "OR170",
  "OR171",
  "OR172",
  "OR173",
  "OR174",
  "OR175",
  "OR176",
  "OR177",
  "OR178",  
]

const names = [
]

const prices = [
  0.0387,
0.0387,
0.0387,
0.0405,
0.0440,
0.0475,
0.0510,
0.0690,
0.0599,
0.0808,
0.0809,
0.0915,
0.0985,
0.1091,
0.1231,
0.1302,
0.1425,
0.1554,
0.1583,
0.1653,
0.1818,
0.4845,
0.1970,
0.2181,
0.2404,
0.4953,
0.2586,
0.5007,
0.2990,
0.5088,
0.3201,
0.5196,
0.3465,
0.3641,
0.3799,
0.3922,
0.5409,
0.4204,
0.5535,
0.5559,
0.4626,
0.4802,
0.5661,
0.5154,
0.5394,
0.5453,
0.5804,
0.5863,
0.6567,
0.6625,
0.7329,
0.7915,
0.8325,
0.8970,
0.9381,
1.0143,
1.0495,
1.0806,
1.1045,
1.1633,
1.1351,
1.3759,
1.3907,
1.4414,
1.4750,
1.6183,
1.6478,
1.7117,
2.2604,
2.3251,
2.4455,
2.5078,
2.5389,
2.5700,
2.5995,
2.6863,
2.7548,
]

function newData(data) {
  const codesLength = codes.length
  const namesLength = names.length
  const pricesLength = prices.length

  if(pricesLength > 0 && pricesLength !== codesLength) console.log("Faltó un valor en prices")
  if(namesLength > 0 && namesLength !== codesLength) console.log("Faltó un valor en names")


  codes.forEach((code, index) => {
    const keyName = code.toLowerCase()
    // const category = code.replace(/[0-9]/g, '').toLowerCase();
    const category = "or100"
    const dataIndex = data[category].findIndex(element => element.keyName === keyName)
    if(dataIndex !== -1) {
      if(pricesLength > 0) data[category][dataIndex]["uPrice"] = prices[index]
      if(namesLength > 0) data[category][dataIndex]["name"] = names[index]
    } else {
      console.log(`${keyName}: No Existe`);
    }
  })
}

fetch('./products.json')
.then(response => response.json())
.then(data => { 
  newData(data)
 jsonContainer.innerText = JSON.stringify(data);
})