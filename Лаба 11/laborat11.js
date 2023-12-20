
//2
function zoomMap(zoom, imageId) {
    var karta = document.getElementById(imageId);
    var areas = document.querySelectorAll(`#${imageId} area`);
 
    for(var i = 0; i < areas.length; i++) {
        var coords = areas[i].coords.split(',');
        for(var j = 0; j < coords.length; j++) {
            coords[j] = Math.round(coords[j] * zoom);
        }
        areas[i].coords = coords.join(',');
    }
 
    karta.width = Math.round(karta.width * zoom);
    karta.height = Math.round(karta.height * zoom);
 }
 
 //1
 function editPassword(passwordId, messageId, minLength, maxLength) {
    var password = document.getElementById(passwordId);
    var message = document.getElementById(messageId);
    if (password.value.length < minLength) {
        message.innerText = 'Надійний пароль повинен містити не менше ' + minLength + ' символів';
        message.className = 'warning';
    } else if (password.value.length > maxLength) {
        message.innerText = 'Довжина паролю не повинна перевищувати ' + maxLength + ' символів';
        message.className = 'warning';
    } else {
        message.innerText = 'Ok';
        message.className = 'ok';
        return true;
    }
 }
 
 //3
 var streetsGal = ['Галицька', 'Ставропігійська', 'Краківська', 'Театральна', 'Вірменська'];
 var streetsShev = ['Чорновола', 'Остряниці', 'Замарстинівська', 'Топольна', 'Варшавська'];
 var streetsFran = ['Сахарова', 'Наукова', 'Княгині Ольги', 'В.Великого'];
 var streetsLych = ['Личаківська', 'Пекарська', 'Нечуя-Левицького', 'Зелена'];
 var streetsSykh = ['Хоткевича', 'Червоної Калини'];
 var streetsAll = [null, streetsGal, streetsFran, streetsLych, streetsSykh, streetsShev];
 function showStreets(regionIndex, selectId) {
    var streetsSelect = document.getElementById(selectId);
    clearSelect(streetsSelect);
    if (regionIndex < 0) {
        streetsSelect.style.visibility = 'hidden';
        return false;
    }
    streetsSelect.style.visibility = 'visible';
    if (regionIndex === 6) {
        showAllStreets();
    } else {
        for (var i = 0; i < streetsAll[regionIndex].length; i++) {
            var newStreet = new Option(streetsAll[regionIndex][i], streetsAll[regionIndex][i]);
            streetsSelect.add(newStreet, i);
        }
    }
 }
 function showAllStreets() {
    var streetsSelect = document.getElementById('streets');
    clearSelect(streetsSelect);
 
    // Злиття всіх вулиць з усіх регіонів
    var allStreets = [];
    for (var i = 1; i < streetsAll.length; i++) {
        if (streetsAll[i]) {
            allStreets = allStreets.concat(streetsAll[i]);
        }
    }
 
    // Сортування вулиць в алфавітному порядку
    allStreets.sort();
 
    // Додавання відсортованих вулиць до випадаючого списку
    for (var j = 0; j < allStreets.length; j++) {
        var newStreet = new Option(allStreets[j], allStreets[j]);
        streetsSelect.add(newStreet);
    }
 }
 
 function clearSelect(selectObject) {
     while (selectObject.length) {
         selectObject.remove(0);
     }
 }
 
 //pr
 function toggleButton() {
     var button = document.getElementById('myButton');
     var otherOptions = document.getElementById('otherOptions');
     
     if (otherOptions.selectedIndex !== 0) {
       button.disabled = false;
       // Додаємо обробник події для переадресації на index.html
       button.onclick = function() {
           window.location.href = 'index.html';
       };
   } else {
       button.disabled = true;
       // Знімаємо обробник події, щоб кнопка не переадресовувала при відсутності вибору
       button.onclick = null;
   }
 }
 
 //4
 
 function getTotalPrice() {
    var sum = 0;
    var boxes = document.getElementsByName('goods');
    var selectedCount = 0;
 
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            sum += parseFloat(boxes[i].value);
            selectedCount++;
        }
    }
 
    document.getElementById('price').innerText = selectedCount < 5 ? 'Виберіть мінімум 5 прапорців' : sum;
    displayMessage(selectedCount, sum);
 }
 
 function assignFunctionToCheckboxes() {
    var boxes = document.getElementsByName('goods');
 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = getTotalPrice;
    }
 }
 
 function displayMessage(selectedCount, sum) {
    var messageElement = document.getElementById('price');
 
    if (selectedCount < 5) {
        messageElement.innerText = 'Виберіть мінімум 5 прапорців';
        messageElement.style.color = "red";
    } else {
        messageElement.innerText = sum; // Use the passed sum parameter
        messageElement.style.color = "green";
    }
 }
 
 // Викликати цю функцію при завантаженні сторінки
 assignFunctionToCheckboxes();
 