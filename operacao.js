function multiplicao(n1 , n2){
    return n1 * n2
}
function divisao (n1 , n2){
    return n1 / n2
}
function subtracao (n1 , n2){
    return n1 - n2
}
function adicao (n1 , n2){
    return n1 + n2
}
switch (operacao){
 case '1':
     multiplicao (n1,n2); break;
case '2':
     divisao (n1,n2); break;
case '3':
     subtracao (n1,n2); break;
case '4':
     adicao (n1,n2); break;
     default:
     alert("Opção inválida")
    }




