/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

let convertToString = (value) => {
    return String(value);
}
let resultado = convertToString('value');
console.log(resultado);
  /*
    02
  
    - Crie uma função que retorne a quantidade de caracteres que uma string  
      recebida por parâmetro possui.
  */
      //let stringQ2 = 'Oi tudo bem?';
      //let stringLength = (str) => str.length;
      //console.log(stringLength(stringQ2));

  
  /*
    03
  
    - Crie uma função que retorne todos os caracteres de uma string em letras  
      minúsculas;  
    - Utilize a função para exibir a string abaixo no console.
  
    "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
  */
    let stringQ3 = "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO";
    let stringQ3toLowerCase = (str) => {
        return str.toLowerCase();
    }
    console.log(stringQ3toLowerCase(stringQ3));
  
  /*
    04
  
    - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
    - Ao ser invocada, a função deve retornar o index do caractere na string.
  */
 let functionQ4 = ('4quatro')
 let Indexofcaractere = (i) => {
    return i.charAt(0);
 }
 console.log(Indexofcaractere(functionQ4))
  
  /*
    05
  
    - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
      passado por argumento existe no array (também passado por argumento).
  */
      let arrayaleatorio = ['CR7', 'messi', 'neymar'];
      let existenoarray = (array, item) => {
          if(array.includes(item)){
              console.log(true);
          } else {
              console.log(false);
          }
      }
      console.log(existenoarray(arrayaleatorio))
      
 

  
  /*
    06
  
    - Crie uma função que retorna a concatenação de 2 arrays, passados como  
      argumentos em sua invocação;
  */
      let arraygoats1 = ['CR7', 'MESSI'];
      let arraygoats2 = ['PELÉ', 'DI STÉFANO'];
      
      let concatenaArrays = (array1, array2) => {
          return array1.concat(array2);
      }
      
      console.log(concatenaArrays(arraygoats1, arraygoats2));
  /*
    07
  
    - Crie uma função que retorna o array passado como argumento em sua invocação,  
      mas com o último item removido.
  */
      let arraycurretgoats = ['VINI JR', 'HAALAND', 'MBAPPÉ', 'YAMAL'];

      let popArrays = (array) => {
          array.pop();
          return array;
      }
      
      console.log(popArrays(arraycurretgoats));
  
  /*
    08
  
    - Crie uma função que retorna se o valor passado como argumento em sua  
      invocação é null.
  */
      const isNull = value => value === null;
      console.log(isNull)
    
  
  /*
    09
  
    - Crie uma função que apenas invoca uma função de callback recebida por  
      parâmetro;
    - Crie outra função que apenas exibe seu nome no console;
    - Invoque a função que recebe um callback por parâmetro, passando como  
      argumento a função que exibe seu nome no console e veja se o nome realmente  
      foi exibido.
  */
      const invokeCallback = callback => callback();

      const displayName = () => console.log('Arthur');
      
     
      invokeCallback(displayName);

  
  /*
    10
  
    - Crie uma função que invoca uma função de callback recebida por parâmetro.  
      A invocação da função recebida por parâmetro deve receber um valor como  
      argumento;
    - Crie uma função que retorna o triplo de um número recebido por parâmetro;
    - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
      resulte no triplo de 33.
  */
 
const invokeCallbackWithValue = (callback, value) => callback(value);


const triple = number => number * 3;


let result = invokeCallbackWithValue(triple, 33);
console.log(result);  // Deve exibir 99
  
  /*
    11
  
    - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
      mensagem abaixo no console, substituindo os "X" pelas informações corretas;
    
    "O Xº item do array [X, X, X] é X."
  */
  
    const numbers = [1, 2, 3];

    numbers.forEach((number, index) => {
        console.log(`O ${index + 1}º item do array [${numbers}] é ${number}.`);
    });
  
  /*
    12
  
    - Converta o for loop abaixo em um forEach;
    - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
      criada.
  */

  const letters = ['v', 'e', 'p'];
let lettersCopy = [];

letters.forEach(letter => {
    lettersCopy.push(letter);
});

console.log(lettersCopy);  // Deve exibir ['v', 'e', 'p']