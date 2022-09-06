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
// Aqui é uma nova matriz tudo no esquema
var NovaMatriz = new Matriz(2, 3, [10,20,30,40,50,60])
//

// Aqui eu to procurando o valor da linha 2 coluna tres que deve ser 60 no exemplo ali
console.log(NovaMatriz.getValue(2,3))
//

// Aqui eu to atribuindo a essa mesma posicao o valor 92
NovaMatriz.setValue(2,3,92)
//

// Aqui eu to getando a mesma posicao, oq deve dar 92
console.log(NovaMatriz.getValue(2,3))
//

// Aqui a matriz inteira
console.log(NovaMatriz.matriz)
//

//Horácio
class Vector {
  constructor(dim, elements) {
    this.dim = dim
    this.elements = elements
    this.vector = []
    for (var i = 0; i < this.dim ; i++) {
          this.vector.push(elements[i])
  }
  }
  get(i){
    this.i = i  
    return this.vector[this.i-1]
  }
  set(i, value){
    this.i = i
    this.value = value
    this.vector[this.i-1] = this.value
  }
}
//Criar um vetor
var NovoVetor = new Vector(5,[1,2,3,4,5])
//Ver Vetor
console.log(NovoVetor.vector)
//Pegar Elemento dentro do vetor
console.log(NovoVetor.get(3))
//Alterar Elemento dentro do vetor
NovoVetor.set(3,10)
console.log(NovoVetor.get(3))
