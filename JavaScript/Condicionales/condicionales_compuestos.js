var age = 70;

if (age >= 25 && age <= 65) { //El && se utiliza para dos condiciones lógicas (y/and)
    console.log ('Puedes alquilar el coche');
} else if (age < 25) {
    console.log ('No tienes edad suficiente para alquilar el coche');
} else if (age > 65) {
    console.log ('Tiene demasiada edad para que le alquilemos el coche');
}