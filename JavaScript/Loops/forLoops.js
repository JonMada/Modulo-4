//Estructura básica de un for loop en JavaScript
//Estamos creando un loop que nos imprimira los números del 1 al 10
for(let i = 1; i<=10; i++) {
    console.log(i);
}

//Ejemplo desarrollado
//Queremos imprimir nuestra plantilla de jugadores en la consola
let jugadores = [
    'Williams',
    'Guruzeta',
    'Nico',
    'Ohian'
]

for (let i = 0; i < jugadores.length; i++){ //El length es de 4, pero el index es 0,1,2,3. 
    console.log(jugadores[i]);
}