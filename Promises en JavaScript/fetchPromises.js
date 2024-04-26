/*Supongamos que queremos hacer una solicitud a una API. Vamos a hacer
una solicitud de los posts de dailysmarty. (el código no funciona en VSC)*/

const postPromises = fetch('https://api.dailysmarty.com/posts');

postPromises
    .then ((data) => data.json()) //convertimos la respuesta del Promise si ha sido OK a formato JSON
    .then ((data) => {
        data.posts.forEach((item) => {
            console.log(item.title);
        });
    })

    .catch ((err) => { //En caso de que la solicitud no haya sido favorable, imprimir error
        console.error(err);
    });

