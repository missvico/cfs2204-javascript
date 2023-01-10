let name = "Adriano"
let age = 28
let variableUndef
let zero = 0
let booleanTrue = true
let booleanFalse = false
let emptyString = ""

//VALORES FALSEY - devuelven false al pasarlo a booleano
Boolean('')
Boolean(0)
Boolean(false)
Boolean(undefined)


//*******************OPERADOR LOGICO OR*********************+a

name || emptyString || age //evalua primero a name, ve que es verdadero y lo devuelve
age || emptyString || name //evalua primero a age, ve que es verdadero y lo devuelve


emptyString || age || name // devuelve 28
//primero evalua emptyString y ve que es false
Boolean(emptyString) //false
//pasa al siguiente termino y ve que es verdadero y lo devuelve
Boolean(age) //true

emptyString || zero || name //devuelve Adriano
Boolean(emptyString) //es false y pasa al siguiente
Boolean(zero) //es false y pasa al siguiente
Boolean(name) //es true y devuelve "Adriano" y corta la ejecucion


//TODAS SON FALSAS - se queda con el ultimo valor (0)
emptyString || variableUndef || zero

//************OPERADOR LOGICO AND*********************

//va a devolver el primer valor falsey que enceuntre en la cadena

name && age && zero && variableUndef
//devuelve 0

variableUndef && name && age && zero
//devuelve undefined

name && age && booleanTrue && "Victoria" 
//devuelve "Victoria" porque es el ultimo valor de una cadena de true


//*** OPERADOR LOGICO NOT */

!emptyString //devuelve true
!zero //devuelve true
!variableUndef //devuelve true

!age //devuelve false
!booleanTrue //devuelve false

//usando doble signo (!!) obtengo el booleano porque niego dos veces
!!"Victoria"

