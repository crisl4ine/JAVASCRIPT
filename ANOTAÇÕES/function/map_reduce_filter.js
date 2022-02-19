const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kym Hyun Suk", fundedOn: 1938 },
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", fundedOn: 1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", fundedOn: 1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", fundedOn: 2004 },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", fundedOn: 2006 },
    { name: "Apple", marketValue: 845, CEO: "Tim Cook", fundedOn: 1976 },
];

//AUMENTAR MARKTVALUE EM 10%//
//FILTRAR EMPRESAS QUE FORAM FUNDADAS ANTES DE 2000//
//SOMAR O MARKTVALUE DO NOVO ARRAY//

/*map */ const add10PercentMarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue / 10

    return company
}


/*filter*/ const oldCompany = company => company.fundedOn < 2000

/* reduce */ const allMarketValue = (acc, current) =>  acc + current.marketValue


const myBestCompanies = companies
.map(add10PercentMarketValue)
.filter(oldCompany)
.reduce(allMarketValue,0)

console.log(myBestCompanies);

 //teste//