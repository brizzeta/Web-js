let popupWindow = null;
let images = document.querySelectorAll(".image");
function openPopup(index) {
    let tempImage = new Image();
    let imageUrl = `DESIGN/P${index}.JPG`;
    tempImage.src = imageUrl;
    tempImage.onload = function () {
        if (popupWindow != null) {
            popupWindow.close();
        }
        popupWindow = window.open("", "_blank", "width=" + tempImage.width + ",height=" + tempImage.height + ",scrollbars=no");

        let htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Popup Image</title>
            </head>
            <body style="margin: 0;">
                <img src="${imageUrl}" style="width: 100%; height: auto;">
            </body>
            </html>
        `;

        popupWindow.document.write(htmlContent);
    }
}
images.forEach(function (image, index) {
    image.addEventListener('click', function () {
        openPopup(index);
    });
    image.addEventListener('mouseover', function () {
        displayInfo(index);
    });
});

function displayInfo(index) {
    let tempImage = new Image();
    let imageUrl = `DESIGN/P${index}.JPG`;
    tempImage.src = imageUrl;
    tempImage.onload = function () {
        window.location.hash = `image=${imageUrl}&width=${tempImage.width}&height=${tempImage.height}`;
    }
}