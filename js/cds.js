let vinilos = document.getElementById("cd");
let titVin = document.createElement("h3");

titVin.innerHTML = "CD's";

vinilos.appendChild(titVin);


const discos = [
{  id: 1,  nombre: "Guns N' Roses", precio: 300, album: "Use Your Illusion I", img: "../contenido/img/cds.jpg"},
{  id: 2,  nombre: "Pink Floyd", precio: 250, album: "Animals", img: "../contenido/img/cds.jpg"},
{  id: 3,  nombre: "Rolling Stones"  , precio: 250, album: "Let It Bleed", img: "../contenido/img/cds.jpg"},
{  id: 4,  nombre: "The Beatles" , precio: 400, album: "Let It Be", img: "../contenido/img/cds.jpg"}];
for (const disco of discos) {
    $("#elemVin").append(`<div>
                        <img src = "${disco.img}">  
                        <h4> Disco: ${disco.nombre}</h4>
                        <h4> Album: ${disco.album}</h4> 
                        <b> $ ${disco.precio}</b>
                        <button id="btn" ${disco.id}">Comprar</button>
                        </div>`);
    $(`#btn`).on('click', function () {
        console.log(`Compraste ${disco.nombre}`);
    });
    
}
