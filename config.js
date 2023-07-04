// Spread em chamadas de função

const soma = (x,y) => x+y;
const valores = [10,20]
console.log(soma(...valores))

// Concatenar dois arrays
const itensIniciais = [5,10,15]
const itensFinais = [...itensIniciais, 20,25,30]
console.log(itensFinais)