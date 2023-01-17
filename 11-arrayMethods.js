const numbers = [2,8,13,29,12]
const names = ["Victoria", "Juan", "Maria", "Ramiro"]


// //FOR EACH
// numbers.forEach(function(number, index){
//     console.log(number*2)
//     // console.log(index) el segundo argumento es el indice de ese elemento dentro del arreglo
// })
// numbers.forEach(number =>console.log(number*2))

// //MAP

const numbersDouble = numbers.map(function(number){
    return number*2
})
const numbersDoubleArrow = numbers.map(number =>number*2)

//Ejemplo con strings
const namesLength = names.map(function(name){
    return name.length
})
const namesLengthArrow = names.map(name=>name.length)

//FILTER

const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0
})

const oddNumbers = numbers.filter(function(number){
    return number % 2
})

const oddNumbersArrow = numbers.filter(number => number % 2)
const evenNumbersArrow = numbers.filter(number => !(number % 2))

//REDUCE

const sumatoria = numbers.reduce(function(acumulador, elementoActual, index){
    console.log(`Vuelta: ${index}, el acumulador es ${acumulador} y el elemento actual es ${elementoActual}`)
    return acumulador + elementoActual
})


//SLICE


numbers.slice(1,4) //me trae del elemento con POSICION 1 hasta la POSICION 3 (no incluye al elemento pos 4)

//INCLUDES
numbers.includes(2) //devuelve true
numbers.includes(34) //devuelve false

//INDEX OF
numbers.indexOf(8) //devuelve 1, devuelve el indice de la primera vez que lo encuentra
numbers.indexOf(34) //devuelve -1, va a devolver este valor siempre que no encuentre el elemento en el arreglo


const nombre = "Juan Lopez"
nombre.split(" ") // devuelve ["Juan", "Lopez"]

const students = "Adriano,Martin,Chechu,Gabriela"
const studentArray = students.split(",") //['Adriano', 'Martin', 'Chechu', 'Gabriela']

const listNumbers = numbers.join(" - ")
