function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayListItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayListItem.innerHTML = day;
      dayListItem.className = 'day holiday'
      monthDays.appendChild(dayListItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayListItem.innerHTML = day;
      dayListItem.className = 'day friday'
      monthDays.appendChild(dayListItem);  
    } else if (day === 25) {
      dayListItem.innerHTML = day;
      dayListItem.className = 'day holiday friday'
      monthDays.appendChild(dayListItem);
    } else {
      dayListItem.innerHTML = day;
      dayListItem.className = 'day'
      monthDays.appendChild(dayListItem);
    }
  };
};

createDaysOfTheMonth();

function createButtonHolidays(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.id = newButtonID;
  newButton.innerHTML = buttonName;
  buttonContainer.appendChild(newButton);
};

createButtonHolidays('Feriados');

function holidaysBackground() {
  let getHolidaysButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let holidaysBackgroundColor = 'rgb(238,238,238)';
  let resetHolidays = 'green';

  getHolidaysButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === resetHolidays) {
        getHolidays[index].style.backgroundColor = holidaysBackgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = resetHolidays;
      }
    }
  })
};

holidaysBackground();