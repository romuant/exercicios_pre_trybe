const numeros = [2,4,-440,5,5,7,89,90,1000]
console.log("numeros originais :" +numeros)
const numerosSemRepeticao = [...new Set(numeros)];

   console.log("numeroSemRepetição : " +numerosSemRepeticao.sort((a,b)=>a-b) )
console.log("ordenados : "+numerosSemRepeticao)
numerosSemRepeticao.pop()
console.log("sem o ùltimo numero : "+numerosSemRepeticao)
numerosSemRepeticao.reverse()
console.log("invertidos : "+numerosSemRepeticao)
numerosSemRepeticao.shift()
console.log("Sem o primeiro : "+numerosSemRepeticao)
numerosSemRepeticao.unshift(34)
console.log("com o primeiro de volta : "+numerosSemRepeticao)
numerosSemRepeticao.push(567,89000,-500,22627)
console.log("Adicionados no final :   "+numerosSemRepeticao)
numerosSemRepeticao.sort((a,b)=>a-b)
console.log("Ordenados novamente - "+numerosSemRepeticao)
numerosSemRepeticaoSoOsPares= numerosSemRepeticao.filter(numerosSemRepeticao=>numerosSemRepeticao%2===0)
console.log("so os pares - "+numerosSemRepeticaoSoOsPares)
numerosSemRepeticaoSoOsPares= numerosSemRepeticao.filter(numerosSemRepeticao=>numerosSemRepeticao%2!==0)
console.log("so os ímpares - "+numerosSemRepeticaoSoOsPares)
