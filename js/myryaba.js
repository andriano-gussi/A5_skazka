const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

//функция обрабатки полученных JSONданных
function updatingData(data) {
	//создаем массив для работы с полученными данными
	let newText = [];
	//записываем в объект данные из полей input
	const inputData = {
		var1: $("input[name=var1]").val(),
		var2: $("input[name=var2]").val(),
		var3: $("input[name=var3]").val(),
		var4: $("input[name=var4]").val(),
		var5: $("input[name=var5]").val(),
		var6: $("input[name=var6]").val(),
		speach: $("input[name=speach]").val()
		};
	//переписываем полученные JSONданные
	//построчно в массив
	data.text.forEach(function(item) {
		newText = newText + item + "<br>";
	});
	//меняем в массиве вставки текста в {...} на
	//соответствующие значения из полей
	for (key in inputData) {
		newText = newText.replace(
			new RegExp("{"+key+"}", 'g'),
			inputData[key]);
	};
	//передаем измененные данные из массива
	//в разметку HTML в соответствующем месте
	const p = document.createElement('p');
	p.innerHTML = newText;
	$(p).appendTo($('#result'));
};

//получаем по dataURL JSONданные и передаем
//для обработки в функцию updatingData
function gettingMessage() {
	$.getJSON(dataURL, updatingData);
	//скрываем на странице поля ввода и кнопку
	//"создать" после ее нажатия
	$('#messages').toggle(600);
	$('#button-fetch').toggle(600);
};
//при нажатии кнопки "создать" вызываем
//фунцию получения JSONданных
$('#button-fetch').on("click", gettingMessage);

//обновляем страницу
function update() {
	window.location.reload();
};
//при нажатии кнопки "обновить страницу"
//вызываем соответствующую функцию
$('#button-update').on("click", update);



