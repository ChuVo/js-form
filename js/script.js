let name = document.getElementById("name"),
    surname = document.getElementById("surname"),
    age = document.querySelector('#age'),
    nameInput = document.getElementsByTagName('input')[0],
    surnameInput = document.querySelectorAll('input')[1],
    ageInput = document.querySelectorAll('input')[2];

nameInput.addEventListener('input', () => {
  name.innerHTML = `Мое имя: ${nameInput.value}`;
});

surnameInput.addEventListener('input', () => {
  surname.innerHTML = `Моя фамилия: ${surnameInput.value}`;
});

ageInput.addEventListener('input', () => {
  if (ageInput.value.length > 3) {
    age.innerHTML = 'Подозрительно много';
  } else {
    if (ageInput.value == 12 || ageInput.value == 14) {
      age.innerHTML = `Мне ${ageInput.value} лет`;
    } else if (ageInput.value.slice(-1) == 2 || ageInput.value.slice(-1) == 4){
      age.innerHTML = `Мне ${ageInput.value} года`;
    } else {
      age.innerHTML = `Мне ${ageInput.value} лет`;
    }    
  }  
});
