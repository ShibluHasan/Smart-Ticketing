




let total_sit_calculation = 8;

let total_sit_selected_value = 0;
let total_taka = 0;
let Total_amound_display = document.getElementById("Total_amound_display");
let total_sit_selected = document.getElementById("total_sit_selected");
let frist_data = document.getElementById("total_sit");
let C1_i = 0;
let C2_i = 0;
let C3_i = 0;
let C4_i = 0;
let D1_i = 0;
let D2_i = 0;
let D3_i = 0;
let D4_i = 0;
let max_sit = 0;

function C1() {


    let C1_clour_sit = document.getElementById("C1_play");

    let C1_Display1 = document.getElementById("C1_Display1");
    let C1_Display2 = document.getElementById("C1_Display2");
    let C1_Display3 = document.getElementById("C1_Display3");


    if (C1_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let C2_clour_sit = document.getElementById("C2_play");

    let C2_Display1 = document.getElementById("C2_Display1");
    let C2_Display2 = document.getElementById("C2_Display2");
    let C2_Display3 = document.getElementById("C2_Display3");




    if (C2_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let C3_clour_sit = document.getElementById("C3_play");
    let C3_Display1 = document.getElementById("C3_Display1");
    let C3_Display2 = document.getElementById("C3_Display2");
    let C3_Display3 = document.getElementById("C3_Display3");




    if (C3_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let C4_clour_sit = document.getElementById("C4_play");

    let C4_Display1 = document.getElementById("C4_Display1");
    let C4_Display2 = document.getElementById("C4_Display2");
    let C4_Display3 = document.getElementById("C4_Display3");




    if (C4_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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


    let D1_clour_sit = document.getElementById("D1_play");

    let D1_Display1 = document.getElementById("D1_Display1");
    let D1_Display2 = document.getElementById("D1_Display2");
    let D1_Display3 = document.getElementById("D1_Display3");


    if (D1_i == 0) {

        if (max_sit < 4) {
            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let D2_clour_sit = document.getElementById("D2_play");

    let D2_Display1 = document.getElementById("D2_Display1");
    let D2_Display2 = document.getElementById("D2_Display2");
    let D2_Display3 = document.getElementById("D2_Display3");




    if (D2_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let D3_clour_sit = document.getElementById("D3_play");
    let D3_Display1 = document.getElementById("D3_Display1");
    let D3_Display2 = document.getElementById("D3_Display2");
    let D3_Display3 = document.getElementById("D3_Display3");




    if (D3_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let D4_clour_sit = document.getElementById("D4_play");

    let D4_Display1 = document.getElementById("D4_Display1");
    let D4_Display2 = document.getElementById("D4_Display2");
    let D4_Display3 = document.getElementById("D4_Display3");




    if (D4_i == 0) {
        if (max_sit < 4) {

            total_sit_calculation = total_sit_calculation - 1;

            frist_data.innerText = total_sit_calculation + " Seats Left";


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

        frist_data.innerText = total_sit_calculation + " Seats Left";
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

    let input_copun = document.getElementById("input_copun").value;
    let couponDiv = document.getElementById("couponDiv");
    let token_Totalprice_display = document.getElementById("token_Totalprice_display");
    let offerprice = total_taka - (total_taka * 15) / 100;
    let offerprice20 = total_taka - (total_taka * 20) / 100;

    if (input_copun == "NEW15") {
        token_Totalprice_display.innerText = "BDT " + offerprice;
    }
    if (input_copun == "Couple 20") {
        token_Totalprice_display.innerText = "BDT " + offerprice20;
    }

    couponDiv.style.display = "none";
}

function handleNext() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

function handleContinue() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

