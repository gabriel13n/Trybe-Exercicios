const readline = require('readline-sync');

function calculadoraImc(peso, altura) {
  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;
  const imc = peso / alturaAoQuadrado;

  return imc;
}

function categoryImc(imc) {

  if (imc < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Status: Normal weight');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Status: Overweight');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Status: Grade I obesity');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Status: Grade II obesity');
    return;
  }

  console.log('Status: Obesity grades III and IV');
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso?');
  const altura = readline.questionInt('qual a sua altura?');
  const imc = calculadoraImc(peso, altura)
  console.log(`IMC: ${imc.toFixed(2)}`);
  const category = categoryImc(imc);
  return category;
}

main();