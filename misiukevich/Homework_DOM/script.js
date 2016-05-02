let currentElement = document.getElementById ('tree');
const mainElement = document.getElementById ('tree');


generateTree();
addStyle();
updateButtons();

function generateTree() {
   for (let i = 0; i < 3; i++) {
     currentElement.appendChild(generateRandomChild(getRandomNumber()));
   }
}

function generateRandomChild(randomNumber) {
  const ul = document.createElement('ul');
  if(randomNumber % 2 === 0) {
    const li = document.createElement('li');
    li.innerHTML = 'Вложенные элементы';
    ul.appendChild(li);
    ul.appendChild(generateList());
    return ul;
  }
  else return ul.appendChild(generateList());
}

function generateList() {
  const ul = document.createElement('ul');
  for(let i = 0; i < getRandomNumber(); i++) {
    const li = document.createElement('li');
    li.innerHTML = 'Элемент списка';
    ul.appendChild(li);
  }
  return ul;
}

function getRandomNumber() {
  return Math.floor((Math.random() * 4) + 1);
}

document.getElementById('parent').onclick = () => {
  buttonAction(currentElement.parentElement);
};

document.getElementById('previous').onclick = () => {
  buttonAction(currentElement.previousElementSibling);
};

document.getElementById('next').onclick = () => {
  buttonAction(currentElement.nextElementSibling);
};

document.getElementById('child').onclick = () => {
  buttonAction(currentElement.firstElementChild);
};

function buttonAction(subElement) {
  clearStyle();
  currentElement = subElement;
  addStyle();
  updateButtons();
}

function updateButtons() {
  enableButtons();
  if (currentElement == mainElement) {
    disableButton('parent');
    disableButton('next');
  }
  if (currentElement.parentElement === null) {
    disableButton('child');
  }
  if (currentElement.firstElementChild === null) {
    disableButton('child');
  }
  if (currentElement.nextElementSibling === null) {
    disableButton('next');
  }
  if (currentElement.previousElementSibling === null) {
    disableButton('previous');
  }
}

function enableButtons() {
  enableButton('parent');
  enableButton('child');
  enableButton('next');
  enableButton('previous');
}

function disableButton(id) {
  document.getElementById(id).disabled = true;
}

function enableButton(id) {
  document.getElementById(id).disabled = false;
}

function clearStyle() {
  currentElement.style.border = '';
  currentElement.style.backgroundColor = '';
}

function addStyle() {
  currentElement.style.borderLeft = '1px black solid';
  currentElement.style.backgroundColor = 'grey';
}
