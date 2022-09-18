const inputNombre = document.getElementById('inputName');
const inputPrecio = document.getElementById('inputPrice');
const formProducto = document.getElementById('formProducto');
const contenidoTabla = document.getElementById('contenidoTabla')

const productos = [
    {
        nombre: 'Manzana',
        precio: 100, 
    },
    
    {
        nombre: 'Naranja',
        precio: 50,
    },
    
    {
        nombre: 'Pera',
        precio: 50,
    }
]

function agregarProducto(event){
    event.preventDefault();
    const nombre = inputNombre.value;
    const precio = inputPrecio.value;
    const producto = { nombre: nombre, precio: precio };
    productos.push(producto); 
    mostrarProductos();
    console.log(productos);
}

formProducto.onsubmit = agregarProducto;



function mostrarProductos(){
    let contenido = [];
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const tr = `
        <tr>
            <th scope="row">${i}</th>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ver</button>
            </td>
        </tr>
        `;
        contenido.push(tr);
        
}
        contenidoTabla.innerHTML = contenido.join('');
}

mostrarProductos();