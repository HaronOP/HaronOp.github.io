//1
function testCellPhoneNumber(str) {
   if (!str.length) {
       throw new Error("Номер мобільного телефону задано некоректно");
   }

   var cellPhoneTemplate = /^8?((063)|(093)|(098))[0-9]{7}$/;
   
   str = str.replace(cellPhoneTemplate, "");

   if (str !== "") {
       throw new Error("Номер мобільного телефону задано некоректно");
   }
}


function checkPhoneNumber1() {
   var phoneNumber = document.getElementById("phoneNumberInput").value;
   var outputDiv = document.getElementById("output");

   try {
       testCellPhoneNumber(phoneNumber);
       outputDiv.innerHTML = "Номер мобільного телефону введено коректно";
       outputDiv.style.color = "green";
   } catch (error) {
       outputDiv.innerHTML = error.message;
       outputDiv.style.color = "red";
   }
}

//2
function testLvivPhoneNumber(str) {
   if (!str.length) {
       throw new Error("Номер телефону задано некоректно");
   }

   // Заміняємо всі символи, що не є цифрами, дефісами або пробілами
   var cleanedNumber = str.replace(/[^\d- ]/g, '');

   // Регулярний вираз для перевірки львівського телефонного номера
   var lvivPhoneRegex = /^(\(032\)|032)?[\d- ]{7,10}$/;

   if (!lvivPhoneRegex.test(cleanedNumber)) {
       throw new Error("Номер телефону задано некоректно");
   }
}

function checkPhoneNumberL() {
   var phoneNumber = document.getElementById("phoneNumberInputL").value;
   var outputDiv = document.getElementById("outputL");

   try {
       testLvivPhoneNumber(phoneNumber);
       outputDiv.innerHTML = "Номер телефону введено коректно";
       outputDiv.className = "success";
   } catch (error) {
       outputDiv.innerHTML = error.message;
       outputDiv.className = "error";
   }
}


//3
function removeRedundantSpaces(text_for_Editing) {
   var extraSpaces = /\s{2,}/g;
   return text_for_Editing.replace(extraSpaces, " ");
}

function removeSpaces() {
   var inputElement = document.getElementById("myInput");
   inputElement.value = removeRedundantSpaces(inputElement.value);
}

//4
function clearTextFromHTMLTags() {
   var editorContent = document.getElementById('editor').value;
   var tagTemplate = /<\/?[a-zA-Z]{1,}[^>]*>/g;
   var clearedText = editorContent.replace(tagTemplate, '');
   document.getElementById('editor').value = clearedText;
}

//5
function checkWholePositiveNumber(str) {
   if (!str.trim()) {
       throw new Error("Це не є дійсне натуральне число!");
   }

   var re = /[^0-9]/g;
   str = str.replace(re, "a");

   if (str.indexOf("a") !== -1) {
       throw new Error("Це не є дійсне натуральне число!");
   }
}

function checkNumber() {
   var numberInput = document.getElementById("numberInput").value;
   var resultElement = document.getElementById("resultN");

   try {
       checkWholePositiveNumber(numberInput);
       resultElement.textContent = "Число є дійсним.";
   } catch (error) {
       resultElement.textContent = error.message;
   }
}

//6
function checkEmail() {
   var emailInput = document.getElementById("emailInput").value;
   var resultElement = document.getElementById("resultE");

   if (!emailInput.trim()) {
       resultElement.textContent = "Некоректна електронна адреса!"; /* Якщо рядок пустий, то він не є електронною адресою */
       return;
   }

   var emailRegex = /^[a-zA-Z_.]+@[a-zA-Z_]+\.[a-zA-Z_]+$/;
   var atIndex = emailInput.indexOf("@");

   if (emailRegex.test(emailInput) && atIndex !== -1 && atIndex < emailInput.lastIndexOf(".") && emailInput.lastIndexOf(".") !== emailInput.length - 1) {
       resultElement.textContent = 'Коректна електронна адреса!';
   } else {
       resultElement.textContent = "Некоректна електронна адреса!";
   }
}

//2
function changePasswordStyle() {
   var passwordInput = document.getElementById("passwordInput");

   passwordInput.style.backgroundColor = "red";
   passwordInput.style.color = "white";
   passwordInput.style.fontSize = "10pt";
   passwordInput.style.height = "28px";
}

//3
function hideRows() {
   var table = document.getElementById("myTable");

   // Перевірка наявності рядків перед приховуванням
   if (table.rows.length >= 3) {
       table.rows[0].style.display = "none"; // Приховати перший рядок
       table.rows[2].style.visibility = "hidden"; // Приховати третій рядок
   }
}

