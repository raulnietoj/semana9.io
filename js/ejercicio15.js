
// EJERCICIO 15 - CALCULAR SI TIENES EDAD PARA VOTAR

let votar;
const votacion = (votar) => { 
    if (votar > 17) return `Tiene ${votar} años, es apto para votar`; 
    else return `Tiene ${votar}, todavia eres pulpin`;
}
console.log(votacion(10));


