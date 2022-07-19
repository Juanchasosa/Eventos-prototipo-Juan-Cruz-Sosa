const productos = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const volver = document.getElementById("volver");
const comprar = document.getElementById("comprar");
const seccionProductos = document.getElementById("productos");
const menorAMayor = document.getElementById("menorAMayor");
const botonBorrar = document.getElementById("borrarFiltros");
const barraBusqueda = document.getElementById("barraBusqueda");
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};
const verCarrito = document.getElementById("verCarrito");




class Producto{
    constructor (nombre, precio, talles, descripcion, img, id){
        this.nombre = nombre;
        this.precio = precio;
        this.talles = talles;
        this.descripcion = descripcion;
        this.img = img;
        this.id = id;
    }
}

productos.push(new Producto("Remera Paulo", 1100, "2 al 5", "Algodón", "productos/remera paulo.jfif", 1));
productos.push(new Producto("Buzo Bear", 3960, "6 al 16", "Piel corderito bifaz", "productos/buzo bear.jfif", 2));
productos.push(new Producto("Ajuar Mitai", 2100, "2", "Con Bandana. 100% algodón", "productos/ajuar bandana.jfif", 3));
productos.push(new Producto("Buzo camiseta", 1980, "4 al 10", "Lanilla", "productos/buzo camiseta.jfif", 4));
productos.push(new Producto("Body Ginna", 980, "0 al 3", " ", "productos/body ginna.jpg", 5));
productos.push(new Producto("Remera Clara", 1280, "2 al 6", "Lanilla", "productos/clara.jpg", 6));
productos.push(new Producto("Tapado Bruno", 2980, "2 al 10", "Frizado", "productos/Bruno.jpg", 7));
productos.push(new Producto("Pantalón Ciro", 2580, "1 al 10", "Gabardina", "productos/ciro.jpg", 8));

function crearTarjetas() {
    for (const producto of productos) {
        let card = document.createElement("div.col");
        card.innerHTML = `<div class="card h-100">
                            <img src="${producto.img}" class="card-img-top img-fluid" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</>
                                <p class="card-text">$${producto.precio}</p>
                                <button id="${producto.id}">Agregar al carrito</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${producto.talles}</small>
                            </div>
                        </div>`
                        seccionProductos.append(card);

                        let addCarrito = document.getElementById(producto.id);
                        addCarrito.addEventListener("click", () => {
                            carrito.push(producto);
                            localStorage.setItem("carrito", JSON.stringify(carrito));
                            alert("producto agregado al carrito");
                        });
                    };
};

crearTarjetas();

barraBusqueda.addEventListener("input", () =>{
    const capitalize = barraBusqueda.value.charAt(0).toUpperCase() + barraBusqueda.value.slice(1).toLowerCase();
    let busqueda = [...productos].filter(elemento => elemento.nombre.includes(capitalize));
    seccionProductos.innerHTML = "";
    for (const filtrado of busqueda) {
        let cardFiltrada = document.createElement("div.col");
        cardFiltrada.innerHTML = `<div class="card h-100">
                            <img src="${filtrado.img}" class="card-img-top" alt="${filtrado.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${filtrado.nombre}</h5>
                                <p class="card-text">${filtrado.descripcion}</>
                                <p class="card-text">$${filtrado.precio}</p>
                                <button id="${filtrado.id}">Agregar al carrito</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${filtrado.talles}</small>
                            </div>
                        </div>`
                        seccionProductos.append(cardFiltrada);  
                        
                        let addCarrito = document.getElementById(filtrado.id);
                        addCarrito.addEventListener("click", () => {
                            carrito.push(filtrado);
                            alert("producto agregado al carrito");
                        });
                    };
                });
                
                
                menorAMayor.addEventListener("click", () => {
                    seccionProductos.innerHTML = "";
                    let filtro = [...productos].sort((a,b) => a.precio - b.precio);
                    for (const filtrado of filtro) {
                        let cardFiltrada = document.createElement("div.col");
                        cardFiltrada.innerHTML = `<div class="card h-100">
                        <img src="${filtrado.img}" class="card-img-top" alt="${filtrado.nombre}">
                        <div class="card-body">
                                <h5 class="card-title">${filtrado.nombre}</h5>
                                <p class="card-text">${filtrado.descripcion}</>
                                <p class="card-text">$${filtrado.precio}</p>
                                <button id="${filtrado.id}">Agregar al carrito</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${filtrado.talles}</small>
                            </div>
                        </div>`
                        seccionProductos.append(cardFiltrada);

                        let addCarrito = document.getElementById(filtrado.id);
                        addCarrito.addEventListener("click", () => {
                            carrito.push(filtrado);
                            alert("producto agregado al carrito");
                        });
    }
});

botonBorrar.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    crearTarjetas();
});


verCarrito.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    for (const item of carrito) {
        let cardCarrito = document.createElement("div.col");
        cardCarrito.innerHTML = `<div class="card h-100">
                            <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">${item.descripcion}</>
                                <p class="card-text">$${item.precio}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${item.talles}</small>
                            </div>
                        </div>`
                        seccionProductos.append(cardCarrito);
        }
        menorAMayor.classList = "d-none";
        botonBorrar.classList = "d-none";
        verCarrito.classList = "d-none";
        
        volver.classList = "btn btn-primary btn-lg";
        volver.addEventListener("click", () =>{
            menorAMayor.classList = "btn btn-primary btn-lg";
            botonBorrar.classList = "btn btn-primary btn-lg";
            verCarrito.classList = "btn btn-primary btn-lg";
        volver.classList = "d-none";
        comprar.classList = "d-none";

        seccionProductos.innerHTML = "";
        crearTarjetas();

    });
    
    comprar.classList = "btn btn-primary btn-lg";
    comprar.addEventListener("click", () => {
        let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);  
        alert(`El precio total es: $${total}`);
        localStorage.removeItem("carrito");
        seccionProductos.innerHTML = "";
        carrito.splice(0, Infinity);
    });


   
});

