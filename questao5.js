let n = parseInt (prompt("Número de entrevistados:"))
let idade = [], soma = []

for (let i=0; i<n; i++){
    idade[i] = parseInt(prompt( `Idade das pessoas ${i+1}`))
    soma+=idade[i]
}
let media = soma/n
    document.writeln(`A média é: ${media.toFixed(2)}`)
