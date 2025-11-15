function minhaFuncao(objeto) {
  objeto.fabricante = "Civic";
}

var meucarro = {
  marca: "Honda",
  modelo: "Accord",
  ano: 1998,
};


document.writeln(meucarro.marca);


minhaFuncao(meucarro);


document.writeln(meucarro.marca);
