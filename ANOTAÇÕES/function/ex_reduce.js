const companies = [
    {name: "Samsung", marketValue: 50, foundeOn: 1983},
    {name: "Microsoft", marketValue: 415, foundeOn: 1975},
    {name: "Intel", marketValue: 117, foundeOn: 1968},
    {name: "Apple", marketValue: 845, foundeOn: 1976},

]

const allMarketValue = companies.reduce( ((acc, current) =>  acc + current.marketValue), 0)

console.log(allMarketValue)  


//teste//