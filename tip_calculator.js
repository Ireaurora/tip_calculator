var customer_satisfaction = 0;

function increasing_customer_satisfaction(){
    for(var i = 0; i < wholereviews; i++){
      customer_satisfaction++;
    }
  }

  // initially we can change the color of the background
// This is the function that does the actual calulation based on the expense
function tip_calculation() {
    var x = document.getElementById("expense").value;
    var tip = 0.10*x;
    document.getElementById("result").value = tip;
    
    //implementing a case statement to group the expense in a level
    }
   
    function readURL(){
        var file1 = document.getElementById("background").files[0];
        console.log(file1);
        var reader1 = new FileReader();
        reader1.onloadend = function(){
           document.getElementById('selection').style.backgroundImage = "url(" + reader1.result + ")";
        }
        if(file1){
           reader1.readAsDataURL(file1);
         }else{
         }
      }
      readURL();
 
    