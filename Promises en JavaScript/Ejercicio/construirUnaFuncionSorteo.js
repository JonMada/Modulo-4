//Necesitamos utilizar: Object.keys y bitwise operators.
const ponderacionRuleta = {
    rojo: 400,
    negro: 482,
    verde: 12,
}

const ruleta = (ponderacion) => {
    const contenedorArray = [];

    Object.keys(ponderacion).forEach(clave => {
        for (let i = 0; i < ponderacion[clave]; i++) {
            contenedorArray.push(clave)
        }
    })
    
    return contenedorArray[Math.round(Math.random() * contenedorArray.length)];
} 

console.log(ruleta(ponderacionRuleta));