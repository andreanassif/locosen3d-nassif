/* const productos = ['Velador Espiraldo Modelo 7', 'Velador Espiraldo Modelo 3', 'Velador Espiraldo Modelo 33', 'Velador Espiraldo Modelo 5', 'Juego didáctico', 'Soportes Notebook', 'Llavero soporte celular']
const carrito = []

const listadoProductos = document.getElementById("listadoProductos")
const listadoCarrito = document.querySelector("#listadoCarrito")

function cargarProductos() {
    for (elemento of productos) {
        const listProd = document.createElement("li")
            listProd.id = "2022" + elemento
            listProd.className = "btn btn-primary addCarrito"
            listProd.innerText = elemento
            listProd.addEventListener("click", () => {agregarAlCarrito(`${listProd.id}`)})
            listadoProductos.append(listProd)
    }
}

cargarProductos()

function agregarAlCarrito(prod) {
    const elemento = document.getElementById(prod)
    if (prod !="") {
        const liCarrito = document.createElement("li")
            liCarrito.className = "card-title"
            liCarrito.innerText = elemento.innerText
            liCarrito.id = `${prod}EnCarrito`
            liCarrito.addEventListener("dblclick", ()=> {
                eliminarDelCarrito(liCarrito.id)
            })
            listadoCarrito.append(liCarrito)
    } 
}

function eliminarDelCarrito(prodID) {
    const confirmar = confirm("desea eliminar del carrito?")
    if (confirmar) {
        //debugger
        const itemAEliminar = document.getElementById(prodID)
        itemAEliminar.remove()
    }
}

 */


let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

mostrarProductos(stockProductos)

function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    array.forEach(el => {
    let div = document.createElement('div')
    div.classList.add('productos')
    div.innerHTML= `<div class="card col-sm-6-md-4 col-lg-3 bg-dark" id="productos">
                        <img src="${el.img}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombre}</h5>
                            <p class="card-text">${el.desc}</p>
                            <a href="#" class="btn btn-primary" id="precio">${el.precio}</a>
                            <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                    </div> `
    contenedorProductos.appendChild(div)
    
    let btnAgregar = document.getElementById(`boton${el.id}`)
    //console.log(btnAgregar);
    btnAgregar.addEventListener('click',()=>{
        agregarAlCarrito(el.id);
    })

  })
}

function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.find(obj=> obj.id === id)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
}

function mostrarCarrito(productoAgregar) {

   let div = document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML=`<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== productoAgregar.id)
        console.log(carritoDeCompras);
        actualizarCarrito()
    })
}


function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0 )   //acumulador     
}                                                          



