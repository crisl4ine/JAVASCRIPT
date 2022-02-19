
/*vai criar um novo array, e não necessariamente precisa ter as mesmas quantidade de itens do array original.
Só retorna quando for true.
item
index
array completo */

const list = [
{name:"Rodolfo", vip: true},
{name:"Maria", vip: false},
{name:"Rodrigo", vip: true},
{name:"Carlos", vip: false},
{name:"Marcos", vip: false},

];

const justVips = list.filter( client => {
     
     return client.vip
})

console.log(justVips)

////

const students = [
{name:"Rodolfo", testGrade: 7},
{name:"Maria", testGrade: 2},
{name:"Marcos", testGrade: 9},
{name:"Julio", testGrade: 5},
{name:"Rodrigo", testGrade: 10},

]

const newStudentList = students.filter (student =>{ 
     return student.testGrade >=7
})


console.log(newStudentList)

//teste1//