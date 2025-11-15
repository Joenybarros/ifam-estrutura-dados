var vetor = new Array();
vetor[0] = "Olá";
vetor[98] = "estudo"
vetor [99] = "IFAM";

/*if (vetor.length == 100) 
   alert (vetor[vetor.length-1]);*/
/*vetor.forEach(function (item, indice, array) {
  alert(item, indice);
});*/
 vetor.shift(); 
 vetor.forEach(function (item, indice, array) {
  alert(item, indice);
});
 