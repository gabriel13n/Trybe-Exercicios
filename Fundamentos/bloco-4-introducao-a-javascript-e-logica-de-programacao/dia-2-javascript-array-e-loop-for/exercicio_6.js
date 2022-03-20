let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosPrimos = 0
for(index = 0; numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        numerosPrimos += 1
    }
}

if ( numerosPrimos === 0 ) {
    console.log('nenhum valor impar encontrado');
} else {
    console.log(numerosPrimos);
}