window.$ = window.jQuery = require('jquery');

// console.log( $("input[type = radio]:checked").val() )
$('#spouse').hide()

$("input[type = radio]").change(function () {
    var radioValue = $("input[type = 'radio']:checked").val();
    // console.log(typeof(radioValue))
    if (radioValue === "yes") {
        // console.log("YES")
        $('#spouse').show();
        $('#spacing').hide();
    } else {
        // console.log("NO")
        $('#spouse').hide();
        $('#spacing').show();
    }
})


//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight) + "px";
}

function asset_allocation() {
    console.log("entered the asset allocatoin function")
}