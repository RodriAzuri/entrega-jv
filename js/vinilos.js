let vinilos = document.getElementById("vin");
let titVin = document.createElement("h3");

titVin.innerHTML = "Discos Vinilos";

vinilos.appendChild(titVin);


const discos = [
{  id: 1,  nombre: "Guns N' Roses", precio: 700, img: "../contenido/img/vinilo.jpg"},
{  id: 2,  nombre: "Pink Floyd", precio: 700, img: "../contenido/img/vinilo.jpg"},
{  id: 3,  nombre: "Rolling Stones"  , precio: 700, img: "../contenido/img/vinilo.jpg"},
{  id: 4,  nombre: "The Beatles" , precio: 1000, img: "../contenido/img/vinilo.jpg"}];
for (const disco of discos) {
    $("#elemVin").append(`<div>
                        <img src = "${disco.img}">  
                        <h4>  Disco: ${disco.nombre}</h4>
                        <b> $ ${disco.precio}</b>
                        <button id="btn" ${disco.id}">Comprar</button>
                        </div>`);
    $(`#btn${disco.id}`).on('click', function () {
        console.log(`Compraste ${disco.nombre}`);
    });
    
}
