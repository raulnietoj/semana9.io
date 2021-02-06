
// EJERCICIO 9 - CALCULAR EDAD A PARTIR DE AÑO DE NACIMIENTO

const aactual=2021;

const edad = (nac) => {
    let calculoedad;
    calculoedad = aactual - nac;
    return `Su edad es: ${calculoedad} años`;
}
console.log(edad(1989));