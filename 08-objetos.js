const persona = {
    nombre: "Victoria",
    edad: 26,
    sabeProgramar: true,
    coloresFavoritos: ["celeste", "verde"]
}

//Dot notation
persona.nombre
persona.edad
persona.sabeProgramar
persona.coloresFavoritos

//Bracket Notation
persona['nombre']
persona['edad']
persona['sabeProgramar']
persona['coloresFavoritos']

//arreglos y objetos dentro de una propiedad

//puedo acceder a los elementos del arreglo
persona['coloresFavoritos'][0] 
persona['coloresFavoritos'][1]

//puedo aplicar array methods al arreglo
persona['coloresFavoritos'].push("rojo") //ahora persona['coloresFavoritos'] me devuleve ['celeste', 'verde', 'rojo']

//Diferencia bracket notation vs dot atention
let propiedadActual = 'nombre'

persona.propiedadActual //va a devolver undefined porque busca la propiedad que se llama LITERALMENT "propiedadActual" y la misma no existe dentro del objeto persona
persona[propiedadActual] // va a devolver "Victoria" porque busca la propiedad que sea igual al valor de variable propiedadActual, es decir busca persona["nombre"]

//CREAR Y MODIFICAR PROPIEDADES

//puedo cambiar el valor usando dot y bracket
persona.nombre = "Maria"
persona["edad"] =  25

//puedo agregar variables usando dot y bracket
persona.pais = "argentina"
persona["ciudad"] = "BuenosAires"

