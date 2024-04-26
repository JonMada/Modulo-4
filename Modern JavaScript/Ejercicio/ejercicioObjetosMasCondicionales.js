const user = {
    username: 'jonmada',
    status: 'away'
};

const loginEvent = ({username,status}) => {
    if (status === 'away') {
        user.status = 'active' // Modifica directamente el status en el objeto user
    }
    
    return `${username} is ${user.status}` //Aseguramos  devolver el status actualizado del objeto user
};

console.log(loginEvent(user));