for (let i = 0; i < 5; i++) {
    // console.log(i);
};  
// O loop for é ótimo quando você sabe o número de iterações que quer executar.


for (let i = 0; i < 8; i++) {
    // console.log(`Número impresso: ${i}`);
};


// o loop while roda enquanto uma condição é verdadeira.
let i = 0;
while (i < 5) {
//   console.log(i);
  i++;
}


// o loop forEach é ideal para percorrer arrays.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((number) => {
    // console.log(`Números do array (forEach): ${number}`);
});


// Exercícios de Loop:
// Exercício 1: Imprimir números pares: Use um loop for para imprimir todos os números pares de 1 a 20.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 20; i % 2 === 0; i++) {
    // console.log(`Os números pares: ${i}`);
};
// Condição do loop: No for, a condição deve ser sobre o intervalo dos números que você está percorrendo, e não apenas se o número é par. A condição i % 2 === 0 está errada nesse caso, pois você quer continuar executando o loop enquanto i for menor ou igual a 20, não apenas quando for par.

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        // console.log(`Os números pares: ${i}`);
    }
};

// começa com 0
// enquanto i for menor ou igual a 20
// execute o looping na condição de: i % 2 === 0


// Exercício 2: Soma de números
// Usando um loop while, calcule a soma de todos os números de 1 a 100.

// o loop while roda enquanto uma condição é verdadeira.

let index = 1;
// index: Essa variável serve como um "contador" que começa em 1 e vai até 100. Ela nos ajuda a controlar o loop.
let soma = 0;
// soma: Essa variável guarda o valor da soma de todos os números que estamos acumulando no loop. Começamos com 0.

while (index <= 100) {
    soma += index; // Somar o valor de 'index' à soma
    index++; // Incrementar o valor de 'index'
};
// O loop vai continuar repetindo o que está dentro dele enquanto index for menor ou igual a 100. Quando index chegar a 101, o loop para.
// Basicamente, ele repete as instruções até que index atinja o valor de 100.

// Somando os valores de index em soma:
// Aqui, usamos a expressão soma += index, que é o mesmo que soma = soma + index. Isso significa que, a cada vez que o loop roda, o valor atual de index é adicionado à variável soma.
// Por exemplo, na primeira vez, index é 1, então soma = soma + 1. Na segunda vez, index é 2, então soma = soma + 2, e assim por diante até index ser 100.

// soma += index SIGNIFICA soma = soma + index;

console.log(`Soma de todos os números de 1 até 100: ${soma}`);


// Soma de números ímpares de 1 a 50:
let index2 = 1;
let soma2 = 0;
while (index2 < 50) {
    soma2 += index2;
    index2++;
};
console.log(`Soma de números ímpares entre 1 e 50: ${soma2}`);

// Contagem regressiva:
// Use um loop while para imprimir os números de 10 até 0 em ordem decrescente.

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersInvertidos = [];

let indexArrayInvertido = numbersArray.length - 1; // Começamos do último índice

while (indexArrayInvertido >= 0) { // O loop vai continuar enquanto o índice for maior ou igual a 0
    numbersInvertidos.push(numbersArray[indexArrayInvertido]); // Adiciona o número ao array invertido
    indexArrayInvertido--; // Decrementa o índice
}

console.log(`Números do array em ordem decrescente: ${numbersInvertidos}`);

// Exercício 3: Iterar sobre um array
// Dado o array ['maçã', 'banana', 'laranja'], use forEach para imprimir cada fruta.

const frutas = ['maçã', 'banana', 'laranja'];
frutas.forEach((fruta) => {
    console.log('Fruta do array: ' + fruta);
});

// Exercício 4: Encontre o maior número
// Dado o array [10, 5, 8, 20, 3], use um loop para encontrar o maior número.

const arrayNumeros = [10, 5, 8, 20, 3];
let maiorNumero = arrayNumeros[0]; // inicializando com o primeiro valor do array

for (let i = 1; i < arrayNumeros.length; i++) {
    if(arrayNumeros[i] > maiorNumero) {
        maiorNumero = arrayNumeros[i]; // Atualiza o maior número
    };
};
console.log("O maior número é:", maiorNumero);