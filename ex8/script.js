/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

let listItems = document.getElementById("todo-list");

listItems.firstElementChild.addEventListener('click', function(){
 if (listItems.firstElementChild.style.textDecoration === 'line-through'){
    listItems.firstElementChild.style.textDecoration = 'none'
  }
 else (listItems.firstElementChild.style.textDecoration = 'line-through');
})

let deleteButton = document.getElementById("delete-button")
deleteButton.addEventListener('click', function(){
listItems.removeChild(listItems.firstElementChild)
listItems.removeChild(deleteButton)
})


let button = document.getElementById("add-button")

button.addEventListener('click', function(){
let textValue = document.getElementById("description").value;
let nodeList = document.getElementById("todo-list");
let nodeItem = document.createElement("li");
let nodeButton = document.createElement("button");
let nodeText = document.createTextNode(textValue);


nodeItem.appendChild(nodeText)
nodeList.appendChild(nodeItem)
nodeList.appendChild(nodeButton)
nodeItem.contentEditable = true;

nodeItem.addEventListener('click', function(){
  if (nodeItem.style.textDecoration === 'line-through'){
    nodeItem.style.textDecoration = 'none'
  }
 else (nodeItem.style.textDecoration = 'line-through');

})

nodeButton.appendChild(document.createTextNode('Delete Task'));
nodeButton.addEventListener('click', function(){
nodeList.removeChild(nodeItem)
nodeList.removeChild(nodeButton)
 
})


});
