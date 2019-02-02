function convert_to_Celsius(){
    let x = document.getElementById("mytext_from").value;
    let fahrenheit = (x*9/5) + 32;
    document.getElementById("mytext_to").value = fahrenheit;
    document.getElementById("unit").value = "Celsius";
}