//4
// Змінена функція checkConditions()
function checkConditions() {
   var password1 = document.getElementById("password1").value;
   var password2 = document.getElementById("password2").value;
   var text = document.getElementById("text").value;
   var dropdown = document.getElementById("dropdown").value;
   var submitButton = document.getElementById("submitButton");

   if (password1 !== "" && password1 === password2 && text !== "" && dropdown !== "0") {
       // Змінена частина: активація кнопки та перенаправлення на index.html
       submitButton.disabled = false; // Активувати кнопку
       submitButton.classList.remove("inactive-button");
       submitButton.addEventListener("click", function() {
           // Перенаправлення на головне меню (index.html)
           window.location.href = "index.html";
       });
   } else {
       submitButton.disabled = true; // Деактивувати кнопку
       submitButton.classList.add("inactive-button");
       // Видалення обробника подій, щоб не було перенаправлення, якщо кнопка не активована
       submitButton.removeEventListener("click", function() {
           window.location.href = "index.html";
       });
   }
}
// Встановлення обробника подій для полів вводу
document.getElementById("password1").addEventListener("input", checkConditions);
document.getElementById("password2").addEventListener("input", checkConditions);
document.getElementById("text").addEventListener("input", checkConditions);
document.getElementById("dropdown").addEventListener("change", checkConditions);

//6
function isValidPhoneNumber(phoneNumber) {
   const cleanedNumber = phoneNumber.replace(/\D/g, '');
   const phoneRegex = /^(\+38)?(0\d{9})$/;

   if (phoneRegex.test(cleanedNumber)) {
       const pureNumber = cleanedNumber.replace(/^(\+38)?(0)/, '');
       if (
           pureNumber.startsWith('50') ||
           pureNumber.startsWith('66') ||
           pureNumber.startsWith('67') ||
           pureNumber.startsWith('68') ||
           pureNumber.startsWith('96') ||
           pureNumber.startsWith('97') ||
           pureNumber.startsWith('98') ||
           pureNumber.startsWith('99') ||
           pureNumber.startsWith('39') ||
           pureNumber.startsWith('73') ||
           pureNumber.startsWith('91') ||
           pureNumber.startsWith('92') ||
           pureNumber.startsWith('93') ||
           pureNumber.startsWith('94') ||
           pureNumber.startsWith('95')
       ) {
           return true;
       }
   }

   return false;
}

function checkPhoneNumber() {
   const phoneNumberInput = document.getElementById("phoneNumberU");
   const resultContainer = document.getElementById("resultU");
   const phoneNumber = phoneNumberInput.value;

   if (isValidPhoneNumber(phoneNumber)) {
       resultContainer.textContent = 'Номер є коректним мобільним телефоном.';
   } else {
       resultContainer.textContent = 'Номер не є коректним мобільним телефоном.';
   }
}

//7
function isValidLvivPostalCode(postalCode) {
   const cleanedCode = postalCode.replace(/\D/g, '');
   const postalCodeRegex = /^(79[0-4]\d{2}|79501)$/;
   return postalCodeRegex.test(cleanedCode);
}
function checkPostalCode() {
   const postalCodeInput = document.getElementById("postalCode");
   const resultContainer = document.getElementById("resultC");
   const postalCode = postalCodeInput.value;
   if (isValidLvivPostalCode(postalCode)) {
       resultContainer.textContent = 'Поштовий індекс є коректним для Львова.';
   } else {
       resultContainer.textContent = 'Поштовий індекс не є коректним для Львова.';
   }
}

//9
function removeHTMLComments(text) {
   var commentRegex = /<!--[\s\S]*?-->/g;
   return text.replace(commentRegex, '');
}

function removeComments() {
   var textarea = document.getElementById("textInputCom");
   var inputText = textarea.value;

   var result = removeHTMLComments(inputText);
   textarea.value = result;
}

//11
function removeWhitespace(str) {
   return str.trim();
}
function trimSpaces() {
   var inputElement = document.getElementById("textInputP");
   var outputElement = document.getElementById("outputP");

   var inputString = inputElement.value;

   var result = removeWhitespace(inputString);

   outputElement.textContent = "Результат: " + result;
}

//12
function isValidYearRepresentation(yearString) {
   var yearRegex = /^(19\d\d|20[0-9]{2})$/;
   return yearRegex.test(yearString);
}
function checkYear() {
   var yearInput = document.getElementById("yearInput").value;
   var resultContainer = document.getElementById("resulY");
   if (isValidYearRepresentation(yearInput)) {
       resultContainer.textContent = yearInput + " є представленням року в межах від 1900 до 2099.";
   } else {
       resultContainer.textContent = yearInput + " не є представленням року в межах від 1900 до 2099.";
   }
}