const choice = document.querySelector('#choice-sel');
const list = document.querySelector('.list-cal');
const calendar = document.querySelector('.calendar');
const para = document.querySelector('.para');

const calenderDays = (val, days) => {
  const para = document.querySelector('.para');
  list.textContent = '';
  calendar.appendChild(para);
  for (let i = 1; i <= days; i += 1) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
};

const completeChange = () => {
  const val = choice.value;
  let days;
  switch (val) {
    case 'January':
      days = 31;
      calenderDays(val, days);
      break;
    case 'February':
      days = 28;
      calenderDays(val, days);
      break;
    case 'March':
      days = 31;
      calenderDays(val, days);
      break;
    case 'April':
      days = 30;
      calenderDays(val, days);
      break;
    case 'May':
      days = 31;
      calenderDays(val, days);
      break;
    case 'June':
      days = 30;
      calenderDays(val, days);
      break;
    case 'July':
      days = 31;
      calenderDays(val, days);
      break;
    case 'August':
      days = 31;
      calenderDays(val, days);
      break;
    case 'September':
      days = 30;
      calenderDays(val, days);
      break;
    case 'October':
      days = 31;
      calenderDays(val, days);
      break;
    case 'November':
      days = 30;
      calenderDays(val, days);
      break;
    case 'December':
      days = 31;
      calenderDays(val, days);
      break;
    default:
      para.textContent = 'Please enter a valid month.';
  }
};

choice.addEventListener('change', completeChange);
