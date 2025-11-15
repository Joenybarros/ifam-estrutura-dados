let carrinho =  parseInt (prompt("Quantos itens?"))
var total = 0 , itens = 0
for (let i=1; i <= carrinho; i++){
    itens = parseFloat (prompt(`Item ${i}: `))
    document.writeln (`Itens ${i} = R$ ${itens} <br>`)
    total += itens 
}
document.writeln (`<br> Mercado da Joeny </b><br>`)
document.writeln (`valor total: R$ ${total}`)