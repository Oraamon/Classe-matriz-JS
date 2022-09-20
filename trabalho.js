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
          this.vector.push([elements[i]])
  }
  }
  get(i){
    this.i = i  
    if(this.vector[this.i-1][0] != undefined)
    return this.vector[this.i-1][0]
    else
    return this.vector[0][this.i-1]
  }
  set(i, value){
    this.i = i
    this.value = [value]
    if(this.vector[this.i-1][0] != undefined)
    this.vector[this.i-1] = this.value
    else
    this.vector[0][this.i-1] = this.value
  }
}
//Criar um vetor
var NovoVetor = new Vector(5,[1,2,3,4,5])
//Ver Vetor
console.log(NovoVetor.vector)//[1, 2, 3, 4, 5]
//Pegar Elemento dentro do vetor
console.log(NovoVetor.get(3))//3
//Alterar Elemento dentro do vetor
NovoVetor.set(3,5)
//Ver Vetor
console.log(NovoVetor.vector)//[1, 2, 5, 4, 5]


class LinearAlgebra {
  sum(a, b) {
    this.a = a
    this.b = b
    if (b.rows >= a.rows) {
      this.rows = a.rows
    } else {
      this.rows = b.rows
    }
    if (b.cols >= a.cols) {
      this.cols = a.cols
    } else {
      this.cols = b.cols
    }
    this.elementos = [false]
    var aux = 0
    for (var i = 0; i < this.cols * this.rows - 1; i++) {
      this.elementos.push(false)
    }
    this.soma = new Matriz(this.rows, this.cols, this.elementos)
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        aux += a.getValue(i + 1, j + 1) + b.getValue(i + 1, j + 1)
        this.soma.setValue(i + 1, j + 1, aux)
        aux = 0
      }
    }
    return (this.soma.matriz)
  }
  times(a, b) {
    this.a = a
    this.b = b
    var aux = 0
    if (b.rows >= a.rows) {
      this.rows = a.rows
    } else {
      this.rows = b.rows
    }
    if (b.cols >= a.cols) {
      this.cols = a.cols
    } else {
      this.cols = b.cols
    }
    this.elementos = [false]
    for (var i = 0; i < this.cols * this.rows - 1; i++) {
      this.elementos.push(false)
    }
    this.multiplicacao = new Matriz(this.rows, this.cols, this.elementos)
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        aux += a.getValue(i + 1, j + 1) * b.getValue(i + 1, j + 1)
        this.multiplicacao.setValue(i + 1, j + 1, aux)
        aux = 0
      }
    }
    return (this.multiplicacao.matriz)
  }
  dot(a, b) {
    this.a = a
    this.b = b
    var aux = 0;
    if (a.cols == b.rows) {
      this.rows = a.rows
      this.cols = b.cols
    } else {
      this.rows = b.rows
      this.cols = a.cols
    }
    this.elementos = [false]
    for (var i = 0; i < this.cols * this.rows - 1; i++) {
      this.elementos.push(false)
    }
    this.multiplica = new Matriz(this.rows, this.cols, this.elementos)
    if (a.cols == b.rows) {
      for (var i = 0; i < a.rows; i++) {
        for (var j = 0; j < b.cols; j++) {
          aux = 0
          for (var k = 0; k < b.rows; k++) {
            aux += a.getValue(i + 1, k + 1) * b.getValue(k + 1, j + 1)
          }
          this.multiplica.setValue(i + 1, j + 1, aux)
        }
      }
    } else if (b.cols == a.rows) {
      for (var i = 0; i < b.rows; i++) {
        for (var j = 0; j < a.cols; j++) {
          aux = 0
          for (var k = 0; k < b.rows; k++) {
            aux += a.getValue(i + 1, k + 1) * b.getValue(k + 1, j + 1)
            console.log(aux)
          }
          this.multiplica.setValue(i + 1, j + 1, aux)
        }
      }
    }
    return (this.multiplica.matriz)
  }
}

let M = 10;

function PrintMatrix(a) {
  let n = a.length; // ordem
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) document.write(a[i][j] + " ");
    document.write("<br>");
  }
}

function PerformOperation(a) {
  let n = a.length;
  let i,
    j,
    k = 0,
    aux,
    flag = 0,
    m = 0;
  let pro = 0;

  for (i = 0; i < n; i++) {
    // loop entre linhas
    if (a[i][i] == 0) {
      // checagem de diagonal
      aux = 1;
      while (i + aux < n && a[i + aux][i] == 0) aux++; // procurar != 0 na coluna
      if (i + aux == n) {
        flag = 1; // infere o tipo de solução
        break;
      }
      for (j = i, k = 0; k <= n; k++) {
        //troca de linhas
        let temp = a[j][k];
        a[j][k] = a[j + aux][k];
        a[j + aux][k] = temp;
      }
    }

    for (j = 0; j < n; j++) {
      // Excluding all i == j
      if (i != j) {
        let p = a[j][i] / a[i][i];

        for (k = 0; k <= n; k++) a[j][k] = a[j][k] - a[i][k] * p;
      }
    }
  }
  return flag;
}

// define o resultado
function Solve(a, flag) {
  let n = a.length;
  document.write("Resultado: ");

  if (flag == 2) document.write("Infinitas soluções <br>");
  else if (flag == 3) document.write("Sistema Impossível <br>");
  // printando soluçoes dividindo as constantes por sua respectiva diagonal
  else {
    for (let i = 0; i < n; i++) document.write(a[i][n] / a[i][i] + " ");
  }
}

//checar tipo de existencia
function CheckConsistency(a, flag) {
  let n = a.length;
  let i, j;
  let sum;

  // flag == 2: Possui variável livre, infinitas soluções
  // flag == 3: sistema impoossível
  flag = 3;
  for (i = 0; i < n; i++) {
    sum = 0;
    for (j = 0; j < n; j++) sum = sum + a[i][j];
    if (sum == a[i][j]) flag = 2;
  }
  return flag;
}

// Driver code
let a = [
  [1, 2, 3],
  [2, 4, 6],
];

let flag = 0;


flag = PerformOperation(a);

if (flag == 1) flag = CheckConsistency(a, flag);

// Printing Final Matrix
document.write("Matriz Escalonada: <br>");
PrintMatrix(a);
document.write("<br>");

// Printing Solutions(if exist)
Solve(a, flag);
