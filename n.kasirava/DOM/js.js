/**
 * Created by Natalie on 4/27/2016.
 */
var currentElement;
currentElement = document.getElementById ('DOM');

createDOM();
addStyle();
checkActiveButtons();

function createDOM () {
  var firstItem = document.createElement('p');
  firstItem.innerHTML = 'Динамически формируемые списки';
  DOM.appendChild(firstItem);

  var randomNumber = createRandomNumber(2);
  alert(randomNumber);
  for (var i = 0; i < randomNumber; i++) {
    var ul = document.createElement('ul');
    DOM.appendChild(ul);
    if (createRandomNumber(2) % 2 == 0) {
      for (var j = 0; j < 3; j++) {
        var li = document.createElement('li');
        li.innerHTML = 'Элемент списка';
        ul.appendChild(li);
      }
    }
    else {
      var li = document.createElement('li');
      li.innerHTML = 'Вложенный список';
      ul.appendChild(li);
      ul.appendChild(createList());
    }
  }
}

function createList () {
  var ul = document.createElement('ul');
  for (var i = 0; i < 2; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Элемент вложенного списка';
    ul.appendChild(li);
  }
  return ul;
}

function next() {
  clearStyle();
  currentElement = currentElement.nextElementSibling;
  addStyle();
  checkActiveButtons();
}

function previous() {
  clearStyle();
  currentElement = currentElement.previousElementSibling;
  addStyle();
 checkActiveButtons();
}

function parent() {
  clearStyle();
  currentElement = currentElement.parentElement;
  addStyle();
  checkActiveButtons();
}

function child() {
  clearStyle();
  currentElement = currentElement.firstElementChild;
  addStyle();
  checkActiveButtons();
}

function checkActiveButtons () {
  enableButtons ();
  if (currentElement == document.getElementById ('DOM')) {
    disableButton('parent');
    disableButton('next');
  }
  if (currentElement.parentElement == null) {
  disableButton('parent');
  }
  if (currentElement.firstElementChild == null) {
      disableButton('child');
      }
  if (currentElement.nextElementSibling == null) {
    disableButton('next');

  }
  if (currentElement.previousElementSibling == null) {
    disableButton('previous');
  }
}

function enableButtons () {
  enableButton ('parent');
  enableButton ('child');
  enableButton ('next');
  enableButton ('previous');
}

function disableButton (id) {
  document.getElementById(id).disabled = true;
}

function enableButton (id) {
  document.getElementById(id).disabled = false;
}

function clearStyle () {
  currentElement.style.border = '';
  currentElement.style.backgroundColor = '';
}

function addStyle() {
  currentElement.style.border = '1px #00177b dotted';
  currentElement.style.backgroundColor = '#f5f5f5';
}

function createRandomNumber (number) {
   return Math.floor (Math.random()*number + 3);
}