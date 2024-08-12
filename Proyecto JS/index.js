const productos = {
    Buscapina: 200,
    Bayaspirina: 300,
    Actron: 600,
    Algodon: 300,
    curitas: 100
};

let total = 0;
let carrito = [];
let nombreCliente;
let fechaCompra;
let metodoPago;

function agregarProducto(producto, cantidad) {
    if (productos[producto]) {
        total += productos[producto] * cantidad;
        carrito.push({ producto, cantidad });
    } else {
        alert("Producto no encontrado");
    }
}

function mostrarResumen() {
    alert("Resumen de la compra: " + carrito.map(item => `${item.producto} x ${item.cantidad}`).join(" + "));
}

function calcularRecargo(total) {
    return total * 0.10;
}

function calcularImpuesto(total) {
    return total * 0.16;
}

function calcularDescuento(total) {
    return total * 0.05;
}

function calcularTotalFinal(total, recargo, impuesto, descuento) {
    return total + recargo - descuento + impuesto;
}

nombreCliente = prompt("Ingrese su nombre");
fechaCompra = prompt("Ingrese la fecha de la compra");

while (true) {
    const producto = prompt("Seleccione un producto: " + Object.keys(productos).join(", ") + " o 0 para finalizar");
    if (producto === "0") 
        break;
    const cantidad = parseInt(prompt("Ingrese la cantidad"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        continue;
    }
    agregarProducto(producto, cantidad);
}

mostrarResumen();

metodoPago = prompt("Seleccione medio de pago: 1 Efectivo, 2 Tarjeta");
if (metodoPago === "1") {
    const recargo = 0;
    const impuesto = calcularImpuesto(total);
    const descuento = calcularDescuento(total);
    const totalFinal = calcularTotalFinal(total, recargo, impuesto, descuento);
    alert("Compra finalizada: Nombre del cliente: " + nombreCliente + " Fecha de la compra: " + fechaCompra + " Total: $" + totalFinal);
} else if (metodoPago === "2") {
    const recargo = calcularRecargo(total);
    const impuesto = calcularImpuesto(total);
    const descuento = calcularDescuento(total);
    const totalFinal = calcularTotalFinal(total, recargo, impuesto, descuento);
    alert("Compra finalizada: Nombre del cliente: " + nombreCliente + " Fecha de la compra: " + fechaCompra + " Total: $" + totalFinal);
} else {
    alert("Medio de pago no válido");
}