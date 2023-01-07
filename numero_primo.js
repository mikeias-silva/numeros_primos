const numerosAleatorios = [];

for (let posicoes = 0; posicoes < 30; posicoes++) {
    numerosAleatorios.push(Number((Math.random() * (100)).toFixed(0)))

}
console.log(numerosAleatorios);
const numerosPrimos = numerosAleatorios.filter(valor => {
    if (valor <= 1) {
        return false;
    }
    //Remove o numero que não é primo
    for (let divisor = 2; divisor < valor; divisor++) {
        if (valor % divisor === 0) {
            return false;
        }
    }
    return true
});

console.log("numeros primos ", numerosPrimos);

const somaPrimos = numerosPrimos.reduce((somatorio, valor) => {
    return somatorio + valor;
})

console.log("somatorio primos ", somaPrimos);
