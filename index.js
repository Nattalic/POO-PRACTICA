//Objetos 

const persona = {
    nombre: "juan",
    edad: 30,
    profesion: "Ingeniero"
}

//clase de objetos -- armar objetos que tengan un molde
//una clase genera objetos
//constructor es un elemento dentro de las clases que permite configurar aspectos iniciales dentro de un objeto

class Persona {
    constructor(nombre,edad,profesion) {
        this.nombre = nombre
        this.edad = edad //this: permite guardar dentro de ese contexto hace referencia a cada una de las etiquetas
        this.profesion = profesion
    }
}
//funciones metodos dentro de las clases representen algo que especificamente puedan hacer


//instancial, apartir de un molde estoy creando un elemento especifico de ese tipo

const juanPablo = new Persona ("Juan Pablo", 18, "Ingeniero y Diseñador")
console.log(juanPablo)

//crear objetos por medio de clases tenemos moldes, todos los objetos dentro de la aplicacion que sean personas siempre tendran
//las mismas caracterisiticas