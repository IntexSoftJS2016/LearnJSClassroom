$(function() {

    /* Expand */
    $(".expand").click(function() {
        if (!$(this).parent().hasClass("expandLeaf")) {
            $(this).parent().toggleClass("expandOpen expandClosed");
        }
    });
});