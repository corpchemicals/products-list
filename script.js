const jsonContainer = document.querySelector("#json") 

const codes = [
  "OR911",
  "OR912",
  "OR913",
  "OR914",
  "OR916",
  "OR918",
  "OR920",
  "OR924",
  "OR928",
  "OR932",
  
]

const names = [
]

const prices = [
  0.1876,
  0.1908,
  0.1999,
  0.2287,
  0.2521,
  0.2932,
  0.3225,
  0.3694,
  0.4528,
  0.5277,
  
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
    const category = "or900"
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