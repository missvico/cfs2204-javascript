const persona = ["victoria", 26, true]

console.log(persona[0]) //"victoria"
console.log(persona[1]) //26    
console.log(persona[2]) //true
console.log(persona.length) //3 (es el largo del arreglo)

persona.push("argentina") //agrega un dato al final
persona.pop() //saca el ultimo elemento y lo devuelve
const primerElemento = persona.shift() //saca el primer elemento y lo devuelve
persona.unshift(primerElemento) //agrega un dato al principo

for(let i = 0; i<persona.length; i++){
    console.log(persona[i])
}

// En un script, declarar un arreglo con mis tres películas favoritas en orden, y luego hacer las siguientes acciones:
// Agregar una película al final del arreglo
// Loguear en consola el largo del arreglo
// Utilizando un for loop, loguear en consola la siguiente frase para cada película:
// *Nombre de película* está *ranking* en mi lista de películas favoritas.
// Ej: “El padrino está 1° en mi lista de películas favoritas”

const moviesArray = ["Volver al futuro", "Avatar", "Terminator 2"]

console.log("El arreglo de peliculas tiene un largo de " + moviesArray.length)
moviesArray.push("Avengers")

console.log("El arreglo de peliculas tiene un largo de " + moviesArray.length)

for(let i=0;i<moviesArray.length; i++){
    console.log(moviesArray[i] + " está " +(i+1)+ "° en mi lista de películas favoritas.")
    console.log(`${moviesArray[i]} está ${i+1}° en mi lista de películas favoritas.`)
}

