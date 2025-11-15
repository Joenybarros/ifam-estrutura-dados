let numero = parseInt (prompt ("Informe o número:"))
var fatorial = 1
for (i=1 ; i<=numero ; i++){
    fatorial *= i ; //fatorial = fatorial* i
}
    alert (`${numero}!= ${fatorial}`)