const students =[
    {name: "Rodolfo", testGrade: 7 },
    {name: "Maria", testGrade: 5 },
    {name: "João", testGrade: 9 },
    {name: "Carlos", testGrade: 10 },
    {name: "Roberto", testGrade: 2 },
]

const approvedStudents = students.map( student => {
    let approvedOrNot
    
    if(student.testGrade >=7){
        approvedOrNot="approved"
    }
        else{
            approvedOrNot = "disapproved"
        }

        const students = {
            name: student.name,
            finalResult: approvedOrNot
        }
        return students
    

})

console.log(approvedStudents)
 