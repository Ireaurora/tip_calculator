window.test = function(e) {
    if (e.value === "0") {
        alert(e.value);

    } else if (e.value === '1') {
        alert(e.value);

    }
}

function convert_to_Celsius(){
    let x = document.getElementById("mytext_from").value;
    let fahrenheit = (x*9/5) + 32;
    document.getElementById("mytext_to").value = fahrenheit;
    document.getElementById("unit").value = "Celsius";
}

function changing_bg_color(){
  document.getElementById("Mybackground").style.backgroundColor = "lightblue";
}
