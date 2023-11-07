alert("cat");

var background = document.querySelector('body');
background.style.backgroundColor = "lightyellow";
background.style.fontSize = "21px";



const list = document.querySelector('#list')
const form = document.querySelector('#addToList')
const input = document.querySelector('#item')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const toDoValue = input.value; 

  const newListItem = document.createElement('li');

  const newSpan = document.createElement('span');
  newSpan.innerText = toDoValue;
  newListItem.appendChild(newSpan);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = ("Delete");

  deleteBtn.addEventListener('click', function(event){
  const btn = event.target;
  const parent = btn.parentNode;

  parent.remove();
})

newListItem.appendChild(deleteBtn);

list.appendChild(newListItem);

input.value = '';
input.focus();
})