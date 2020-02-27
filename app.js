window.$ = window.jQuery = require('jquery');

$("input[type = radio]:checked").change(function () {
    var radioValue = $("input[type = 'radio']:checked").val();
    if(radioValue == "yes") {
        $('div.spouse').show();
    } else {
        $('div.spouse').hide();
    }
})


//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight) + "px";
}
