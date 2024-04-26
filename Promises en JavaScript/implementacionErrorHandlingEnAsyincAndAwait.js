//Bloque try nos permite capturar los errores que ocurran durante la ejecución de ese bloque.
try {
    const resultado = 10/0; //Esto generará un error por divisón por cero
    console.log(resultado);
} catch (error) {
    console.error('Se produjo un error:', error.message); //Acede a la propiedad message del objeto error que nos genera.
}

//Salida--> Infinity

//Ejemplo desarrollado
/*Imaginemos que tenemos varias promesas en un bloque de código y queremos poder encapsularlas.
Si encapsulamos las promesas en un mismo bloque try{}, al obtener un error se paralizará la ejecución del
código hasta el punto en el que nos de error. Si encapsulamos cada promesa dentro de un bloque try{}, esta 
nos recogerá el códgio cuando sucedapero permitirá que el resto sigan ejecutándose. La pertinencia de una 
opción u otra, depende de la dependenciade las promesas. Si la primera es el login y la segunda es la 
actualización de usuario, nos interesaría contener todo en un mismo bloque try{} para que no se generasen errores.*/

async function queryApis() {
    try {
      const postsPromise = fetch('http://api.dailysmarty.com/posts');
      const posts = await postsPromise.then(res => res.json());
      console.log(posts);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the DailySmarty API');
    }
  
    try {
      const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
      const repos = await reposPromise.then(res => res.json());
      console.log(repos);
    } catch(err) {
      console.log(err);
      console.log('There was an error with the GitHub API');
    }
  }
  
  queryApis();