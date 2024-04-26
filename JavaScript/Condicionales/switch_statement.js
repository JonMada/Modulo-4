var data = {};

switch(typeof data) {
    case 'string':
        console.log('Es una string');
        break;
    
    case 'number':
        console.log('Es un número');
        break;
    
    case 'boolean':
        console.log('Es verdadero o falso');
        break;
    
    default:
        console.log('No hay coindicencias')
}