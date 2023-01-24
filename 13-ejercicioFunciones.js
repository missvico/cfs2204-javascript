// Crear una función llamada “saludar” que reciba dos parámetros, un nombre y un género:
// Si el género especificado es F que devuelva un alert que diga “Bienvenida [nombre] a nuestra página.”
// Si el género especificado es M que devuelva un alert que diga “Bienvenido [nombre] a nuestra página.”
// Si el género no es F o M que devuelva un alert que diga “Bienvenidx [nombre] a nuestra página.”

function saludar(nombre, genero){
    // if(genero === "F"){
    //     alert(`Bienvenida ${nombre} a nuestra página`)
    // }else if(genero === "M"){
    //     alert(`Bienvenido ${nombre} a nuestra pagina`)
    // }else{
    //     alert(`Bienvenidx ${nombre} a nuestra pagina`)
    // }

    switch(genero){
        case "F":
            alert(`Bienvenida ${nombre} a nuestra página`)
            break
        case "M":
            alert(`Bienvenido ${nombre} a nuestra pagina`)
            break
        default:
            alert(`Bienvenidx ${nombre} a nuestra pagina`)
    }
}


function preguntar(){
    let nombre = prompt("Cual es tu nombre?")
    let genero = prompt("Cual es tu genero?")

    return {nombre:nombre, genero:genero}
}

// MANEJO DEL DOM
function handleClick(){
    const userData = preguntar()
    saludar(userData.nombre, userData.genero)
}

document.getElementById("ingreso").addEventListener("click",handleClick)