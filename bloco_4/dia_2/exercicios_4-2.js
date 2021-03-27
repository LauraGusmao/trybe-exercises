let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EX1
for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
// EX2
let sumNumbers = 0;
for (index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers);

// EX3
for (index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
let average = sumNumbers/numbers.length;
console.log(average);

// EX4
if (average > 20) {
  console.log('Valor maior que 20.');
} else {
  console.log('Valor menor ou igual a 20.');
}

// EX5
let higherNum = 0;
for (let index = 0; index < numbers.length; index+= 1) {
  if (numbers[index] > higherNum) {
    higherNum = numbers[index];
  }
}
console.log(higherNum);
  
// EX6
let oddNum = 0;
for (let index = 0; index < numbers.length; index+= 1) {
  if (numbers[index] % 2 !== 0) {
    oddNum += 1;
  }
}
if (oddNum > 0) {
  console.log(oddNum);
} else {
  console.log('Nenhum valor ímpar encontrado.');
}

// EX7
let lowerNum = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < lowerNum) {
    lowerNum = numbers[index];
  }
}
console.log(lowerNum);

// EX8
let array = [];
for (let index = 1; index <= 25; index += 1) {
  array.push(index)
}
console.log(array);

// EX9
let arrayBy2 = [];
for (let index = 0; index < array.length; index += 1) {
  arrayBy2.push(array[index]/2)
}
console.log(arrayBy2);

// BONUS
// 1
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);
// 2
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);
// 3
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index + 1]) {
    newNumbers.push(numbers[index]*numbers[index + 1]);
  } else {
    newNumbers.push(numbers[index]*2);
  }
}
console.log(newNumbers);
