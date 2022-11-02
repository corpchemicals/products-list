const jsonContainer = document.querySelector("#json") 

const codes = [
  "OR001",
  "OR002",
  "OR003",
  "OR004",
  "OR005",
  "OR006",
  "OR007",
  "OR008",
  "OR009",
  "OR010",
  "OR011",
  "OR012",
  "OR013",
  "OR014",
  "OR015",
  "OR016",
  "OR017",
  "OR018",
  "OR019",
  "OR020",
  "OR021",
  "OR022",
  "OR023",
  "OR024",
  "OR025",
  "OR026",
  "OR027",
  "OR028",
  "OR029",
  "OR030",
  "OR031",
  "OR032",
  "OR033",
  "OR034",
  "OR035",
  "OR036",
  "OR037",
  "OR038",
  "OR039",
  "OR040",
  "OR041",
  "OR042",
  "OR043",
  "OR044",
  "OR045",
  "OR046",
  "OR047",
  "OR048",
  "OR049",
  "OR050",
]

const names = [
]

const prices = [
  0.0404,
0.0404,
0.0404,
0.0404,
0.0409,
0.0333,
0.0333,
0.0333,
0.0333,
0.0333,
0.0465,
0.0470,
0.0505,
0.0516,
0.0545,
0.0616,
0.0668,
0.0721,
0.0792,
0.0856,
0.0967,
0.1020,
0.1091,
0.1178,
0.1284,
0.1302,
0.1390,
0.1505,
0.1624,
0.1724,
0.2251,
0.2410,
0.2498,
0.2674,
0.3086,
0.3685,
0.3694,
0.3759,
0.3993,
0.4312,
0.5088,
0.6039,
0.6144,
0.6456,
0.6918,
0.7094,
0.7270,
0.8853,
0.9146,
0.9381,
]

function newData(data) {
  codes.forEach((code, index) => {
    const keyName = code.toLowerCase()
    // const category = code.replace(/[0-9]/g, '').toLowerCase();
    const category = "or000"
    const dataIndex = data[category].findIndex(element => element.keyName === keyName)
    if(dataIndex !== -1) {
      if(prices.length > 0) data[category][dataIndex]["uPrice"] = prices[index]
      if(names.length > 0) data[category][dataIndex]["name"] = names[index]
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