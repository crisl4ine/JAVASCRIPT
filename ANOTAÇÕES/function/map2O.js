const numbers = [1,2,3,4]

const students =[
{name: "Rodolfo", age: 25 },
{name: "Maria", age: 43 },
{name: "Carlos", age: 36},
{Name: "Marcos", age: 57},

];

const double = number => number * 2

const sum = number => number + 10

const newArray2 = numbers.map(double).map(sum) /*as vezes voce precisa usar varios map para tratar um dado*/

console.log(newArray2)

//Ex//

const double = number => number * 2
const toReais = number =>`R$ ${number.toFixed(2)}`

 const newArray2 = numbers.map(double).map(toReais)

console.log(newArray2)



//teste//