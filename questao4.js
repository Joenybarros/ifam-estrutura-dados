const a = [],  b = [], c = []
    for (let i=0; i<4; i++){
        a[i] = parseInt (prompt("Vetor A"))
    }
    for (let i=0; i<4; i++){
        b[i] = parseInt(prompt("Vetor B"))
    }
    for (let i=0; i<4; i++){
        c[i] = a[i] * b[i]
    }
    for (let i=0; i<4; i++){
        document.writeln(c[i])
    }