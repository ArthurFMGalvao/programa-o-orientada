/*
/* Exercícios sobre Arrays, Undefined e Null */

//como se declara um Array
let nomeDoArray = []

// Exemplos de Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']
const ages = [31, 22, 21, 18, 16, 14]
const randomArray = ['Peter Parker', 'Adidas', 29, 31.5]

// Métodos de arrays
console.log('join:')
const joinHeroes = heroes.join('-')
console.log(joinHeroes)

console.log('indexof:')
const indexOf22 = ages.indexOf(22)
console.log(indexOf22)

console.log('concat:')
const moreHeroes = heroes.concat('Lupin')
console.log(moreHeroes)

console.log('push:')
const pushToHeroes = heroes.push('Hulk', 'Rick Grimes')
console.log(pushToHeroes)
console.log(heroes)

console.log('pop:')
const popHeroes = heroes.pop()
console.log(popHeroes)
console.log(heroes)

/* Undefined, null e Nan */

// Boolean:
let isRaining = true;
let isSunny = false;

console.log(isRaining); // Output: true
console.log(isSunny);   // Output: false

// Undefined:
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined

// null:
let nullValue = null;
console.log(nullValue); // Output: null

// NaN (Not a Number):
let result = "hello" / 5;
console.log(result); // Output: NaN

// Tipagem dinâmica em JS
let minhaLetVariando = 5
minhaLetVariando = 'Olá turma de prog web!'
minhaLetVariando = true

console.log(typeof minhaLetVariando)
