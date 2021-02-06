
// EJERCICIO 11 - CALCULAR BONO POR TIEMPO DE SERVICIO

let periodo;

const bono = (periodo) => {

let calculobono;

if (periodo==1) { calculobono=1*100; return `Tu bono por ${periodo} año de servicio es de ${calculobono} dolarachos` }
    else if (periodo==2) { calculobono=1*200; return `Tu bono por ${periodo} años de servicio es de ${calculobono} dolarachos` }
    else if (periodo==3) { calculobono=1*300; return `Tu bono por ${periodo} años de servicio es de ${calculobono} dolarachos` }
    else if (periodo==4) { calculobono=1*400; return `Tu bono por ${periodo} años de servicio es de ${calculobono} dolarachos` }
    else if (periodo==5) { calculobono=1*500; return `Tu bono por ${periodo} años de servicio es de ${calculobono} dolarachos` }
    else if (periodo>5)  { calculobono=1000; return `Tu bono por ${periodo} años de servicio es de ${calculobono} dolarachos` }
else { return `Todavia no mereces bono pulpin` } 

}

console.log(bono(7));