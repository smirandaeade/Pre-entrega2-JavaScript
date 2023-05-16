const productos = [
    {
        categoria: 'Tecnologia',
        items: [
            { id: 1, nombre: 'Teléfono móvil', precio: 15000 },
            { id: 2, nombre: 'Ordenador portátil', precio: 50000 },
            { id: 3, nombre: 'Tableta', precio: 12000 },
            { id: 4, nombre: 'Smartwatch', precio: 8000 },
        ],
    },
    {
        categoria: 'Electrodomesticos',
        items: [
            { id: 6, nombre: 'Lavadora', precio: 25000 },
            { id: 7, nombre: 'Refrigerador', precio: 35000 },
            { id: 8, nombre: 'Aspiradora', precio: 5000 },
            { id: 9, nombre: 'Microondas', precio: 7000 },
        ],
    },
    {
        categoria: 'Hogar',
        items: [
            { id: 6, nombre: 'Escritorio', precio: 15000 },
            { id: 7, nombre: 'Cama', precio: 35000 },
            { id: 8, nombre: 'Alfombra', precio: 5000 },
            { id: 9, nombre: 'Lampara', precio: 7000 },
        ],
    }
];

const mostrarListaProductos = () => {
    console.log('Lista de productos:');
    productos.forEach((categoria) => {
        console.log(`Categoría: ${categoria.categoria}`);
        categoria.items.forEach((producto) => {
            console.log(
                `  - ${producto.id}: ${producto.nombre} - Precio: $${producto.precio}`
            );
        });
    });
};

const comprarProductos = () => {

    let carrito = [];
    let total = 0;
    let continuar = true;

    while (continuar) {
        const categoria = prompt('Ingrese la categoría del producto que desea comprar:');
        const idProducto = parseInt(prompt('Ingrese el ID del producto que desea comprar:'));
        const cantidad = parseInt(prompt('Ingrese la cantidad del producto que desea comprar:'));

        let productoEncontrado = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].categoria.toLowerCase() === categoria.toLowerCase()) {
                productoEncontrado = productos[i].items.find(item => item.id === idProducto);
                if (productoEncontrado) {
                    break;
                }
            }
        }

        if (productoEncontrado) {
            const productoAgregado = { ...productoEncontrado, cantidad };
            carrito.push(productoAgregado);
            total += productoEncontrado.precio * cantidad;
            console.log(`Ha agregado al carrito: ${productoEncontrado.nombre} x ${cantidad} - Precio: $${productoEncontrado.precio * cantidad}`);
        } else {
            console.log('El producto seleccionado no se encuentra disponible.');
        }

        const respuesta = prompt('¿Desea seguir agregando productos? (Sí/No)');
        if (respuesta.toLowerCase() !== 'si') {
            continuar = false;
        }
    }

    const impuesto = 0.15; // Impuesto del 15% (0.15)
    const totalConImpuesto = total + (total * impuesto);

    console.log('Carrito de compras:');
    carrito.forEach((producto) => {
        console.log(`  - ${producto.id}: ${producto.nombre} x ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}`);
    });

    console.log(`Total: $${total.toFixed(2)}`);
    console.log(`Total con impuesto: $${totalConImpuesto.toFixed(2)}`);
    console.log('¡Gracias por su compra!')
};

mostrarListaProductos();
comprarProductos();
