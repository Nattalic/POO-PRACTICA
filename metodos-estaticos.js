//es un método que pertenece a la clase, no a los objetos que se crean
//no es necesario crear una instancia

class Matematicas {
    static sumar (a, b) {
        return a + b
    }

    static PI = 3.1416


    static calcularAreaCirculo(radio) {
    return this.PI * radio * radio;
  }
}


// No necesitas crear una instancia
console.log(Matematicas.sumar(5, 3)); // 8
console.log(Matematicas.calcularAreaCirculo(5)); // 78.53975


//??????????