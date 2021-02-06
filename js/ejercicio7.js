
// EJERCICIO 7 - CONVERTIR METROS EN PULGADAS

// 1 pulgada = 0.0254 metros
// 1 metro = 39.3701 pulgadas

let pulgada;
const pulgadas = (metros) => 
{ 
    pulgada=metros/0.0254;
    return `Para tener ${metros} metros tengo que pedir ${pulgada.toFixed(2)} pulgadas`; 
}
console.log(pulgadas(100));


    
