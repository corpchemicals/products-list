const jsonContainer = document.querySelector("#json") 

const codes = [
"OREF001",
"OREF002",
"OREF003",
"OREF004",
"OREF016",
"OREF005",
"OREF017",
"OREF006",
"OREF018",
"OREF007",
"OREF008",
"OREF009",
"OREF010",
"OREF019",
"OREF011",
"OREF020",
"OREF012",
"OREF013",
"OREF014",
"OREF015",
"OREFK001",
"OREFK002",
"OREFK003",
"OREFK004",
"OREFK005",
"KIT019",
"KIT020",
]

const names = [
"Oring de Refrigeración 1/4 Normal",
"Oring de Refrigeración 5/16 Normal",
"Oring de Refrigeración 3/8 Normal",
"Oring de Refrigeración 7/16 (13/32) Normal",
"Oring de Refrigeración 1/2 Normal",
"Oring de Refrigeración 9/16 Normal",
"Oring de Refrigeración 5/8 Normal",
"Oring de Refrigeración 11/16 Normal",
"Oring de Refrigeración 3/4 Normal",
"Oring de Refrigeración 1/4 Sobre Medida",
"Oring de Refrigeración 5/16 Sobre Medida",
"Oring de Refrigeración 3/8 Sobre Medida",
"Oring de Refrigeración 7/16 (13/32) Sobre Medida",
"Oring de Refrigeración 1/2 Sobre Medida",
"Oring de Refrigeración 9/16 Sobre Medida",
"Oring de Refrigeración 5/8 Sobre Medida",
"Oring de Refrigeración 11/16 Sobre Medida",
"Oring de Refrigeración FX15 - FS10",
"Oring de Refrigeración V5",
"Oring de Refrigeración Culata",
"Kit Refrigeración para Compresor Autom. V5 (Aveo - Optra - Corsa - Cavalier)",
"Kit Refrigeración para Compresor Autom. FX15 - FS10 (Ford - Ecosport - Fiesta Power)",
"Kit Refrigeración para Compresor Toyota Terius",
"Kit Refrigeración para Compresor Vitara",
"Kit Refrigeración para Compresor Sistema ESS Cargo 815",
"Kit Refrigeración para Compresor Autom. V5 (Aveo - Optra - Corsa - Cavalier)",
"Kit Refrigeración para Compresor Autom. FX15 - FS10 (Ford - Ecosport - Fiesta Power)",
]

const prices = [
  0.2331,
  0.2331,
  0.2331,
  0.2331,
  0.2331,
  0.2526,
  0.2589,
  0.2655,
  0.2784,
  0.2721,
  0.2721,
  0.2721,
  0.2721,
  0.2721,
  0.2850,
  0.3045,
  0.3237,
  1.5996,
  1.8132,
  0.4599,
  4.8800,
  2.5700,
  1.7200,
  1.5600,
  0.7500,
  2.7600,
  1.3400,
]

function newData(data) {
  codes.forEach((code, index) => {
    const keyName = code.toLowerCase()
    const category = code.replace(/[0-9]/g, '').toLowerCase();
    const dataIndex = data[category].findIndex(element => element.keyName === keyName)
    if(dataIndex !== -1) {
      data[category][dataIndex]["uPrice"] = prices[index]
      data[category][dataIndex]["name"] = names[index]
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