function checkNumber(key) {
   return /^\d$/.test(key);
}


function showCustomMenu(sign, x, y) {
   var cm = document.getElementById("custommenu");
   if (sign) {
      cm.style.display = 'block';
       cm.style.visibility = 'visible';
   } else {
      cm.style.display = 'none';
       cm.style.visibility = 'hidden';
   }

   cm.style.left = x + 'px';
   cm.style.top = y + 'px';
}
let checker = false;
function doAction(actionType) {
   switch (actionType) {
       case "copy":
           //
           break;
       case "close":
           window.close();
           break;
       case "fontIncrease":
           document.body.style.fontSize = "20pt";
           break;
           case "fontDecrease":
            document.body.style.fontSize = "2pt";
            break;
        
       case "changeBkg":
         if(!checker) {
            document.body.style.background = "url('bg_chang.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
            checker = true;
        }
        else {
            document.body.style.background = "#ff838327";
            document.body.style.backgroundSize = "cover";
            checker = false;
        }
        break;
        
   }
}


function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function highlightMenuItem(item) {
   item.style.border = '1px solid white';
}

function resetMenuItem(item) {
   item.style.border = 'none';
}