/*
//compras a un super mercado
let carrito=["leche",1,"carne",2,"papa",3,"fideos",1];

console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);


//COMO SE ADICIONA UN NUEVO ITEM Y CANTIDAD

// Nuevo ítem y su cantidad
let nuevoItem = "pancito";
let nuevaCantidad = 2;

// Agregar el nuevo ítem y su cantidad al arreglo carrito
carrito.push(nuevoItem, nuevaCantidad);

console.log(carrito);

*/


let carrito=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'Carne',cantidad:2,precio:25},
             {nombre: 'fideo',cantidad:1,precio:10},
             {nombre: 'papa',cantidad:3,precio:6}];

             console.log("Carrito con precios y totales:");
             carrito.forEach((item) => {
               // Calcular precio total
               const precioTotal = item.cantidad * item.precio;
             
               console.log("Nombre: " + item.nombre);
               console.log("Cantidad: " + item.cantidad);
               console.log("Precio: Bs" + item.precio);
               console.log("Precio Total: Bs" + precioTotal);
               
             });

item={nombre: 'cocacola',cantidad:5,precio:15};
carrito.push(item);
const precioTotal = item.cantidad * item.precio;
             
console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Precio Total: Bs" + precioTotal);

console.log(carrito);


/*
//Imprimir con Etiquetas
// Iterar sobre cada elemento del carrito
carrito.forEach(item => {
    console.log("Item: " + item.nombre + ", Cantidad: " + item.cantidad);
});

//Adicionar un nuevo registro
// Nuevo registro a agregar
let nuevoRegistro = { nombre: 'arroz', cantidad: 2 };

// Agregar el nuevo registro al arreglo carrito
carrito.push(nuevoRegistro);

// Imprimir el carrito actualizado
console.log(carrito);
*/

/*

// Calcular el total
let total = item.cantidad * item.precio;

// Imprimir cantidad, precio y total
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Total: Bs" + total.toFixed(2)); // Redondeamos el total a dos decimales
// // // adicionar unnuevo registro
let item = {nombre:'Leche',cantidad:2,precio:7.5};
/////// imprimir item, cantidad, precio,total.
console.log("item:"+item, nombre);
console.log("cantidad:"+item, cantidad);
console.log("precio:"+item, precio+"Bs");
console.log("total:"+item, cantidad*item.precio+"Bs");

//Buscar funciones o procesos para ordenar un Array
//ordenar el array de carrito
// Ordenar un array lineal

let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=>a-b);
console.log(numeros);
*/

let carrito1=[{nombre:'Leche',cantidad:1,precio:7.5},
              {nombre:'carne',cantidad:2,precio:30.5},
              {nombre:'fideo',cantidad:1,precio:5.5},
              {nombre:'papa',cantidad:3,precio:20.5},];
item={nombre:'arroz',cantidad:2,precio:30.5};
carrito1.push(item);
/*
let carrito2=[{nombre:'Leche',cantidad:1,precio:7.5},
              {nombre:'carne',cantidad:2,precio:30.5},
              {nombre:'fideo',cantidad:1,precio:5.5},
              {nombre:'papa',cantidad:3,precio:20.5},];
item={nombre:'arroz',cantidad:2,precio:30.5};
*/

console.log("IMPRESION ORDENADO POR PRECIO");
carrito.slice().sort((x,y)=>x.precio - y.precio);
carrito.sort((x,y)=>x.precio - y.precio);
console.log(carrito2);
console.log("IMPRESION ORDENADO POR NOMBRE");
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);

console.log("IMPRESION ORDENADA POR PRECIO");
let carritoOrdenadoPorPrecio = carrito.slice().sort((a, b) =>a.precio -b.precio);
console.log(carritoOrdenadoPorPrecio);

console.log("IMPRESION ORDENADA POR NOMBRE");
let carritoOrdenadoPorNombre = carrito.slice().sort((a, b) =>a.nombre.localeCompare(b.nombre));
console.log(carritoOrdenadoPorPrecio);


//git init
// git add . 
// git commit -m "primer comentario"
// git push

//git status 