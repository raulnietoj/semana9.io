
// EJERCICIO 8 - CONVERTIR SOLES A DOLARES

// 1 pulgada = 0.0254 metros
// 1 metro = 39.3701 pulgadas

let dolar = 3.64;
let dolares;
const cambiar = (soles) => 
{ 
    dolares=soles/dolar;
    return `Con S/. ${soles} soles obtengo $ ${dolares.toFixed(2)} dolares`; 
}
console.log(cambiar(1000));