var list = document.getElementById('list');
var add = document.getElementByld('addElem');
var listElement = document.getElementsByTagName('li')

add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + listElement.length;
	list.appendChild(element);
});
