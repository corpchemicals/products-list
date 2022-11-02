const jsonContainer = document.querySelector("#json") 

const codes = [
  "OR201",
  "OR202",
  "OR203",
  "OR204",
  "OR205",
  "OR206",
  "OR207",
  "OR208",
  "OR209",
  "OR210",
  "OR211",
  "OR212",
  "OR213",
  "OR214",
  "OR215",
  "OR216",
  "OR217",
  "OR218",
  "OR219",
  "OR220",
  "OR221",
  "OR222",
  "OR223",
  "OR224",
  "OR225",
  "OR226",
  "OR227",
  "OR228",
  "OR229",
  "OR230",
  "OR231",
  "OR232",
  "OR233",
  "OR234",
  "OR235",
  "OR236",
  "OR237",
  "OR238",
  "OR239",
  "OR240",
  "OR241",
  "OR242",
  "OR243",
  "OR244",
  "OR245",
  "OR246",
  "OR247",
  "OR248",
  "OR249",
  "OR250",
  "OR251",
  "OR252",
  "OR253",
  "OR254",
  "OR255",
  "OR256",
  "OR257",
  "OR258",
  "OR259",
  "OR260",
  "OR261",
  "OR262",
  "OR263",
  "OR264",
  "OR265",
  "OR267",
  "OR269",
  "OR270",
  "OR272",
  "OR274",
  "OR280",  
]

const names = [
]

const prices = [
  0.0721,
0.0879,
0.0556,
0.1095,
0.1230,
0.1392,
0.4638,
0.1704,
0.1835,
0.1840,
0.1966,
0.2080,
0.2211,
0.2391,
0.2523,
0.2604,
0.2702,
0.2884,
0.3194,
0.3335,
0.3563,
0.3686,
0.4037,
0.4510,
0.5448,
0.5458,
0.5652,
0.6055,
0.6811,
0.6897,
0.7125,
0.7599,
0.8011,
0.8652,
0.8898,
0.8923,
0.9055,
0.9403,
1.0049,
1.0553,
1.0935,
1.1203,
1.1601,
1.1923,
1.2989,
1.1412,
1.1241,
1.1472,
1.1746,
1.1977,
1.2179,
1.2502,
1.2931,
1.2799,
1.2987,
1.3247,
1.4039,
1.6493,
1.6898,
1.7446,
1.7864,
1.8412,
1.8687,
1.9134,
2.6003,
2.7228,
2.9789,
3.0285,
3.2110,
3.3239,
7.5937,
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
    const category = "or200"
    const dataIndex = data[category].findIndex(element => element.keyName === keyName)
    if(dataIndex !== -1) {
      if(pricesLength > 0) data[category][dataIndex]["uPrice"] = prices[index]
      if(namesLength > 0) data[category][dataIndex]["name"] = names[index]
    } else {
      alert(`${keyName}: No Existe`);
    }
  })
}

fetch('./products.json')
.then(response => response.json())
.then(data => { 
  newData(data)
 jsonContainer.innerText = JSON.stringify(data);
})