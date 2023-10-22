const menu = {
    platos: ["lomo saltado", "causa rellena", "ceviche"],
    bebidas: ["agua", "gaseosa", "jugo"],
};

function pedirPlato() {
    let plato = prompt(`Por favor, elige tu plato (${menu.platos.join(", ")}):`).toLowerCase();

    if (menu.platos.includes(plato)) {
        return plato.charAt(0).toUpperCase() + plato.slice(1); 
    } else {
        alert("Plato no válido. Por favor, elige entre " + menu.platos.join(", "));
        return pedirPlato();
    }
}

function pedirBebida() {
    let bebida = prompt(`Por favor, elige tu bebida (${menu.bebidas.join(", ")}):`).toLowerCase();

    if (menu.bebidas.includes(bebida)) {
        return bebida.charAt(0).toUpperCase() + bebida.slice(1); 
    } else {
        alert("Bebida no válida. Por favor, elige entre " + menu.bebidas.join(", "));
        return pedirBebida();
    }
}

function tomarPedido(infoCliente) {
    alert(`Cliente ${infoCliente}, es tu turno.`);

    let platoElegido = pedirPlato();
    let bebidaElegida = pedirBebida();

    alert(`Has elegido ${platoElegido} con ${bebidaElegida}. ¡Gracias por tu pedido!`);
}

function atenderClientes() {
    for (let infoCliente = 1; infoCliente <= 4; infoCliente++) {
        tomarPedido(infoCliente);
    }

    alert("Hoy ya se han atendido 4 turnos. Por favor, vuelva mañana.");
}

atenderClientes();