//Criando uma calculadora com operações simples

const calculator = (Number1, Number2, operation) => {

    let result

    switch (operation) {

        case "+":
            result = Number1 + Number2;

            break;

        case "-":
            result = Number1 - Number2
            break;

        case "*":
            result = Number1 * Number2
            break;

        case "/":
            result = Number1 / Number2
            break;

        default:
            result = Number1 + Number2
            break;
    }
    
    return result
}

console.log(calculator(987,258,'/'))



//teste//