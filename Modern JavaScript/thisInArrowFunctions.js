/* En las funciones de flecha, el valor de 'this' se hereda del contexto circundante donde se definió la función,
mientra que en las funciones tradiciones, 'this' puede cambiar dependiendo de cómo se llama a la función.*/

//Supongamos que tenemos un objeto contador que tiene un métood incrementar y otro metodo monstrarContador.
const contador = {
    valor : 0,
    incrementador () {
        this.valor ++;
    },
    mostrarContador () {
        const retorno = function () { //Función tradicional
            console.log('El contador es: ' + this.valor);
        }
        retorno();
    }
};

//Veamos qué sucede al llamar a nuestro métodos.
contador.incrementador();
console.log(contador.valor); //salida --> 1

contador.mostrarContador(); //El contador es: undefined



//Solución, utilizar la función de flecha en la función encapsula en 'mostrarContador'
const contadorTwo = {
    valorTwo : 0,
    incrementadorTwo () {
        this.valorTwo ++;
    },
    mostrarContadorTwo () {
        const retornoTwo = () => {
            console.log('El contador es: ' + this.valorTwo);
        }
        retornoTwo();
    } 
};

//Probamos
contadorTwo.incrementadorTwo();
console.log(contadorTwo.valorTwo);

contadorTwo.mostrarContadorTwo(); //El contador es: 1
