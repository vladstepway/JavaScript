var input_text = [];
var option_age = [];
var radio_exhibit = [];
var checkbox_brand = [];
var input_email = [];
var comment = [];
var size = 0;

//var regExpUserName = /^[a-zA-Zа-яА-Я' ']+$/g;




function validateForm() {
	//if (!form.username.value.match(regExpUserName)) {
	if (form.username.value === "") {
		alert("Вы не правильно ввели имя");
		return false
	}
	//	alert(form.username.value.match(regExpUserName));
	if ((form.brand[0].checked === false) && (form.brand[1].checked === false) && (form.brand[2].checked === false) && (form.brand[3].checked === false) && (form.brand[4].checked === false) && (form.brand[5].checked === false) &&
		(form.brand[6].checked === false)) {
		alert("Пожалуйста, выберите марку вашего смартфона!");
		return false;
	}
	if (form.useremail.value == "") {
		alert("Вы не ввели e-mail");
		return false
	}

	var data = {
		name: form.username.value,
		age: form.age.value,
		smartphone: form.smartphone.value,
		brands: [],
		email: form.useremail.value,
		comment: form.comment.value
	};
}

function showInfo() {
	input_text[size] = document.form.username.value;

	checkbox_brand[size] = [];

	var selected = document.getElementById("age"); // Получаем наш список
	var elements = selected.options[selected.selectedIndex].text;
	option_age[size] = elements;

	elements = document.form.smartphone;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked == true) {
			radio_exhibit[size] = elements[i].value;
			break;
		}
	}

	elements = document.form.brand;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked == true) {
			checkbox_brand[size][checkbox_brand[size].length] = elements[i].value;

		}
	}

	input_email[size] = document.form.useremail.value;
	comment[size] = document.form.comment.value;

	html = "<p align=\"center\"><select>";
	for (var i = 0; i <= size; i++) {
		html += "<optgroup><option>" + input_text[i] + "</option></optgroup>";
	}
	html += "</select></p><br>";


	html += "<br>" +
		"<table border=\"1\" id='tabl'>" + "<tr>" + "<td>" + "Имя" +
		"</td>" + "<td>" + "Возраст" + "</td>" +
		"<td>" + "Частота посещения выставок смартфонов" + "</td>" +
		"<td>" + "Предпочитаемый(ые) марка(и) смартфона" + "</td>" +
		"<td>" + "email" + "</td>" +
		"<td>" + "Комментарий" + "</td>" + "</tr>";
	for (var i = 0; i <= size; i++) {
		html += "<tr>" + "<td>" + input_text[i] + "</td>";
		html += "<td>" + option_age[i] + "</td>" + "<td>" + radio_exhibit[i] + "</td>" + "<td>";
		for (var j = 0; j < checkbox_brand[i].length; j++) {
			html += checkbox_brand[i][j];
			if (j == 0) {
				html += ", ";
			} else {
				if (j == checkbox_brand[i].length) {
					html += " ";
				} else html += ", "
			}

		}
		html += "</td>" + "<td>" + input_email[i] + "</td>"
		html += "</td>" + "<td>" + comment[i] + "</td>"

	}
	html += "</td>" + "</tr>" + "</table>";
	var newWindow = window.open('about::blank', 'Результаты опроса');
	newWindow.document.write(
		'<DOCTYPE html><html><head> <link rel="stylesheet" type="text/css" href="../css/style.css"><script src="../js/result.js"></script></head>' +
		'<body><div><header > Результаты опроса: </header></div><div>');
	newWindow.document.write(html);
	newWindow.document.write('<br><br><p align="center"><input class="button" type="button" value="Закрыть окно" onClick="closeWindow()">&emsp;<input class="button" type="button" value="Главная" onClick=\'location.href="index.html"\'"></p></div></div></body></html>');
	size += 1;
}

function closeWindow() {
	var thisWindow = window.close();
}
