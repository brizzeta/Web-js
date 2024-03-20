const bookList = document.querySelector('ul');
let lastClickedIndex = -1;
let ctrlPressed = false;

function handleItemClick(event) {
    const clickedIndex = Array.from(bookList.children).indexOf(event.target);
    const isCtrlPressed = event.ctrlKey;
    const isShiftPressed = event.shiftKey;

    if (isCtrlPressed) {
        event.target.classList.toggle('selected');
        ctrlPressed = true;
    } else if (isShiftPressed && lastClickedIndex !== -1) {
        const start = Math.min(lastClickedIndex, clickedIndex);
        const end = Math.max(lastClickedIndex, clickedIndex);
        for (let i = 0; i < bookList.children.length; i++) {
            if (i >= start && i <= end) {
                bookList.children[i].classList.add('selected');
            }
        }
    } else {
        Array.from(bookList.children).forEach((book, index) => {
            if (index === clickedIndex) {
                book.classList.toggle('selected');
            } else {
                book.classList.remove('selected');
            }
        });
    }
    lastClickedIndex = clickedIndex;
}

bookList.addEventListener('click', handleItemClick);