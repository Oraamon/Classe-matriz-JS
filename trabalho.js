class Matriz {
    constructor(rows, cols, elements) {
        this.rows = rows
        this.cols = cols
        this.elements = elements
        this.matriz = []
        var index = 0
        var coluna = []
        for (var i = 0; i < this.rows ; i++) {
            coluna = []
            for (var j = 0; j < this.cols ; j++) {
                coluna.push(elements[index])
                index++
            }
            this.matriz.push(coluna)
        }
    }

    getValue(linha, coluna) {
        var resultado = this.matriz[linha - 1]
        return resultado[coluna - 1]
    }

    setValue(linha, coluna, elemento){
        this.matriz[linha - 1][coluna - 1] = elemento
    }
}
// Exemplo rapaziada
var NovaMatriz = new Matriz(2, 3, [10,20,30,40,50,60])
// Aqui é uma nova matriz tudo no esquema

// Aqui eu to procurando o valor da linha 2 coluna tres que deve ser 60 no exemplo ali
console.log(a.getValue(2,3))

// Aqui eu to atribuindo a essa mesma posicao o valor 92
a.setValue(2,3,92)

// Aqui eu to getando a mesma posicao, oq deve dar 92
console.log(a.getValue(2,3))