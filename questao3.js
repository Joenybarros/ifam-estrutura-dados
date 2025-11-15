let quantidade =  prompt("Números:")
var pares = 0
const numero = [] 


for(i=0; i<=quantidade; i++){
   numero[i] = prompt("Numeros:")
   if (numero[i] % 2 == 0)
    pares++
}
    document.writeln(`Números: ${i} <br>`)
for (let i=0; i<=quantidade; i++){
    document.writeln(numero[i])
}
    document.writeln(`<br> Numeros pares: ${pares}`)