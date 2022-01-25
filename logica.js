// DATOS
var vendedoras = ['Ada', 'Grace', 'Hedy', 'Sheryl'];
var ventas = [
    {
        id: 1,
        fecha: new Date(2019, 1, 4),
        nombreVendedora: 'Grace',
        sucursal: 'Centro',
        componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500']
    },
    {
        id: 2,
        fecha: new Date(2019, 0, 1),
        nombreVendedora: 'Ada',
        sucursal: 'Centro',
        componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500']
    },
    {
        id: 3,
        fecha: new Date(2019, 0, 2),
        nombreVendedora: 'Grace',
        sucursal: 'Caballito',
        componentes: ['Monitor ASC 543', 'Motherboard MZI']
    },
    {
        id: 4,
        fecha: new Date(2019, 0, 10),
        nombreVendedora: 'Ada',
        sucursal: 'Centro',
        componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200']
    },
    {
        id: 5,
        fecha: new Date(2019, 0, 12),
        nombreVendedora: 'Grace',
        sucursal: 'Caballito',
        componentes: [
            'Monitor GPRS 3000',
            'Motherboard ASUS 1200',
            'Monitor GPRS 3000',
            'Motherboard ASUS 1500',
        ]
    },
];
var articulos = [
    { item: 'Monitor GPRS 3000', precio: 200 },
    { item: 'Motherboard ASUS 1500', precio: 120 },
    { item: 'Monitor ASC 543', precio: 250 },
    { item: 'Motherboard ASUS 1200', precio: 100 },
    { item: 'Motherboard MZI', precio: 30 },
    { item: 'HDD Toyiva', precio: 90 },
    { item: 'HDD Wezter Dishital', precio: 75 },
    { item: 'RAM Quinston', precio: 110 },
    { item: 'RAM Quinston Fury', precio: 230 },
];
var sucursales = ['Centro', 'Caballito'];
var precioComponentes = function (componentesAbuscar) {
    return articulos.find(function (articulo) { return componentesAbuscar == articulo.item; }).precio;
};
console.log(precioComponentes('Monitor GPRS 3000'));
var precioMaquina = function (componentesVendidos) {
    var total = 0;
    for (var _i = 0, componentesVendidos_1 = componentesVendidos; _i < componentesVendidos_1.length; _i++) {
        var componente = componentesVendidos_1[_i];
        total += precioComponentes(componente);
    }
    return total;
};
console.log(precioMaquina(['Monitor GPRS 3000',
    'Motherboard ASUS 1200',
    'Monitor GPRS 3000',
    'Motherboard ASUS 1500']));
var cantidadVentasComponente = function (componenteAbuscar) {
    var aux = 0;
    for (var _i = 0, ventas_1 = ventas; _i < ventas_1.length; _i++) {
        var venta = ventas_1[_i];
        for (var _a = 0, _b = venta.componentes; _a < _b.length; _a++) {
            var componente = _b[_a];
            if (componenteAbuscar == componente) {
                aux++;
            }
        }
    }
    return aux;
};
console.log(cantidadVentasComponente('Monitor ASC 543'));
var buscararPorFecha = function (mes, anio) {
    var ventasFiltradas = ventas.filter(function (venta) { return (mes - 1) == venta.fecha.getMonth() && anio == venta.fecha.getFullYear(); });
    return ventasFiltradas;
};
console.log(buscararPorFecha(1, 2019));
var ventasVendedoraPorFecha = function (mes, anio) {
    var filtroDeFecha = buscararPorFecha(mes, anio);
    var ventasPorVendedora = {};
    for (var _i = 0, filtroDeFecha_1 = filtroDeFecha; _i < filtroDeFecha_1.length; _i++) {
        var venta = filtroDeFecha_1[_i];
        if (ventasPorVendedora[venta.nombreVendedora] == undefined) {
            ventasPorVendedora[venta.nombreVendedora] = precioMaquina(venta.componentes);
        }
        else {
            ventasPorVendedora[venta.nombreVendedora] += precioMaquina(venta.componentes);
        }
    }
    return ventasPorVendedora;
};
console.log(ventasVendedoraPorFecha(1, 2019));
var vendedoraDelMes = function (mes, anio) {
    var filtroVendedorasFecha = ventasVendedoraPorFecha(mes, anio);
    var vendedoraNombre = "";
    var vendedoraPrecio = 0;
    for (var indice in filtroVendedorasFecha) {
        if (vendedoraPrecio <= filtroVendedorasFecha[indice]) {
            vendedoraPrecio = filtroVendedorasFecha[indice];
            vendedoraNombre = indice;
        }
    }
    return vendedoraNombre;
};
console.log(vendedoraDelMes(1, 2019));
/*componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente*/
var componenteMasVendido = function () {
};
console.log(componenteMasVendido());
