div.closest("#block");  //возвращает ближайший родительский элемент 


let name   = document.querySelector('#name');

inputOne.addEventListener('keypress', function(event) {
		if (event.key == 'Enter'){}
});


let inputAll = document.querySelectorAll('input');


let inputAll = document.querySelectorAll('input');

document.querySelector('')


for (let i = 0; i < inputAll.length; i++) {
	inputAll[i]
}

var attribute = element.getAttribute(attributeName); // возвр. значение атрибута

elem.dataset.productNumber //data-*

elem.classList.add/remove("class")  // доб класс

hasAttribute // проверяет есть ли атрибут

element.setAttribute(name, value);  утановить атрибут


///////////

let timerId = setInterval(() => {

	

	divSlider.innerHTML = texts[i];
	
	i++;
	
	if(i == 3){i =0}

//setInterval
}, 1000);
//////////////

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let field = document.querySelector('#field');

let caption = document.createElement('caption');

caption.innerHTML = ""
========
плюс + (один и более раз),
звездочка * (ноль или более раз) и
вопрос ? (ноль или один раз)
======
Являются спецсимволами: $ ^ . * + ? \ / {} [] () |
//Не являются спецсимволами: @ : , ' " ; - _ = < > % # ~ `& ! 

{5} - пять повторений, 
{2,5} – повторяется от двух до пяти (оба включительно)

Жадность можно ограничивать всем операторам повторения:
 и *, и ?, и {} - вот так: *?, ?? и {}?.

 ===========

 Команда \d означает цифру от 0 до 9. 
 Команда \w обозначает цифру, латинскую букву или знак подчеркивания.
  Команда \s обозначает пробел или пробельный символ: 
 пробел, перевод строки, табуляцию.
  Можно инвертировать значение команды, написав большую букву: 
  например, если \d - цифра, то \D - не цифра.

  ============
  /x[abc]x/ - мы говорим, что по краям должны стоять буквы икс, 
  а внутри - один символ: или 'a', или 'b', или 'c'.

  ===========

команда [^ab] будет искать все символы, кроме 'a' и 'b'.

=======
[а-яё].

Спецсимволы внутри [ ] становятся обычными символами

Группы символов \d, \D, \w, \W, \s, \S 
внутри [ ] будут обозначать именно группы

=============

если вам нужны квадратные скобки как символы
 внутри [ ] - то их нужно экранировать обратным слешем.

 ===
шляпка внутри [ ] делает отрицание,
будучи написанной в начале скобок.
 Значит, она является спецсимволом 
 внутри этих скобок. Чтобы получить шляпку как символ,
 нужно или заэкранировать ее, или убрать с первого места.
 ==
 Дефис - тоже спецсимвол внутри [ ] (а вот снаружи - нет).
  Если вам нужен сам дефис как символ - то поставьте его там,
  где он не будет воспринят как разделитель группы.
 ==
 Существуют специальные символы, которые 
 обозначают начало '^' или конец строки '$'.
  Давайте посмотрим их работу на примерах.
 ==//17
 команду '|', которая представляет 
 собой более мощный вариант
  'или' по сравнению с командой [ ].

  //==18

метод test, который проверяет,
 есть ли в строке хотя бы одно совпадение с регуляркой.
  Если есть - возвращается true, а если нет - false.
   Метод параметром принимает строку,
 а применяется к регулярке, вот так: регулярка.test


'a1b c34d x567z'.match(/\d/g)
.reduce(function(sum, elem) {return sum + +elem;}, 0); 

без g карманы в массиве

При работе с методом replace, если мы что-то положим
в карман в регулярке, то в строке замены мы можем вставить содержимое этого кармана написав знак доллара $ и номер кармана.
Например, $1 - первый карман, $2 - второй карман

//==22

В методе replace, помимо карманов с вашими номерами, всегда доступны также стандартные карманы:
 $& - всё найденное совпадение, $` и $' -часть строки до и        закр. => апостроф`


//==23

Содержимое карманов доступно по их номерам,
 перед которыми стоит обратный слеш. Например,
  первый карман будет доступен вот так:
 \1, второй карман вот так - \2, третий - \3 и так далее.

//==24

Скобки ( ) выполняют две функции - группировка символов и функцию кармана. 
А что делать, если нам нужно сгруппировать, но в карман не класть?

Для решения такой проблемы придуманы специальные
 несохраняющие скобки (?: ) - они группируют, но не кладут в карман.
//==25
Для решения задачи нужен способ сказать, что 'x' не следует заменять. Делается это с помощью специальных скобок (?= ), которые просто смотрят, но не забирают с собой.

Эти скобки называются позитивный просмотр вперед. Позитивный - так как 'x' (в нашем случае) должен быть - только тогда произойдет замена.

Давайте применим эти скобки для решения нашей задачи:

'aaax aaab'.replace(/aaa(?=x)/g, '!'); // вернет '!x aaab'

Негативный просмотр вперед
Есть и негативный просмотр вперед - (?! ) - он,
 наоборот, говорит, что чего-то должно не быть:

//26

let result = str.replace(/(\d+)\+(\d+)=/g, function(match0, match1, 
	match2) { 
	let sum = Number(match1) + Number(match2);
	return match0 + sum;
});

console.log(result);

//====коллекции  ...32 33

Способ первый
Самое очевидное, что можно сделать, это перебрать наш псевдомассив циклом, формируя в этом цикле новый массив:

let arr = [];

for (let elem of elems) {
	arr.push(elem);
}
Способ второй
Можно воспользоваться деструктуризацией:

let arr = [...elems];
Способ третий
Можно воспользоваться методом Array.from:

let arr = Array.from(elems);

//38 set
//Итераторы на JavaScript
//51-53 исключения
//54 терминал

//56
npm init

npm i jquery


