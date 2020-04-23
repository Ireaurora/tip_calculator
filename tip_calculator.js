var customer_satisfaction = 0;

function increasing_customer_satisfaction(){
    for(var i = 0; i < wholereviews; i++){
      customer_satisfaction++;
    }
  }

function tip_calculation() {
  //this is to be substituted with the formula required by the customer
    var x = document.getElementById("expense").value;
    var tip = 0.10*x;
    document.getElementById("result").value = tip;
    }
   
    function readURL(){
        const file1 = document.getElementById("background").files[0];
        var reader1 = new FileReader();
        reader1.onloadend = function(){
           document.getElementById('section').style.backgroundImage = "url(" + reader1.result + ")";
           document.getElementById('background').style.display ="none";
        }
        if(file1){reader1.readAsDataURL(file1);}
      }
      readURL();

