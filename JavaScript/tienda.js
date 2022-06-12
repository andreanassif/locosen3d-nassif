const productos = ['Velador Espiraldo Modelo 7', 'Velador Espiraldo Modelo 3', 'Velador Espiraldo Modelo 33', 'Velador Espiraldo Modelo 5', 'Juego didáctico', 'Soportes Notebook', 'Llavero soporte celular']
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

