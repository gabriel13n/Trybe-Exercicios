let anguloA = 150
let anguloB = 15
let anguloC = 15

let somaAngulos = anguloA + anguloB + anguloC

let todosAngulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(somaAngulos === 180) {
  console.log('true');
} else {
  console.log('false');
}

if (todosAngulosSaoPositivos) {
  console.log('true');
} else {
  console.log('false');
}
