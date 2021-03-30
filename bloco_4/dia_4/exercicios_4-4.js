// Parte I

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

console.log(info);

for (let key in info) {
  console.log(info[key]);
};

for (let key in info) {
  console.log(key);
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let properties in info) {
  if (
    info[properties] === info.recorrente &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
};

// Parte II

function verifyPalindrome(word) {
  let isPalindrome = true;
  let arrayLetters = word.split('');
 
  for (let index = 0; index < arrayLetters.length; index += 1) {
    if (arrayLetters[index] !== arrayLetters[(arrayLetters.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(verifyPalindrome('desenvolvimento'));
console.log(verifyPalindrome('arara'));

function higherValue(array) {
  let indexOfHigher = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[indexOfHigher]) {
      indexOfHigher = index;
    }
  }
  return indexOfHigher;
}
 console.log(higherValue([2, 3, 6, 1, 10, 21]));

 function lowerValue(array) {
   let indexOfLower = 0;
   for (let index = 0; index < array.length; index += 1) {
    if (array[index] < array[indexOfLower]) {
      indexOfLower = index;
    }
   }
   return indexOfLower;
 }
 console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));

function longerWord(array) {
  let word = array[0];
  for(let index in array) {
    if (word.length < array[index].length) {
      word = array[index];
    }
  }
  return word;
}
console.log(longerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function mostRepeated(array) {
  let number = 0
}