const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const sex = document.getElementById('sex');
const information = document.getElementById('information');

function whichCenturyAndMonth(monthNumber) {
  const numberOfMonth = Number(monthNumber);
  if (92 >= numberOfMonth && numberOfMonth >= 81) {
    return ('18' + (numberOfMonth - 80));
  } else if (12 >= numberOfMonth && numberOfMonth >= 1) {
    return ('19' + numberOfMonth);
  } else if (32 >= numberOfMonth && numberOfMonth >= 21) {
    return ('20' + (numberOfMonth - 20));
  } else if (52 >= numberOfMonth && numberOfMonth >= 41) {
    return ('21' + (numberOfMonth - 40));
  } else if (72 >= numberOfMonth && numberOfMonth >= 61) {
    return ('22' + (numberOfMonth - 60));
  } 
};
function controlSum(stringNumber) {
  const sum =
    Number(stringNumber[0]) * 9 +
    Number(stringNumber[1]) * 7 +
    Number(stringNumber[2]) * 3 +
    Number(stringNumber[3]) * 1 +
    Number(stringNumber[4]) * 9 +
    Number(stringNumber[5]) * 7 +
    Number(stringNumber[6]) * 3 +
    Number(stringNumber[7]) * 1 +
    Number(stringNumber[8]) * 9 +
    Number(stringNumber[9]) * 7;
  return (sum % 10 === Number(stringNumber[10]));
}
function buttonClick() {
  const input = document.getElementById('input').value;
  const regex = /^[0-9]{11}$/g;
  if (!input.match(regex) || !controlSum(input)) {
    information.style.display = 'inline';
    day.innerText = '';
    month.innerText = '';
    year.innerText = '';
    sex.innerText = '';
  } else {
    const centuryAndMonth = whichCenturyAndMonth(input.slice(2, 4));
    day.innerText = input[4] + input[5];
    month.innerText = centuryAndMonth.slice(2, 4);
    year.innerText = centuryAndMonth.slice(0, 2) + input[0] + input[1];
    if (input[9] % 2 === 1) {
      sex.innerText = 'Male';
    } else {
      sex.innerText = 'Female';
    }
    information.style.display = 'none';
  }
}

let button = document.getElementById('button');
button.addEventListener('click', buttonClick);
