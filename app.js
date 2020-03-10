window.$ = window.jQuery = require("jquery");

// console.log( $("input[type = radio]:checked").val() )
$("#spouse").hide();

$("input[type = radio]").change(function () {
    var radioValue = $("input[type = 'radio']:checked").val();
    // console.log(typeof(radioValue))
    if (radioValue === "yes") {
        // console.log("YES")
        $("#spouse").show();
        $("#spacing").hide();
    } else {
        // console.log("NO")
        $("#spouse").hide();
        $("#spacing").show();
    }
});


//auto expand textarea
function adjustTextarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight) + "px";
}

function assetAllocation() {
    var age = parseInt($('input[name="age"]').val(), 10);
    var currentIncome = parseInt($('input[name="current-income"]').val(), 10);
    var married = $('input[name="married"]:checked').val();
    var spouseIncome = parseInt($('input[name="spouse-income"]').val(), 10);
    var retireAge = parseInt($('input[name="retire"]').val(), 10);
    var savingsAmt = parseInt($('input[name="savings"]').val(), 10);
    var kids = parseInt($('input[name="kids"]').val(), 10);
    var house = $('input[name="house"]:checked').val();

    var ytr = retireAge - age;
    // zf to fold, za to expand folds
    // :mkview to save folds, :loadview to view

    switch (true) {
        case (ytr >= -10): 
            //pass
            break;
        case (ytr >= -5):
            //pass
            break;
        case (ytr >= 0):
            //pass
            break;
        case (ytr >= 5):
            //pass
            break;
        case (ytr >= 10):
            //pass
            break;
        case (ytr >= 15):
            //pass
            break;
        case (ytr >= 20):
            //pass
            break;
        case (ytr >= 25):
            //pass
            break;
        case (ytr >= 30):
            //pass
            break;
        case (ytr >= 35):
            //pass
            break;
        case (ytr >= 40):
            //pass
            break;
    }
}
