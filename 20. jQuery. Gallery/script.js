$(document).ready(function() {
    $(".seasons img").on("mouseenter", function() {
        $(this).effect("bounce", { times: 1 }, "slow");
    });

    $(".seasons img").on("click", function() {
        var newSrc = $(this).data("full");
        $(".fullsize img").fadeOut(500, function() {
            $(this).attr("src", newSrc).fadeIn(500);
        });
        console.log(1111)
    });
});
