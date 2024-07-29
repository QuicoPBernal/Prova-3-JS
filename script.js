var totalAlunos = parseInt(prompt("Digite o número total de estudantes na turma:"));
var somaNotas = 0;
var maiorNota = 0;
var menorNota = 100;
var i = 1;
while (i <= totalAlunos) {
  var nota = parseFloat(prompt("Digite a nota do aluno " + i + ":"));
  somaNotas += nota;
  if (nota > maiorNota) {
    maiorNota = nota;
  }
  if (nota < menorNota) {
    menorNota = nota;
  }
  i++;
}
var mediaTurma = somaNotas / totalAlunos;
console.log("A média da turma é: " + mediaTurma);
console.log("A maior nota da turma é: " + maiorNota);
console.log("A menor nota da turma é: " + menorNota);
