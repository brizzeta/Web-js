let isResizingRight = false, isResizingLeft = false, startYRight, startYLeft;
$('#resizer-right').mousedown(function (e) {
    e.preventDefault();
    isResizingRight = true;
    startYRight = e.pageY;
});
$(document).mousemove(function (e) {
    if (isResizingRight) {
        let deltaY = e.pageY - startYRight;
        let newTopHeight = $('#top-right').height() + deltaY;
        let newBottomHeight = $('#bottom-right').height() - deltaY;
        if (newTopHeight >= 100 && newBottomHeight >= 100) {
            $('#top-right').height(newTopHeight);
            $('#bottom-right').height(newBottomHeight);
        }
        startYRight = e.pageY;
    }
}).mouseup(function () {
    isResizingRight = false;
});
$('#resizer-left').mousedown(function (e) {
    e.preventDefault();
    isResizingLeft = true;
    startYLeft = e.pageY;
});
$(document).mousemove(function (e) {
    if (isResizingLeft) {
        let deltaY = e.pageY - startYLeft;
        let newTopHeight = $('#top-left').height() + deltaY;
        let newBottomHeight = $('#bottom-left').height() - deltaY;
        if (newTopHeight >= 100 && newBottomHeight >= 100) {
            $('#top-left').height(newTopHeight);
            $('#bottom-left').height(newBottomHeight);
        }
        startYLeft = e.pageY;
    }
}).mouseup(function () {
    isResizingLeft = false;
});
$('.vertical-plank').click(function () {
    if ($('.left-wrapper').width() > 0) {
        $('.left-wrapper').width(0);
        $('.vertical-plank').html('>');
        $('.right-wrapper').width('100%');
    } else {
        $('.left-wrapper').width('24.5%');
        $('.vertical-plank').html('<');
        $('.right-wrapper').width('74.5%');
    }
});