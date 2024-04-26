/* El orden de prioridad operacional es PEDMAS:
1) Paréntesis
2) Exponentes
3) División y multiplicación (de izq a derecha)
4) Suma y reseta (de izq a derecha) */

var num = 4*4 / 2; 
console.log(num); //Salida: 8

var numTwo = 4*4 + (16/3)**8 - 12;
console.log(numTwo); //Salida: 654624.83

