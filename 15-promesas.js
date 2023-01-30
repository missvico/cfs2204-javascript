// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(response){
//     console.log(response)
//     return response.json()
// }).then(function(responseBody){
//     console.log(responseBody)
// }).catch(function(error){
//     console.log("Hubo un error: ", error)
// })

async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const responseBody = await response.json()
        console.log(response)
        console.log(responseBody)
    }catch(error){
        console.log(error)
    }
}
// getPosts()

function getCharacter(id){
    fetch(`https://swapi.dev/api/people/${id}/`)
    .then((response)=>{
        // console.log(response)
        return response.json()
    }).then((responseBody)=>{
        // console.log(responseBody)
        console.log(`El nombre del personaje es ${responseBody.name}`)
        return responseBody.homeworld
    }).then((homeworldUrl)=>{
        return fetch(homeworldUrl)  
    }).then((response)=>{
        return response.json()
    }).then((homeworldBody)=>{
        console.log(`El personaje es originario de ${homeworldBody.name}`)
    }).catch((error)=>{
        console.log(error)
    })
}

async function getCharacterAsync(id){
    try{
        //obtenemos datos del personaje
        const response = await fetch(`https://swapi.dev/api/people/${id}/`)
        const responseBody = await response.json()
        console.log(`El nombre del personaje es ${responseBody.name}`)

        //obtenemos datos del planeta de origen
        const homeworldResponse = await fetch(responseBody.homeworld)
        const homeworldResponseBody = await homeworldResponse.json()
        console.log(`${responseBody.name} es originario de ${homeworldResponseBody.name}`)
        
        //obtenemos arreglo de residentes del planeta y lo mapeamos en un arreglo de promesas
        const promiseArray = homeworldResponseBody.residents.map(function(url){
             return fetch(url).then(response => response.json())
        })

        //ejecutamos ese arreglo de promesas utilizando promise all
        const residents = await Promise.all(promiseArray)

        //trasnformamos el arreglo de objetos a un arreglo de strings que contienen solo el nombre
        const residentNames = residents.map(resident => resident.name)
        console.log(`${responseBody.name} es originario de ${homeworldResponseBody.name} al igual que ${residentNames.join(", ")}`)

    }catch(error){
        console.log(error)
    }
}



