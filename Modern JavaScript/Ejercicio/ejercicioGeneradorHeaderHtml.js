// const htmlHeaderGenerator = (text, typeOfHeader) => {
//     if (typeOfHeader === 1) {
//         console.log(`<h1> ${text} </h1>`);
//     } else if (typeOfHeader === 2) {
//         console.log(`<h2> ${text} </h2>`);
//     } else if (typeOfHeader === 3) {
//         console.log(`<h3> ${text} </h3>`);
//     } else if (typeOfHeader === 4) {
//         console.log(`<h4> ${text} </h4>`);
//     } else {
//         console.log(`<h4> ${text} </h4>`);
//     }
// }

//Alternativa a la construcción anterior 
const htmlHeaderGenerator = (text, typeOfHeader) => {
    console.log(`<h${typeOfHeader}> ${text} </h${typeOfHeader}>`);
}

htmlHeaderGenerator('Introducción a JavaScript', 1); //salida --> <h1> Introducción a JavaScript </h1>