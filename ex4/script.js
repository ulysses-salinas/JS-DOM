// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"


let button = document.getElementById("myButton");
let box = document.getElementsByClassName("box")
button.addEventListener('click', function(){
for (i = 0; i < box.length; i++)
    box[i].style.backgroundColor='blue'
   
     
})

