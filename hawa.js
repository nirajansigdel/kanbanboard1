
const days_input = document.getElementById("arrow-input");

const up_arrow = document.getElementById("arrow-up");
const down_arrow = document.getElementById("arrow-down");

days_input.addEventListener("onkeypress", function(event){
    var days_value = days_input.getAttribute("value");
    var pressed_key = event.key;
    var pattern = /[0-9]/g;

    if(pressed_key.match(pattern)){
        days_input.setAttribute()
    }
});

up_arrow.addEventListener("click", function(){
    var days_value = days_input.getAttribute("value") + 1;
    days_input.setAttribute("value") = days_value;
});

down_arrow.addEventListener("click", function(){
    var days_value = days_input.getAttribute("value") - 1;
    days_input.setAttribute("value") = days_value;
});