 var increase = 100;

 function moveCursor(fromBox, toBox) {
     var length = fromBox.value.length;
     var maxLength = fromBox.getAttribute("maxlength");
     if (length == maxLength) {
         document.getElementById(toBox).focus();

     }

 }

 function changeInput() {
     var inputs, index;
     inputs = document.getElementsByTagName('input');
     increase += 15
     for (index = 0; index < inputs.length; index++) {
         inputs[index].style.width = increase + "px";
     }
 }

 function showMessage() {
     document.getElementById("text1").innerHTML = "Заполните поле!";
     document.getElementById("text2").innerHTML = "Заполните поле!";
     document.getElementById("text3").innerHTML = "Заполните поле!";
 }

 function openModalWindow(){
   
 }
