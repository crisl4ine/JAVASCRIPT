const list =[
    {Name: "Rodolfo", vip: true},
    {Name: "Crislaine", vip: true},
    {Name: "Maria", vip: false},
    {Name: "João", vip: true},
    {Name: "Lara", vip: false},
]

const newList = list.map (client  => {
    const newList = {
        name: client.Name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }
    return newList
})

console.log(newList)