
/*Exercises: separar quais empresas foram fundadades a partir de 1975, e tem um valuetion maior que 200 milhões */

const companies = [
{name: "Samsung", marketValue: 50, CEO:"Kym Hyun Suk", fundedOn: 1938},
{name: "Microsoft", marketValue: 415, CEO:"Satya Nadella", fundedOn: 1975},
{name: "Intel", marketValue: 117, CEO:"Brian Krzanich", fundedOn: 1968},
{name: "Facebook", marketValue: 383, CEO:"Mark Zuckerberg", fundedOn: 2004},


];

const newCompanies = companies.filter(company => {
if(company.fundedOn <= 1975) return false

if(company.marketValue <= 200) return false

return true
})

console.log(newCompanies)



//teste//
