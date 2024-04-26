//'This' se utiliza para referirnos al objeto en el que se invoca la función
const persona = {
    nombre: 'Jon',
    saludar: function () {
        console.log('Hola, soy ' + this.nombre + '.');
    }
};

//Llamamos al método saludar() del objeto persona
persona.saludar(); //Salida: Hola, soy Jon.


//Ejemplo avanzado
var tema = {
    titulo: 'Guide to Programming',
    contenido: 'Content goes here...',
    visibilidadUsuario: function (rolUsuario) {
      if (rolUsuario === 'pago') {
        return true;
      } else {
        return false;
      }
    },
    mostradorContenido: function(usuario) {
      if (this.visibilidadUsuario(usuario)) { //Si es true
        console.log(this.titulo + " - " + this.contenido);
      } else {
        this.contenido = '';
        console.log(this.titulo + " - " + this.contenido);
      }
    }
  }

//Creamos los objetos
user = { role: 'pago' };
userTwo = {role: 'free'};

//Llamamos a los métodos
tema. mostradorContenido(user.role); //Salida: Guide to Programming - Content goes here...
tema. mostradorContenido(userTwo.role); //Salida: Guide to Programming - 
