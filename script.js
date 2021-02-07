let addbutton = document.getElementById('add')
let todocontainer = document.getElementById('todocontainer')
let inputField = document.getElementById('inputbox');
let checkboxx = document.getElementById('kom')
let count = 0;

addbutton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecorationLine = 'line-through'

    })
    
})
