document.getElementById('add-new-list').addEventListener('click', () => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Новый элемент';
    li.classList.add('list-item');
    ul.appendChild(li);
    document.getElementById('main-list').appendChild(ul);
});

document.getElementById('main-list').addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return;

    const action = document.querySelector('input[name="action"]:checked').value;
    const inputText = document.getElementById('input-text').value;
    const targetLi = event.target;

    switch (action) {
        case 'add-end':
            addListItem(targetLi, inputText);
            break;
        case 'insert':
            insertListItem(targetLi, inputText);
            break;
        case 'edit':
            editListItem(targetLi, inputText);
            break;
        case 'add-sublist':
            addSubList(targetLi, inputText);
            break;
        case 'delete':
            deleteListItem(targetLi);
            break;
    }
});

function addListItem(targetLi, text) {
    const ul = targetLi.parentNode;
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('list-item');
    ul.appendChild(li);
}

function insertListItem(targetLi, text) {
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('list-item');
    targetLi.parentNode.insertBefore(li, targetLi);
}

function editListItem(targetLi, text) {
    targetLi.textContent = text;
}

function addSubList(targetLi, text) {
    if (targetLi.querySelector('ul')) {
        alert('Этот элемент уже имеет вложенный список.');
        return;
    }
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('list-item');
    ul.appendChild(li);
    targetLi.appendChild(ul);
}

function deleteListItem(targetLi) {
    targetLi.remove();
}
