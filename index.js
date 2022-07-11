let productos = [];
let seccionProductos = document.getElementById("productos");
let menorAMayor = document.getElementById("menorAMayor");
let botonBorrar = document.getElementById("borrarFiltros");


class Producto{
    constructor (nombre, precio, talles, descripcion, img){
        this.nombre = nombre;
        this.precio = precio;
        this.talles = talles;
        this.descripcion = descripcion;
        this.img = img;
    }
}

productos.push(new Producto("Remera Paulo", 1100, "2 al 5", "Algodón", "productos/remera paulo.jfif"));
productos.push(new Producto("Buzo Bear", 3960, "6 al 16", "Piel corderito bifaz", "productos/buzo bear.jfif"));
productos.push(new Producto("Ajuar Mitai", 2100, "2", "Con Bandana. 100% algodón", "productos/ajuar bandana.jfif"));
productos.push(new Producto("Buzo camiseta", 1980, "4 al 10", "Lanilla", "productos/buzo camiseta.jfif"));
productos.push(new Producto("Body Ginna", 980, "0 al 3", " ", "productos/body ginna.jpg"));
productos.push(new Producto("Remera Clara", 1280, "2 al 6", "Lanilla", "productos/clara.jpg"));
productos.push(new Producto("Tapado Bruno", 2980, "2 al 10", "Frizado", "productos/Bruno.jpg"));
productos.push(new Producto("Pantalón Ciro", 2580, "1 al 10", "Gabardina", "productos/ciro.jpg"));

function crearTarjetas() {
    for (const producto of productos) {
        let card = document.createElement("div.col");
        card.innerHTML = `<div class="card h-100">
                            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</>
                                <p class="card-text">$${producto.precio}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${producto.talles}</small>
                            </div>
                        </div>`
        seccionProductos.append(card);
    };
};

crearTarjetas();

menorAMayor.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    let filtro = productos.sort((a,b) => a.precio - b.precio);
    for (const filtrado of filtro) {
        let cardFiltrada = document.createElement("div.col");
        cardFiltrada.innerHTML = `<div class="card h-100">
                            <img src="${filtrado.img}" class="card-img-top" alt="${filtrado.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${filtrado.nombre}</h5>
                                <p class="card-text">${filtrado.descripcion}</>
                                <p class="card-text">$${filtrado.precio}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${filtrado.talles}</small>
                            </div>
                        </div>`
        seccionProductos.append(cardFiltrada);
    }
});
