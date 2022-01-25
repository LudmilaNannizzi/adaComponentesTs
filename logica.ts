// DATOS

const vendedoras:string[] = ['Ada', 'Grace', 'Hedy', 'Sheryl'];

type Ventas = {
    id :number
    fecha: Date,
    nombreVendedora:string,
    sucursal:string,
    componentes: string[]
  }

const ventas : Ventas[] = [
    {
    id: 1,
    fecha: new Date(2019, 1, 4),
    nombreVendedora: 'Grace',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
  },
  {
    id: 2,
    fecha: new Date(2019, 0, 1),
    nombreVendedora: 'Ada',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
  },
  {
    id: 3,
    fecha: new Date(2019, 0, 2),
    nombreVendedora: 'Grace',
    sucursal: 'Caballito',
    componentes: ['Monitor ASC 543', 'Motherboard MZI'],
  },
  {
    id: 4,
    fecha: new Date(2019, 0, 10),
    nombreVendedora: 'Ada',
    sucursal: 'Centro',
    componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200'],
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
    ],
  },
];

type Articulos = {
    item : string, 
    precio : number
}

const articulos : Articulos[]= [
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

const sucursales : string [] = ['Centro', 'Caballito'];


 
const precioComponentes = (componentesAbuscar : string): number =>{
    return articulos.find((articulo: Articulos) => componentesAbuscar == articulo.item 
 ).precio
}

console.log(precioComponentes('Monitor GPRS 3000'));


const precioMaquina = (componentesVendidos: string[]): number =>{
    let total = 0;
    for (const componente of componentesVendidos) {
      total += precioComponentes(componente);
    }
    return total;
  }

console.log(precioMaquina(['Monitor GPRS 3000',
'Motherboard ASUS 1200',
'Monitor GPRS 3000',
'Motherboard ASUS 1500']));


const cantidadVentasComponente =(componenteAbuscar:string):number=>{
  let aux = 0
  for (const venta of ventas) {
    for (const componente of venta.componentes) {
      if (componenteAbuscar == componente) {
        aux++;
      } 
  }
}
return aux
}


console.log(cantidadVentasComponente('Monitor ASC 543'));


const buscararPorFecha = (mes:number, anio:number): Object =>{
  const ventasFiltradas = ventas.filter(venta =>(mes - 1) == venta.fecha.getMonth() && anio == venta.fecha.getFullYear())
  
  return ventasFiltradas
}
console.log(buscararPorFecha(1, 2019));


const ventasVendedoraPorFecha = (mes:number, anio:number): Object =>{
  const filtroDeFecha = buscararPorFecha(mes, anio)
  const ventasPorVendedora = {}

  for (const venta of filtroDeFecha) {
      
    if(ventasPorVendedora[venta.nombreVendedora] == undefined){
      ventasPorVendedora[venta.nombreVendedora] = precioMaquina(venta.componentes)
    }else{
      ventasPorVendedora[venta.nombreVendedora] += precioMaquina(venta.componentes)
    }
  }
  return  ventasPorVendedora
}

console.log(ventasVendedoraPorFecha(1,2019));


const vendedoraDelMes = (mes:number, anio:number): string =>{

  const filtroVendedorasFecha = ventasVendedoraPorFecha(mes, anio)

  let vendedoraNombre = ""
    let vendedoraPrecio = 0
    for (const indice in filtroVendedorasFecha) {
  
        if(vendedoraPrecio <= filtroVendedorasFecha[indice]){
          vendedoraPrecio= filtroVendedorasFecha[indice]
          vendedoraNombre= indice
        }
  
    }
    return vendedoraNombre;
}
console.log(vendedoraDelMes(1, 2019));

/*componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente*/


const componenteMasVendido = ():string =>{
  
}
console.log(componenteMasVendido());




