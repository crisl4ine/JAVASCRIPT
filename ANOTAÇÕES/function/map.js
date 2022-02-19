
/*percorre item por item do araay, e cria um novo array, com as mesmas quantidades do array original. pode ter ate tres parâmetros, ex item por item; index e array completo, o for it nao retorna nada para a gente, ja o map RETORNA o valor, e pode guardar em algum lugar */

const numbers = [1,2,3,4]

const students =[
{name: "Rodolfo", age: 25 },
{name: "Maria", age: 43 },
{name: "Carlos", age: 36},
{Name: "Marcos", age: 57},

];

const newArray = numbers.map( (number) => {
     return number * 2
})

console.log(newArray);


const newStudents = students.map ((student) => {
     const newstudent = {
          name: student.name + "da Silva",
          age: student.age - 5,
     }
     return newstudent
})

console.log(newStudents)



