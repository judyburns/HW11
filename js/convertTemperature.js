/*
 *
 * Cleveland Codes - HW11
 *
 */

/*
 * Accept a temperature and convert it to celsius or fahrenheit.   
 * The result is  rounded to an integer.
 *
 */

$(document).ready(function () {
    // Bind Convert Button Click
    $("#convert-button").click(function () {
        convertSelected();
    });

    // Bind Try Again Button Click
    $("#try-button").click(function () {
        tryAgainSelected();
    });

    // Bind Exit Button Click
    $("#exit-button").click(function () {
        exitSelected();
    });
});

function convertSelected() {
    $("#msg").val("").removeClass("msg-info");
    var $inputvalue = $("#user-input").val();

    try {
        validateInput($inputvalue);
    }
    catch (error) {
        $("#msg").val(error).addClass("msg-info");
        return;
    }

    if ($("#celsius:checked").val()) {
        var fahrenheit = $("#user-input").val();
        // convert from fahrenheit to celsius
        var celsius = ((fahrenheit - 32) * (5 / 9));
        var intCels = parseInt(celsius);
        // populate input fields
        $("#conv-celsius").val(intCels);
        $("#conv-fahrenheit").val(fahrenheit);
    }
    else {
        var celsius = $("#user-input").val();
        //convert from celsius to fahrenheit
        var fahrenheit = (celsius * (9 / 5) + 32);
        var intFahr = parseInt(fahrenheit);
        // populate input fields
        $("#conv-fahrenheit").val(intFahr);
        $("#conv-celsius").val(celsius);
    }
}


function validateInput(inputvalue) {
    try {
        if (isNaN(inputvalue)) throw "Enter a Number";
    } 
    catch (error) {
        throw error;
    }
}

function tryAgainSelected() {
    $("#user-input").val("");
    $("#msg").val("").removeClass("msg-info");
    $("#celsius").prop('checked', true);
    $("#fahrenheit").prop('checked', false);
    $("#conv-celsius").val("");
    $("#conv-fahrenheit").val("");
}

function exitSelected() {
    $("*").fadeOut(2000, function () {
        $("#goodbye").hide().html("GOODBYE!!!").addClass("msg- info");
        $("*").fadeIn(2000);
    });
}