const resizableBlock = document.getElementById('resizableBlock');
const resizeHandle = document.getElementById('resizeHandle');
let isResizing = false;
let startX;
let startY;
let startWidth;
let startHeight;

resizeHandle.addEventListener('mousedown', function(e) {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizableBlock).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(resizableBlock).height, 10);
});

document.addEventListener('mousemove', function(e) {
    if (isResizing) {
        const width = startWidth + (e.clientX - startX);
        const height = startHeight + (e.clientY - startY);
        resizableBlock.style.width = width + 'px';
        resizableBlock.style.height = height + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isResizing = false;
});