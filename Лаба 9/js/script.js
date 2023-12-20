document.addEventListener("DOMContentLoaded", function() {
  function checkNumber() {
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const result = checkRealNumber(inputElement.value);
    resultElement.textContent = result;
  }

  function checkRealNumber(str) {
    let dotCount = 0;

    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);

      if ((charCode >= 48 && charCode <= 57) || str[i] === '.' || str[i] === ',') {
        if (str[i] === '.' || str[i] === ',') {
          dotCount++;
        }
      } else {
        return "Це не є дійсне число";
      }
    }

    if (dotCount > 1) {
      return "Це не є дійсне число";
    }

    return "Це є дійсне число";
  }

  document.getElementById("checkButton").addEventListener("click", checkNumber);
});

document.addEventListener("DOMContentLoaded", function() {
  floatingText();

  function floatingText() {
    let str = " Приступа Роман, студент ТНТУ";
    
    setTimeout(function () {
      animateText(str);
    }, 200);
  }

  function animateText(str) {
    str = str.substring(1, str.length);

    if (str.length) {
      document.getElementById("floatingText").innerText = str;

      setTimeout(function () {
        animateText(str);
      }, 200);
    } else {
      floatingText();
    }
  }
});

function checkEmail() {
 const inputElement = document.getElementById("emailInput");
 const resultElement = document.getElementById("resultat");

 const result = validateEmail(inputElement.value);
 resultElement.textContent = result;
}

function validateEmail(str) {
 if (str.indexOf("@") == -1) {
   return "Електронну адресу задано неправильно";
 }

 if (str.indexOf("@") != str.lastIndexOf("@")) {
   return "Електронну адресу задано неправильно";
 }

 if (str.charAt(0) == "@" || str.charAt(str.length - 1) == "@") {
   return "Електронну адресу задано неправильно";
 }

 const dotIndex = str.indexOf(".");
 if (dotIndex == -1) {
   return "Електронну адресу має містити хоча б одну крапку";
 }

 if (dotIndex <= str.indexOf("@")) {
   return "Крапка має бути після символу @";
 }

 if (dotIndex - str.indexOf("@") === 1) {
   return "Між символами @ та . повинен бути хоча б один символ";
 }

 return "Електронну адресу синтаксично правильно задано";
}

function processText() {
 const inputElement = document.getElementById("textInput");
 const resultElement = document.getElementById("result3");

 const inputText = inputElement.value;
 const result = removeConsecutiveSpaces(inputText);

 resultElement.textContent = "Результат: " + result;
}

function removeConsecutiveSpaces(inputString) {
 return inputString.replace(/\s+/g, ' ');
}

const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

