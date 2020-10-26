let ul;
let newItemForm;
let shoppingList = [];

document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById('shoppingList');
    inputError = document.getElementById('inputError');
    newItemForm = document.getElementById('newItemForm');

    newItemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target.elements[0];
        
        if (input.value.length > 2 && !input.value.startsWith(' ')) {
            addListItem(input.value);
            input.value = '';
            input.classList.remove('input-danger');
            inputError.innerText = '';
        } else {
            inputError.innerText = 'Nazwa nie spełnia kryteriów';
            input.classList.add('input-danger');
        }   
    })
    
    for (let item of shoppingList) {
        addListItem(item);
    }
});

function addListItem(item) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
};




