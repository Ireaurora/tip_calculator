/*
var customer_satisfaction = 0;
function increasing_customer_satisfaction(){
  for(var i = 0; i < wholereviews; i++){
    customer_satisfaction++;
  }
}
*/

function tip_calculation() {
  //this is to be substituted with the formula required by the customer
  var x = document.getElementById("expense").value;
  var tip = 0.10*x;
  var e = document.getElementById("selectBox");
  var strUser = e.options[e.selectedIndex].value;
  switch(strUser) {
    case '0':
      console.log(tip);
      break;
    case '1':
      tip += 0.40;
      break;
    case '2':
      tip += 0.30;
      break;
    case '3':
      tip += 0.20;
      break;
    default:
      tip += 0.10;
  }
  console.log(tip);
  tip = tip.toFixed(2);
  console.log(tip);
  document.getElementById("result").value = tip;
}
   
function readURL(){
    const file1 = document.getElementById("background").files[0];
    var reader1 = new FileReader();
    reader1.onloadend = function(){
      document.getElementById('section').style.backgroundImage = "url(" + reader1.result + ")";
    }
    if(file1){reader1.readAsDataURL(file1);}

    const file2 = document.getElementById("chooselogo").files[0];
    console.log(file2);
    var reader2 = new FileReader();
    reader2.onloadend = function(){
      document.getElementById('logo').style.backgroundImage = "url(" + reader2.result + ")";
    }
    if(file2){reader2.readAsDataURL(file2);}

    if((file1 && file2) != null){
      document.getElementById('customizablepart').style.display ="none";
    }
}
readURL();

