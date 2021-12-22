const agregar = document.querySelectorAll('.btn');
agregar.forEach(botonAgregar =>   {
    botonAgregar.addEventListener('click', agregarClick );

});

function agregarClick(event) {
    const button = event.target;
    const item = button.closest('.item');
    const itemTit = item.querySelector('item.title'.textcontent;
    const itemprecio
}