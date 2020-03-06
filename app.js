window.$ = window.jQuery = require('jquery');

// console.log( $("input[type = radio]:checked").val() )
$('#spouse').hide()

$('input[type = radio]').change(function () {
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
    var age = parseInt($('input[name="age"]').val());
    var currentIncome = parseInt($('input[name="current-income"]').val());
    var married = $('input[name="married"]:checked').val();
    var spouseIncome = parseInt($('input[name="spouse-income"]').val());
    var retireAge = parseInt($('input[name="retire"]').val());
    var savingsAmt = parseInt($('input[name="savings"]').val());
    var kids = parseInt($('input[name="kids"]').val());
    var house = $('input[name="house"]:checked').val();

    var ytr = retireAge - age;
    // zf to fold, za to expand folds
    // :mkview to save folds, :loadview to view
    if (ytr <= -10) {
        //pass
    } else if (ytr >= -10 && ytr < -5) {
        //pass
    } else if (ytr >= -5 && ytr < 0) {
        //pass
    } else if (ytr >= 0 && ytr < 5) {
        //pass
    } else if (ytr >= 5 && ytr < 10) {
        //pass
    } else if (ytr >= 10 && ytr < 15) {
        //pass
    } else if (ytr >= 15 && ytr < 20) {
        //pass
    } else if (ytr >= 20 && ytr < 25) {
        //pass
    } else if (ytr >= 25 && ytr < 30) {
        //pass
    } else if (ytr >= 30 && ytr < 35) {
        //pass
    } else if (ytr >= 35 && ytr < 40) {
        //pass
    } else {
        //pass
    }
}
