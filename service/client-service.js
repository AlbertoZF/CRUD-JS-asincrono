// Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

// const listaClientes = () => {
    // const promise = new Promise((resolve, reject) => {
    //     const http = new XMLHttpRequest();
    //     //Abrir http (metodo, url)
    //     // CRUD
    //     http.open("GET", "http://localhost:3000/perfil");

    //     http.send();

    //     http.onload = () => {
    //         const response = JSON.parse(http.response);
    //         if (http.status >= 400) {
    //             reject(response);
    //         } else {
    //             resolve(response);
    //         }
    //     };
    // });
    // return promise;
// };

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        }, 
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    });
}

export const clientServices = {
    listaClientes,
    crearCliente,
};
