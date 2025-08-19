//Objetos 

const persona = {
    nombre: "juan",
    edad: 30,
    profesion: "Ingeniero"
}

//clase de objetos -- armar objetos que tengan un molde
//una clase genera objetos
//constructor es un elemento dentro de las clases que permite configurar aspectos iniciales dentro de un objeto


//privado publico y protegido
//no cualquier persona pueda acceder a info 
// getters: obtener la info 
// setters: como puedo actualizar la info


class Persona {
    constructor(nombre,edad,profesion) {
        this.nombre = nombre 
        this.edad = edad //this: permite guardar dentro de ese contexto hace referencia a cada una de las etiquetas
        this.profesion = profesion
        this._password = 12345 // se le puede agregar un _password para que sean tratados como semi-privados
    }


    hablar() {
        console.log(`Hola, soy ${this.nombre} y soy ${this.profesion}`)
    }

    get password() { //geters
        return ''
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0)  {
            this._edad = nuevaEdad
    } else {
        console.log("Edad no valida")
    }
}
}
//funciones metodos dentro de las clases representen algo que especificamente puedan hacer


//instancial, apartir de un molde estoy creando un elemento especifico de ese tipo

const juanPablo = new Persona ("Juan Pablo", 18, "Ingeniero y Diseñador :3")
const natalia = new Persona ("Natalia", 20, "Diseñadora")
console.log(juanPablo.edad) //acceder a los atributos
console.log(juanPablo.hablar()) //acceder a metodos de funciones 

juanPablo.edad = -30
console.log(juanPablo)
//crear objetos por medio de clases tenemos moldes, todos los objetos dentro de la aplicacion que sean personas siempre tendran
//las mismas caracterisiticas

//super: super clase, clase de la que yo estoy puesta, ejecuta el constructor de la persona

//polimorfismo: multiples formas de hacer las cosas 
//herencia: heredar diferentes atributos, caracteristicas
//abstraccion: busca que los aspectos complejos (pasos) solamente se haga la accion de una palabra a un nivel simple
//solo hacer la accion sin necesidad de la complejidad del bloque d codigo 
//encapsulamiento: 