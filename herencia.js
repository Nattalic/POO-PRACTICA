// cuando una clase toma las características y métodos de otra clase

//ej
//Clase padre

class Animal {
    constructor (nombre){
        this.nombre = nombre
    }


    comer () {
        console.log(`${this.nombre} esta comiendo :3`)
    }
}

//Clase hijaa

class Perro extends Animal { // perro hereda de animal peor con sus propias caracteristicas
    ladrar () {
        console.log(`${this.nombre} dice: guau guau`)
    }
}

class Gato extends Animal { // perro hereda de animal peor con sus propias caracteristicas
    maullar () {
        console.log(`${this.nombre} dice: miauuuu`)
    }
}


//utilizamos la herencia
let perro = new Perro ("polo")
perro.comer ()
perro.ladrar()


let gato = new Gato ("kronos")
gato.comer()
gato.maullar()