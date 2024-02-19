




var total_sit_calculation = 40;

var total_sit_selected_value = 0;
var total_taka = 0;
var Total_amound_display = document.getElementById("Total_amound_display");
var total_sit_selected = document.getElementById("total_sit_selected");
var frist_data = document.getElementById("total_sit");
var C1_i = 0;
var C2_i = 0;
var C3_i = 0;
var C4_i = 0;
var D1_i = 0;
var D2_i = 0;
var D3_i = 0;
var D4_i = 0;
var max_sit = 0;

function C1() {


    var C1_clour_sit = document.getElementById("C1_play");

    var C1_Display1 = document.getElementById("C1_Display1");
    var C1_Display2 = document.getElementById("C1_Display2");
    var C1_Display3 = document.getElementById("C1_Display3");


    if (C1_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            C1_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            C1_Display1.innerText = "C1";
            C1_Display2.innerText = "Economy";
            C1_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            C1_i = C1_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        C1_Display1.innerText = "";
        C1_Display2.innerText = "";
        C1_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;

        max_sit = max_sit - 1;

        C1_i = C1_i - 1;
        C1_clour_sit.style.backgroundColor = "gray";

    }
}





// C2
function C2() {

    var C2_clour_sit = document.getElementById("C2_play");

    var C2_Display1 = document.getElementById("C2_Display1");
    var C2_Display2 = document.getElementById("C2_Display2");
    var C2_Display3 = document.getElementById("C2_Display3");




    if (C2_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            C2_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            C2_Display1.innerText = "C2";
            C2_Display2.innerText = "Economy";
            C2_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            C2_i = C2_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        C2_Display1.innerText = "";
        C2_Display2.innerText = "";
        C2_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;


        max_sit = max_sit - 1;
        C2_i = C2_i - 1;
        C2_clour_sit.style.backgroundColor = "gray";

    }
}



// C3
function C3() {

    var C3_clour_sit = document.getElementById("C3_play");
    var C3_Display1 = document.getElementById("C3_Display1");
    var C3_Display2 = document.getElementById("C3_Display2");
    var C3_Display3 = document.getElementById("C3_Display3");




    if (C3_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            C3_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            C3_Display1.innerText = "C3";
            C3_Display2.innerText = "Economy";
            C3_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            C3_i = C3_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        C3_Display1.innerText = "";
        C3_Display2.innerText = "";
        C3_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;

        max_sit = max_sit - 1;

        C3_i = C3_i - 1;
        C3_clour_sit.style.backgroundColor = "gray";

    }
}

// C4
function C4() {

    var C4_clour_sit = document.getElementById("C4_play");

    var C4_Display1 = document.getElementById("C4_Display1");
    var C4_Display2 = document.getElementById("C4_Display2");
    var C4_Display3 = document.getElementById("C4_Display3");




    if (C4_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            C4_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            C4_Display1.innerText = "C4";
            C4_Display2.innerText = "Economy";
            C4_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            C4_i = C4_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        C4_Display1.innerText = "";
        C4_Display2.innerText = "";
        C4_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;


        max_sit = max_sit - 1;
        C4_i = C4_i - 1;
        C4_clour_sit.style.backgroundColor = "gray";

    }
}



// D1

function D1() {


    var D1_clour_sit = document.getElementById("D1_play");

    var D1_Display1 = document.getElementById("D1_Display1");
    var D1_Display2 = document.getElementById("D1_Display2");
    var D1_Display3 = document.getElementById("D1_Display3");


    if (D1_i == 0) {

        if (max_sit < 4) {
            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            D1_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            D1_Display1.innerText = "D1";
            D1_Display2.innerText = "Economy";
            D1_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            D1_i = D1_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        D1_Display1.innerText = "";
        D1_Display2.innerText = "";
        D1_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;

        max_sit = max_sit - 1;

        D1_i = D1_i - 1;
        D1_clour_sit.style.backgroundColor = "gray";

    }
}


// D2
function D2() {

    var D2_clour_sit = document.getElementById("D2_play");

    var D2_Display1 = document.getElementById("D2_Display1");
    var D2_Display2 = document.getElementById("D2_Display2");
    var D2_Display3 = document.getElementById("D2_Display3");




    if (D2_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            D2_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            D2_Display1.innerText = "C2";
            D2_Display2.innerText = "Economy";
            D2_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            D2_i = D2_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        D2_Display1.innerText = "";
        D2_Display2.innerText = "";
        D2_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;


        max_sit = max_sit - 1;
        D2_i = D2_i - 1;
        D2_clour_sit.style.backgroundColor = "gray";

    }
}



// D3
function D3() {

    var D3_clour_sit = document.getElementById("D3_play");
    var D3_Display1 = document.getElementById("D3_Display1");
    var D3_Display2 = document.getElementById("D3_Display2");
    var D3_Display3 = document.getElementById("D3_Display3");




    if (D3_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            D3_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            D3_Display1.innerText = "D3";
            D3_Display2.innerText = "Economy";
            D3_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            D3_i = D3_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        D3_Display1.innerText = "";
        D3_Display2.innerText = "";
        D3_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;



        D3_i = D3_i - 1;
        max_sit = max_sit - 1;
        D3_clour_sit.style.backgroundColor = "gray";

    }
}

// D4
function D4() {

    const D4_clour_sit = document.getElementById("D4_play");

    const D4_Display1 = document.getElementById("D4_Display1");
    const D4_Display2 = document.getElementById("D4_Display2");
    const D4_Display3 = document.getElementById("D4_Display3");




    if (D4_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Sec Left";


            D4_clour_sit.style.backgroundColor = "green";
            total_sit_selected_value = total_sit_selected_value + 1;
            total_sit_selected.innerText = "Seat " + total_sit_selected_value;
            D4_Display1.innerText = "D4";
            D4_Display2.innerText = "Economy";
            D4_Display3.innerText = "550";
            total_taka = total_taka + 550;
            Total_amound_display.innerText = "BDT " + total_taka;
            D4_i = D4_i + 1;
            max_sit = max_sit + 1;

        }
    }
    else {
        total_sit_calculation = total_sit_calculation + 1;

        frist_data.innerText = total_sit_calculation + " Sec Left";
        total_sit_selected_value = total_sit_selected_value - 1;
        total_sit_selected.innerText = "Seat " + total_sit_selected_value;
        D4_Display1.innerText = "";
        D4_Display2.innerText = "";
        D4_Display3.innerText = "";
        total_taka = total_taka - 550;
        Total_amound_display.innerText = "BDT " + total_taka;



        D4_i = D4_i - 1;
        D4_clour_sit.style.backgroundColor = "gray";
        max_sit = max_sit - 1;
    }
}







let isapplied = true;




function coponapply() {

    var input_copun = document.getElementById("input_copun").value;
    var couponDiv = document.getElementById("couponDiv");
    var token_Totalprice_display = document.getElementById("token_Totalprice_display");
    var offerprice = total_taka - (total_taka * 15) / 100;
    var offerprice20 = total_taka - (total_taka * 20) / 100;

    if (input_copun == "NEW 15") {
        token_Totalprice_display.innerText = "BDT " + offerprice;
    }
    if (input_copun == "Couple 20") {
        token_Totalprice_display.innerText = "BDT " + offerprice20;
    }

    couponDiv.style.display = "none";
}

function handleNext() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function handleContinue() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

