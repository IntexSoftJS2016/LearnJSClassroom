function myFunction() {
    createList();
    var buttonNextSibling = document.querySelector('.nextSibling');
    var buttonPreviousSibling = document.querySelector('.previousSibling');
    buttonPreviousSibling.disabled = true;
    var buttonFirstChild = document.querySelector('.firstChild');
    var buttonParent = document.querySelector('.parent');
    buttonParent.disabled = true;

    var currentItem = document.querySelector('body ul');
    currentItem.classList.add('active');

    buttonNextSibling.addEventListener('click', function(event) {
        nextSibling(currentItem, function(currentItemSibling) {
            buttonNextSibling.disabled = false;
            buttonPreviousSibling.disabled = false;
            currentItem.classList.remove('active');
            currentItemSibling.classList.add('active');
            currentItem = currentItemSibling;
            if(!currentItem.nextSibling) {
                buttonNextSibling.disabled = true;
            }
        });
    });

    buttonPreviousSibling.addEventListener('click', function(event) {
        previousSibling(currentItem, function(currentItemSibling) {
            if(currentItemSibling.previousSibling.className == 'folder' || currentItemSibling.previousSibling.className == "item") {
                buttonPreviousSibling.disabled = false;
            }else{
                buttonPreviousSibling.disabled = true;
            }
            buttonNextSibling.disabled = false;
            currentItem.classList.remove('active');
            currentItemSibling.classList.add('active');
            currentItem = currentItemSibling;
        }, function() {
            buttonPreviousSibling.disabled = true;
        });
    });

    buttonFirstChild.addEventListener('click',function (event) {
        firstChild(currentItem,function (currentItemChild) {
            buttonPreviousSibling.disabled = true;
            buttonNextSibling.disabled = false;
            buttonFirstChild.disabled = true;
            buttonParent.disabled = false;
            currentItem.classList.remove('active');
            currentItemChild.classList.add('active');
            currentItem = currentItemChild;
        });
    });

    buttonParent.addEventListener('click', function (event) {
        parent(currentItem, function (currentItemParent) {
            if(!currentItemParent.nextSibling) {
                buttonNextSibling.disabled = true;
            }else{
                buttonNextSibling.disabled = false;
            }
            buttonFirstChild.disabled = false;
            currentItem.classList.remove('active');
            currentItemParent.classList.add('active');
            currentItem = currentItemParent;
        });
    });
}

function parent(currentItem, onSuccessCallback) {
    if(currentItem.parentNode){
        onSuccessCallback(currentItem.parentNode);
    }
}


function firstChild(currentItem, onSuccessCallback) {
    if(currentItem.childNodes[1]){
        onSuccessCallback(currentItem.childNodes[1]);
    }
}


function nextSibling(currentItem, onSuccessCallback){
    if(currentItem.nextSibling && (currentItem.nextSibling.localName == "ul" || currentItem.nextSibling.localName == "li")) {
        onSuccessCallback(currentItem.nextSibling);
    }
}

function previousSibling(currentItem, onSuccessCallback, onFailureCallback){
    if(currentItem.previousSibling && (currentItem.previousSibling.localName == "ul" || currentItem.previousSibling.localName == "li")) {
        onSuccessCallback(currentItem.previousSibling);
    }
    else {
        onFailureCallback();
    }
}

function createList() {
    addButtons();
    addFolders();
    addItems();
}

function addFolders() {
    var foldersCount = Math.round(getRandomValue(2, 6));
    var bodyElement = document.querySelector('body');

    for (var i = 0; i < foldersCount; i++) {
        (function(index){
            var ulElement = document.createElement('ul');
            ulElement.className = 'folder';
            ulElement.dataset.id = index;
            var spanElement = document.createElement('span');
            spanElement.textContent = 'folder' + index;
            bodyElement.appendChild(ulElement);
            ulElement.appendChild(spanElement);
        })(i);
    }
}

function addItems() {
    var itemsCount = Math.round(getRandomValue(2, 6));
    var ulElements = document.getElementsByTagName('ul');

        for (var k = 0; k < ulElements.length; k++) {
            for (var i = 0; i < itemsCount; i++) {
                (function (index) {
                    var liElement = document.createElement('li');
                    liElement.className =  'item';
                    liElement.dataset.id = ulElements[k].dataset.id + '-' + index;
                    liElement.textContent = "item" + index;
                    ulElements[k].appendChild(liElement);
                })(i)
            }
        }
}

function addButtons() {
    var bodyElement =  document.querySelector('body');

    var buttonNextSibling = document.createElement('button');
    buttonNextSibling.className = "nextSibling";
    buttonNextSibling.textContent = "Next Sibling";
    bodyElement.appendChild(buttonNextSibling);

    var buttonPreviousSibling = document.createElement('button');
    buttonPreviousSibling.className = "previousSibling";
    buttonPreviousSibling.textContent = "Previous Sibling";
    bodyElement.appendChild(buttonPreviousSibling);

    var buttonFirstChild = document.createElement('button');
    buttonFirstChild.className = "firstChild";
    buttonFirstChild.textContent = "Get First Child";
    bodyElement.appendChild(buttonFirstChild);

    var buttonParent = document.createElement('button');
    buttonParent.className = "parent";
    buttonParent.textContent = "Get Parent";
    bodyElement.appendChild(buttonParent);
}

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}
