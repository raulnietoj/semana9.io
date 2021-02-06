

const inicial=1600;
let numero=1;
while (numero < 7 ) {
    aumento = (inicial*0.10);
    numero++; 
    inicial=inicial+aumento;
    console.log(inicial);
}
