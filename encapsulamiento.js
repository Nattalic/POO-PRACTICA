//encapsulamiento: ayuda a ocultar los detalles complicados y solo muestra lo que necesitas usar
//como un celular, no necesitamos saber los circuitos que tiene para que funcione
//Escondo lo complicado, muestro solo lo necesario

//ej:
class Celular {
    #bateria = 100 // # signfica que es privado , no se puede tocra directamente
    #sistemaOperativo //interno del celular, privado

    constructor(marca, modelo) {
        this.marca = marca //esto es publico, se puede ver
        this.modelo = modelo //esto es publico, se puede ver
        this.#sistemaOperativo = "Android"
    }

    //metodos que se pueden utilizar, metodos publicos

    hacerLlamada(numero) {
        if (this.#bateria > 5) {
            this.#bateria -= 5;
            console.log(`Llamando a ${numero}...`);
            this.#procesarLlamada(); // Método privado
        } else {
            console.log("Batería muy baja");
        }
    }

    verBateria() {
        return `Bateria ${this.#bateria} %`
    }

    //metodo privado: esto funciona internamente no se usa directamente

    #procesarLlamada () {
        console.log("conectando con torres de señal...")
    }

}


//imprimirlo
const miCelular = new Celular ("Samsung", "Galaxy")
miCelular.hacerLlamada("123-456-7890")
console.log(miCelular.verBateria()) 