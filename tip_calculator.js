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
        const file1 = document.getElementById("background").files[0];
        var reader1 = new FileReader();
        reader1.onloadend = function(){
           document.getElementById('section').style.backgroundImage = "url(" + reader1.result + ")";
        }
        if(file1){
           reader1.readAsDataURL(file1);
         }else{
         }
      }
      readURL();
 

      function previewFile(){
        var preview = document.querySelector('img'); //selects the query named img
        var file    = document.querySelector('input[type=file]').files[0]; //sames as here
        var reader  = new FileReader();
 
        reader.onloadend = function () {
            preview.src = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL
        } else {
            preview.src = "";
        }
   }
 previewFile();