function getCurrentDate() {
   const currentDate = new Date();
   const formattedCurrentDate = `Сьогодні ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
   displayCurrentDate(formattedCurrentDate, 1);
}

function getBirthDayOfWeek() {
   const birthDateInput = document.getElementById("birthdateInput2").value;
   const birthDate = new Date(birthDateInput);

   if (isNaN(birthDate.getTime())) {
       displayErrorMessage("Будь ласка, введіть коректну дату народження.", 2);
   } else {
       const birthDayOfWeek = daysOfWeek[birthDate.getDay()];
       displayBirthDayOfWeek(`Ви народилися в ${birthDayOfWeek}`, 2);
   }
}

function getPastDateAndDay(birthDate, yearsAgo) {
 const pastDate = new Date(birthDate);
 pastDate.setFullYear(pastDate.getFullYear() - yearsAgo);
 const pastDayOfWeek = daysOfWeek[pastDate.getDay()];

 const formattedDate = `${pastDate.getDate()}/${pastDate.getMonth() + 1}/${pastDate.getFullYear()}`;
 const message = `${yearsAgo} років тому, був ${pastDayOfWeek}`;

 return { date: formattedDate, message: message };
}

function getPastDatesAndDays() {
 const birthDateInput = document.getElementById("birthdateInput3").value;
 const birthDate = new Date(birthDateInput);

 if (isNaN(birthDate.getTime())) {
     displayErrorMessage("Будь ласка, введіть коректну дату народження.", 3);
 } else {
     const pastDatesAndDays = [
         getPastDateAndDay(birthDate, 10),
         getPastDateAndDay(birthDate, 12),
         getPastDateAndDay(birthDate, 25),
         getPastDateAndDay(birthDate, 38)
     ];

     displayPastDatesAndDays(pastDatesAndDays, 3);
 }
}

function getFutureBirthday() {
   const birthDateInput = document.getElementById("birthdateInput4").value;
   const birthDate = new Date(birthDateInput);
   if (isNaN(birthDate.getTime())) {
       displayErrorMessage("Будь ласка, введіть коректну дату народження.", 4);
   } else {
       const futureDate = new Date(birthDate);
       futureDate.setFullYear(futureDate.getFullYear() + 3);
       const futureDayOfWeek = daysOfWeek[futureDate.getDay()];
       displayFutureBirthday(`Через три роки, ${futureDate.getDate()}/${futureDate.getMonth() + 1}/${futureDate.getFullYear()} буде ${futureDayOfWeek}`, 4);
   }
}

function displayCurrentDate(message, containerNumber) {
   const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
   resultContainer.innerHTML = `<p>${message}</p>`;
}

function displayBirthDayOfWeek(message, containerNumber) {
   const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
   resultContainer.innerHTML = `<p>${message}</p>`;
}

function displayPastDatesAndDays(messages, containerNumber) {
   const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
   resultContainer.innerHTML = messages.map(item => `<p> ${item.date}, ${item.message}</p>`).join("");
}

function displayFutureBirthday(message, containerNumber) {
   const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
   resultContainer.innerHTML = `<p>${message}</p>`;
}

function displayErrorMessage(message, containerNumber) {
   const resultContainer = document.getElementById(`resultContainer${containerNumber}`);
   resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}

function calculateTimeInterval() {
  const hourInput1 = document.getElementById("hourInput1").value;
  const minuteInput1 = document.getElementById("minuteInput1").value;
  const hourInput2 = document.getElementById("hourInput2").value;
  const minuteInput2 = document.getElementById("minuteInput2").value;

  if (isNaN(hourInput1) || isNaN(minuteInput1) || isNaN(hourInput2) || isNaN(minuteInput2)) {
    displayResult5("Будь ласка, введіть коректні значення для годин і хвилин.");
    return;
  }

  const hour1 = parseInt(hourInput1, 10);
  const minute1 = parseInt(minuteInput1, 10);
  const hour2 = parseInt(hourInput2, 10);
  const minute2 = parseInt(minuteInput2, 10);

  if (hour1 < 0 || hour1 > 23 || minute1 < 0 || minute1 > 59 || hour2 < 0 || hour2 > 23 || minute2 < 0 || minute2 > 59) {
    displayResult5("Будь ласка, введіть коректні значення для годин і хвилин (0-23 годин, 0-59 хвилин).");
    return;
  }

  const time1 = hour1 * 60 + minute1;
  const time2 = hour2 * 60 + minute2;
  const interval = Math.abs(time2 - time1);

  const intervalHours = Math.floor(interval / 60);
  const intervalMinutes = interval % 60;

  displayResult5(`Інтервал між часом 1 та часом 2: ${intervalHours} годин ${intervalMinutes} хвилин`);
}

function displayResult5(message) {
 const resultElement = document.getElementById("result5");
 resultElement.textContent = message;
}

function isNumeric(inputValue) {
 return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
}

function checkNumericValue() {
 const numericInputValue = document.getElementById("numericInput").value;
 if (isNumeric(numericInputValue)) {
   displayResult6("Це число!");
 } else {
   displayResult6("Це не число.");
 }
}

function displayResult6(message) {
 const resultElement = document.getElementById("result6");
 resultElement.textContent = message;
}

function showNumberRepresentations() {
 const birthdateInput = document.getElementById("birthdateInput7").value;
 if (!birthdateInput) {
   alert("Будь ласка, введіть коректну дату народження.");
   return;
 }
 const birthDate = new Date(birthdateInput);
 const day = birthDate.getDate();
 const month = birthDate.getMonth() + 1;
 const year = birthDate.getFullYear();
 const sum = day + month + year;
 const decimalRepresentation = sum.toString(10);
 const binaryRepresentation = sum.toString(2);
 const hexadecimalRepresentation = sum.toString(16);
 const resultContainer = document.getElementById("resultContainer7");
 resultContainer.innerHTML = `
   <p>Десяткова система: ${decimalRepresentation}</p>
   <p>Двійкова система: ${binaryRepresentation}</p>
   <p>Шістнадцяткова система: ${hexadecimalRepresentation}</p>
 `;
}

function calculateHypotenuse() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);

  if (isNaN(sideA) || isNaN(sideB)) {
    alert("Будь ласка, введіть числові значення для обох катетів.");
    return;
  }

  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2).toFixed(2);

  const resultElement = document.getElementById("result8");
  resultElement.textContent = `Довжина гіпотенузи: ${hypotenuse}`;
}
