// Funcao forma literal
function fun1() {}

//armazenar em uma variavel
const fun2 = function () {};

//armazanar dentro de um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

//armazenar em um atributo de objetos
const obj = {};
obj.falar = function () {
  return "OPA";
};

//passar funcao como paran
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// Um funcao pode retornar/conter um funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
