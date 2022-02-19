/* retorna um valor (pode ser um novo array, um objeto, string, number, etc)

aceita 4 parametros
-acumulador (acc);
-valor atualn (current);
-index;
-array completo;
*/

const list = [1,2,3,4];

const sum = list.reduce( (acc, current) => {
    return acc + current
}, 0)

console.log(sum)

//vai acumulando o valor, e vai somando, ou retornando o valor que estamos pedindo.//

//teste//
