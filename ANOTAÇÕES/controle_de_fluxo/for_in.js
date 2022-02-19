// Estrutura de repetição FOR IR para usar em objetos

let person = {  
name: "Crislaine",
age: 24,
country: "Curitiba"
}

/* for (let property in person) 

 console.log(property)

*/

// console.log(person.country)


/*
for (let property in person) {
    console.log(person[property]);
} */



for (let property in person) {
    console.log ( ` ${property} : ${person [property]}`)
}


