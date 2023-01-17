// Crear una función llamada “multiply” que reciba dos números enteros y devuelva el producto entre esos dos números.
// Crear una función llamada lastLetter que devuelva la última letra de una cadena de texto (string).
// Escribir ahora ambas funciones como una expresión de función y una arrow function.

function multiply(num1, num2){
    return num1 * num2
}

const multiplyExp = function(num1, num2){
    return num1 * num2
}

const multiplyArrow = (num1, num2) => num1*num2


function lastLetter(string){
    return string[string.length-1]
}
"auto" //length de 4, y la letra o es el indice 3

const lastLetterExp = function(string){
    return string[string.length-1]
}

const lastLetterArrow = string => string[string.length-1]


// Crear una función llamada “countLetters” que reciba por parámetro un arreglo de nombres y devuelva un objeto cuyas propiedades sean los nombres y sus valores la cantidad de letras que tiene ese nombre.

const names = ["Victoria", "Juan", "Maria", "Ramiro"]

function countLetters (array){
    const result = {}
    for(let i = 0; i<array.length; i++){
        // console.log("posicion", i)
        // console.log("elemento", array[i])
        result[array[i]] = array[i].length
    }
    return result
}

// Crear una función llamada “filterProducts” que reciba por parámetro un arreglo de objetos y una propiedad y devuelva un arreglo con los valores de esa propiedad: