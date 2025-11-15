let n = parseInt(prompt("Quantos números?"));
    let vetor = [], soma = 0;
    for (let i = 0; i < n; i++) {
        vetor[i] = parseInt(prompt(`Número ${i + 1}:`));
        if (i % 2 === 1) { 
            soma += vetor[i];
        }
    }
    document.writeln("Vetor:", vetor);
    document.writeln("<br>Soma dos ímpares:", soma);
