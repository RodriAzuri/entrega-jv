
let principal = document.getElementById("principal")

let titulo = document.createElement("h3");

titulo.innerHTML = "Cronología del Rock and Roll por sus décadas";

principal.appendChild(titulo);

let btn = document.createElement("button");
btn.innerHTML = "Decada del 60's"
principal.appendChild(btn);


btn.addEventListener('click', mensajeClick);
function mensajeClick() {
    btn.innerHTML = `En la decada del 60 encontramos las siguientes bandas de Rock and Roll:
    1- Pink Floyd
    2- Guns n' Roses
    3- The Beatles
    4- Rolling Stones`;
}

let btn1 = document.createElement("button");
btn1.innerHTML = "Decada del 70's"
principal.appendChild(btn1);

let btn2 = document.createElement("button");
btn2.innerHTML = "Decada del 80's"
principal.appendChild(btn2);

let btn3 = document.createElement("button");
btn3.innerHTML = "Decada del 90's"
principal.appendChild(btn3);

let sesenta = document.createElement("h4");
sesenta.innerHTML = "Decada de los 60's";
principal.appendChild(sesenta);


let listaBandas = [];

listaBandas.push({
    nombre: "Nombre",
    año: "Año",
    pais: "Pais",
    ultimoDisco: "Ultimo Disco",
    id: 1,
});

listaBandas.push({
    nombre: "Guns N' Roses",
    año: 1968,
    pais: "Estados Unidos",
    ultimoDisco: "Live Radio Broadcast",
    id: 2,
});

listaBandas.push({
    nombre: "Pink Floyd",
    año: 1965,
    pais: "Inglaterra",
    ultimoDisco: "Live Radio berlin",
    id: 3,
});

listaBandas.push({
    nombre: "Rolling Stones",
    año: 1968,
    pais: "Inglaterra",
    ultimoDisco: "Live Radio London",
    id: 4,
});

listaBandas.push({
    nombre: "The Beatles",
    año: 1960,
    pais: "Inglaterra",
    ultimoDisco: "Let It Be",
    id: 5,
});



let ORDENADA = {
    banda: []
}

function addTable(banda) {
    let table = document.createElement("TABLE");
    document.body.appendChild(table);
      
    for (let index = 0; index < listaBandas.length; index++) {
      let banda = listaBandas[index];
      let row = document.createElement("TR");
      let celdaNombre = document.createElement("TD");
      let celdaAño = document.createElement("TD");
      let celdaPais = document.createElement("TD");
      let celdaDisco = document.createElement("TD");
  
      row.appendChild(celdaNombre);
      row.appendChild(celdaAño);
      row.appendChild(celdaPais);
      row.appendChild(celdaDisco);
  
      let textoNombre = document.createTextNode(banda.nombre);
      let textoAño = document.createTextNode(banda.año);
      let textoPais = document.createTextNode(banda.pais);
      let textoDisco = document.createTextNode(banda.ultimoDisco);
  
      celdaNombre.appendChild(textoNombre);
      celdaAño.appendChild(textoAño);
      celdaPais.appendChild(textoPais);
      celdaDisco.appendChild(textoDisco);
  
      table.appendChild(row);
      
    }
}

window.addEventListener('load', function() {
    addTable(ORDENADA.banda)
  });