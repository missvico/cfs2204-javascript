const firstParagraph = document.getElementById("primer-parrafo")
const listElements = document.getElementsByClassName("list-element")
const paragraphs = document.querySelectorAll("p")
const mainTitle = document.querySelector("h1")
const nameInput = document.getElementById("main-input")
const genderInput = document.getElementById("gender-input")
const submitInput = document.getElementById("main-button")

firstParagraph.addEventListener("mouseover", function(event){
    if(event.target.style.color ===  "rgb(236, 155, 241)" && event.target.style.fontSize == "40px"){
        event.target.style.color = "black"
        event.target.style.fontSize = "16px"
    }else{
        event.target.style.color = "rgb(236, 155, 241)"
        event.target.style.fontSize = "40px"
    }  
})

function saludar(nombre, genero){
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

let name, gender

nameInput.addEventListener("change", function(event){
    console.log(event)
    name = event.target.value
})

genderInput.addEventListener("change", function(event){
    gender = event.target.value
})

submitInput.addEventListener("click", function(event){
    saludar(name, gender)
})

for(i=0; i<listElements.length; i++){
    listElements[i].addEventListener("click", function(event){
        event.target.classList.toggle("checked")
    })
}