document.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.key === 'e'){
        e.preventDefault();
        const span = document.querySelector('span')
        const textarea = document.createElement('textarea');
        textarea.textContent = span.textContent;
        textarea.style.width = "100%";
        const height = span.style.height;
        textarea.style.height = "150px";
        span.parentNode.replaceChild(textarea, span);
    }
    if(e.ctrlKey && e.key === 's'){
        e.preventDefault();
        const textarea = document.querySelector('textarea')
        const span = document.createElement('span');
        span.textContent = textarea.value;
        textarea.parentNode.replaceChild(span, textarea);
    }
})