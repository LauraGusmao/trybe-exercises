// Exercício 1
let a = 3;
let b = 7;

console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);

// Exercício 2
let num1 = 4;
let num2 = 9;

if (num1 > num2) {
  console.log (num1);
} else {
  console.log (num2);
}

// Exercício 3
let num3 = 11;

if (num1 > num2 && num1 > num3) {
  console.log (num1);
} else if (num2 > num1 && num2 > num3) {
  console.log (num2);
} else {
  console.log (num3);
}

// Execício 4
let num4 = -8;

if (num4 > 0) {
  console.log ('positive');
} else if (num4 < 0) {
  console.log ('negative');
} else {
  console.log ('zero');
}

// Exercício 5
let ang1 = 90;
let ang2 = 110;
let ang3 = 20;

let sumAng = ang1 + ang2 + ang3

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log('error');
} else if (sumAng === 180) {
  console.log(true);
} else {
  console.log(false);
}

// Evercício 6
let chessPiece = 'Knight'

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('Rei: uma casa para qualquer direção.');
    break;
  case 'queen':
    console.log('Rainha: quantas casas quiser para qualquer direção.');
    break;
  case 'bishop':
    console.log('Bispo: quantas casas quiser diagonalmente.');
    break;
  case 'knight':
    console.log('Cavalo: em forma de "L".');
    break;
  case 'rook':
    console.log('Torre: quantas casas quiser horizontal e verticalmente.');
    break;
  case 'pawn':
    console.log('Peão: uma casa para frente. Na primeira jogada pode duas casas.');
    break;
  default:
    console.log('Erro.')
}

// Exercício 7
let grade = -1

if (grade < 0 || grade > 100) {
  console.log('error');
} else if (grade >= 90) {
  console.log('A');
} else if (grade >= 80) {
  console.log('B');
} else if (grade >= 70) {
  console.log('C');
} else if (grade >= 60) {
  console.log('D');
} else if (grade >= 50) {
  console.log('E');
} else {
  console.log('F');
}

// Exercício 8
let num5 = 6;
let num6 = 3;
let num7 = 2;

if (num5 % 2 === 0 || num6 % 2 === 0 || num7 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercício 9
if (num5 % 2 !== 0 || num6 % 2 !== 0 || num7 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercício 10
let costPrice = 20;
let salePrice = 35;

if (costPrice >= 0 && salePrice >= 0) {
  let profit = (salePrice - (costPrice + costPrice*0.2))*1000;
  console.log(profit);
} else {
  console.log('Error');
}

// Exercício 11

let aliquotINSS;
let aliquotIR;

let grossSalary = 2200.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
