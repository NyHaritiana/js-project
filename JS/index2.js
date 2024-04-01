$(function(){
    $(".title").click(function() {
        $("#projects").show();
    })
    $(".close").click(function() {
        $("#projects").hide();
    })
    $(window).click(function(event) {
        if (event.target == $("#projects")) {
            $("#projects").hide();
        }
    })
});

