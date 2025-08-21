class Auto {
    constructor (marca,modelo,color) { //constructor: da las primeras propiedades de la clase
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.velocidad = 0 //propiedad con valor inicial
    this.estado = false //propiedad con valor inicial
    }

    //metodos: acciones que realiza en este caso el carro
    encender () {
        this.encendido = true
        console.log(`El ${this.marca} ${this.modelo} está encendido`) //las comillas ayudan a poner variables dentro de texto facilmente
    }

    acelerar (incremento) {
        if(this.encendido) {
            this.velocidad += incremento //que es +=???

            console.log(`Velocidad actual ${this.velocidad} km/h`)
        } else {
            console.log("Primero debes encender el auto!!!")
        }
    }

    frenar() {
        this.velociad = Math.max (0, this.velocidad -10)
        console.log(`Frenando... Velocidad ${this.velocidad} km/h `)
    }

}


//Crear objetos específicos a partir de la clase
//Instancias

const miAuto = new Auto ("porsche","gtr","rosado")
const tuAuto = new Auto("Toyota", "Corolla", "rojo");

//usar objetos...
miAuto.encender()
miAuto.acelerar(100)
tuAuto.frenar()
tuAuto.encender()
tuAuto.acelerar(50)