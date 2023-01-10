let a = 2
let b = 3

//no cambia el valor original de a:
a + b //me devuelve 5

//si cambia el valor de a
a = a + b

//puedo guardar rdos de operaciones en variables nuevas
let result = a + b

//Resta
a - b

//multiplicacion
a * b 

//potencia
b**2 

//division 
result/b

//resto de una division
b % c

//incremento
a++  //es lo mismo que hacer a = a+1
++a 

//decremento
a-- //es lo mismo que hacer a = a-1
--a


//incremento de a mas de a un valor:
a+=5 //es lo mismo que hacer a = a + 5

//decremento de a mas de a un valor:
a-=3 //es lo mismo que hacer a = a - 3

//concatenar strings
const fullName = "juan " + "lopez"

//conversion de tipo 
"2" + 3 //no devuelve 5, devuelve el string "23"


//OPERADORES COMPARATIVOS

a > b  //devuelve true porque 40 es mayor a 3
a < b //devuelve false porque 40 no es menor a 3

a >= 40 //devuelve true porque a es igual a 40


//igualdad abstracta - hace conversion de tipo
const twoString = "2"
const twoNumber = 2

twoString == twoNumber // devuelve true porque si convierte el tipo 2 es igual a 2

//igualdad estricta - NO hace conversion de tipo
twoString === twoNumber  //devuelve false porque no convierte el tipo, y un string y un numero no son iguales


//desigualdad abstracta - hace conversion de tipo
twoString != twoNumber  //false - porque 2 y 2 son iguales

//desigualdad estricta - NO hace conversion de tipo
twoString !== twoNumber //true porque "2" es distinto a 2