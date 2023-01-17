function saludar(nombre){
    alert(`Hola ${nombre}`)
}
// saludar("Maria")

add(2,3) //puede ejecutar declaraciones de funcion arriba de mi codigo
// substractExpresion(5,3) //va a lanzar error

//DECLARACION DE FUNCION
function add (num1, num2){
    console.log(`Calculando ${num1} + ${num2}...`);
    return num1 + num2;  //El return marca que va a devolver la funcion al ser ejecutada
    console.log("esto no lo va a ejecutar"); //despues del return no se lee el resto de la funcion
}

//EXPRESION DE FUNCION
const substractExpresion = function (num1, num2){
    console.log(`Calculando ${num1} - ${num2}...`);
    return num1 - num2
}

substractExpresion(5,3) //ahora si funciona porque lo llamo despues de declararlo

//Expresion FUNCION FLECHA (ARROW FUNCTION)
const duplicate = (num) =>{
    return num * 2
} 

duplicate(5) //devuelve 10

const duplicateResumido = num => num*2  
//cuando es una sola linea no necesito poner llaves y return
//cuando es un solo argumento no necesito poner parentesis

const currentPet = {
    name: "Bobby",
    animal: "dog"
}


//FUNCIONES CALLBACK

function bienvenida(nombre){
    alert(`Bienvenida ${nombre}`)
}

function despedida(nombre){
    alert(`Hasta luego ${nombre}`)
}

function loguear(nombre){
    console.log(`El nombre ingresado es ${nombre}`)
}

function procesarUsuario(callback){
    const nombre= prompt("Cual es tu nombre?")
    callback(nombre)
}


