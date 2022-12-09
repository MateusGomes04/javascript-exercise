const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

let notasBaixar1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixar1.push(notas(i));
  }
}

console.log(notasBaixar1);

notasBaixar2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notasBaixar2);

const notasBaixar3 = notas.filter((nota) => nota < 7);
console.log(notasBaixar3);
