// Armar un script y declarar un arreglo con los nombres de 5 personas. Utilizando los array methods aprendidos hacer las siguientes acciones:
// Utilizando .forEach() loggear en la consola el nombre de las 5 personas.
// Utilizando .slice() guardar en una variable un nuevo arreglo que vaya desde la segunda hasta la cuarta persona. Loggear ese arreglo
// Utilizando .map() guardar en una variable un arreglo de números que indique la cantidad de letras que tiene cada nombre. Loggear ese arreglo.
// Utilizando .join() guardar en una variable un string que contenga a todos los nombres separados por un espacio. Loggear ese string.
// Utilizando .filter() guardar en una variable un arreglo de nombres que solo contenga a los nombres que terminan con la letra “a”. 

const names = ['Adriano', 'Martin', 'Chechu', 'Gabriela', 'Cintia']
console.log(names)

names.forEach(name => console.log(name))

const sectionNames = names.slice(1,4)
console.log(sectionNames)

const namesLength = names.map(name => name.length)
console.log(namesLength)

const namesString = names.join(" ")
console.log(namesString)

const namesFinishA = names.filter(function(name){
    return name[name.length-1] === "a"
})
console.log(namesFinishA)