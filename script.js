var text = document.getElementById("userInput");
var button = document.getElementById("button");
var list = document.getElementById('list');
var count = 0;//unique id for list items

//toggles between an item being crossed out
function doneToggle(id) 
{
	try {
		document.getElementById(id).classList.toggle("done");
	}
	catch(error) {}
	//Will still get called even if the delete
	//button is pressed since it's inside li
}

function deleteItem(id)
{
	var toDelete = document.getElementById(id);
	toDelete.parentElement.removeChild(toDelete);
}

function addListitem(val)
{
	//create all elements
	var newItem = document.createElement('li');
	var newItemPos = count++;
	var button = document.createElement('button');
	var id = 'li' + newItemPos;

	//set their attributes and events
	newItem.setAttribute("id", id);
	newItem.setAttribute("class", "myList");

	newItem.onclick = function() { doneToggle(id) };
	newItem.innerHTML = val;
	
	button.innerHTML = "Delete";
	button.onclick = function() {deleteItem(id)};

	//add to dom
	newItem.appendChild(button);
	list.appendChild(newItem);
}

function addListItem()
{
	if(text.value.length > 0)
	{
		addListitem(text.value);
		text.value = "";
	}
	text.focus();
}

button.addEventListener("click", addListItem);

text.addEventListener("keypress", function(event)
{
	if(event.keyCode === 13)
	{
		addListItem();
	}
});

addListitem('Apple');
addListitem('Carrot');
addListitem('Banana');
addListitem('Dog');

text.focus();