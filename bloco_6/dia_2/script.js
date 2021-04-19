function addStatesOptions() {
  const stateForm = document.getElementById('state');
  const stateOpts = ['Selecione', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOpts.length; index += 1) {
    const option = document.createElement('option');
    option.innerHTML = stateOpts[index];
    stateForm.appendChild(option);
  }
}
addStatesOptions();

// Para validar a data se nao estivesse usando o tipo de input "type=date":
// indexOf() => o index do string dentro do parenteses;
// substr(start, length) => extrai valores da string comecando pelo index de 'start' com o tamanho 'length;

function validateData(date) {
  if (date.indexOf('/') === 2 || date.indexOf('/') === 5) {
    const day = date.substr(0, 2);
    const month = date.substr(3, 2);
    const year = date.substr(6, 4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputDate = document.querySelector('#date');
  let dateValue = inputDate.value;
  const userDate = validateData(dateValue);
  if (!userDate && dateValue.length) {
    inputDate.value = '';
    alert('Data inválida');
    return false;
  }
  return userDate;
}

function stop(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkData() !== false) {
      const divNew = document.createElement('div');
      divNew.className = 'div-resume';
      divNew.innerHTML = userInput;
      dataUser.appendChild(divNew);
    }
  }
}

const stopSubmit = document.querySelector('#submit-button')
stopSubmit.addEventListener('click', stop);