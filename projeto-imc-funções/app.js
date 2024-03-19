let arrayNomes = ["Arthur", "Davi", "André", "Pedro", "Victor", "Luís", "Mariah", "Roberta", "Bárbara", "Valentina", "Ryan", "Maurício", "Guilherme", "Gustavo", "Flávio"];
let arrayAlturas = [1.76, 1.73, 1.86, 1.75, 1.77, 1.73, 1.66, 1.60, 1.65, 1.65, 1.78, 1.77, 1.77, 1.75, 1.79];
let arrayPesos = [94, 74, 85, 75, 96, 73, 67, 72, 68, 67, 92, 77, 75, 78, 74];

let calcularIMC = (peso, altura) => peso / (altura * altura);


function determinarDiagnostico(imc) {
    if(imc < 18.5) {
        return "Abaixo do peso";
    } else if(imc <= 25) {
        return "Peso normal";
    } else if(imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

for(let i = 0; i < arrayNomes.length; i++) {
    let imc = calcularIMC(arrayPesos[i], arrayAlturas[i]);
    let diagnostico = determinarDiagnostico(imc);

    console.log(`Nome: ${arrayNomes[i]}, Altura: ${arrayAlturas[i]}m, Peso: ${arrayPesos[i]}kg, IMC: ${imc.toFixed(2)}, Diagnóstico: ${diagnostico}`);
}