
let listaBandas = [];

listaBandas.push({
    nombre: "Guns N' Roses",
    año: 1985,
    pais: "Estados Unidos",
    ultimoDisco: "Live Radio Broadcast",
    id: 1,
});

listaBandas.push({
    nombre: "Pink Floyd",
    año: 1965,
    pais: "Inglaterra",
    ultimoDisco: "Live Radio berlin",
    id: 2,
});

listaBandas.push({
    nombre: "Rolling Stones",
    año: 1978,
    pais: "Inglaterra",
    ultimoDisco: "Live Radio London",
    id: 3,
});

listaBandas.push({
    nombre: "The Beatles",
    año: 1960,
    pais: "Inglaterra",
    ultimoDisco: "Let It Be",
    id: 4,
});


let texto = "Selecciona la banda a conocer:";

for (let index = 0; index < listaBandas.length; index++) {
    texto = texto + "\n" + listaBandas[index].id + " - " + listaBandas[index].nombre;
}

const idBanda = Number(prompt(texto));
let banda = listaBandas.find(elemento => elemento.id === idBanda);
alert(bandaToString(banda));

function bandaToString(b) {
    return `El nombre de la banda seleccionada es: ${b.nombre}\nSe inicio en el año: ${b.año}.\nEsta banda es oriunda del país: ${b.pais}\nSu ultimo disco es: ${b.ultimoDisco}`;
}








