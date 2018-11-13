$(document).ready(() => {
  $('#openbtn').on('click', () =>{
    $('.box').animate({
        top: '0'
    }, 1);
  });
   $('#closebtn').on('click', () =>{
    $('.box').animate({
        top: '-400px'
    }, 1).css({
       backgroundColor: 'orange'
    });
  });
});



let check = document.getElementById('check');
 let box = document.getElementById('box1');
   check.onclick = function(){
      let x;
       x = document.getElementById('number').value;
        if (isNaN(x) || x < 5 || x > 5){
           box.style.backgroundColor = 'red';
            
        }
        else{
          box.style.backgroundColor = '#27a527';
        
        }
      } 

let check2 = document.getElementById('check2');
   check2.onclick = function(){
      let x;
        x = document.getElementById('number1').value;
         if (isNaN(x) || x < 11 || x > 11){
           box.style.backgroundColor = 'red';
            
         }
         else{
          box.style.backgroundColor = '#27a527';
        
         }
   }
   let check3 = document.getElementById('check3');
   check3.onclick = function(){
      let x;
        x = document.getElementById('number2').value;
         if (isNaN(x) || x < 19 || x > 19){
           box.style.backgroundColor = 'red';
            
         }
         else{
          box.style.backgroundColor = '#27a527';
        
         }
   }
    let check4 = document.getElementById('check4');
   check4.onclick = function(){
      let x;
        x = document.getElementById('number3').value;
         if (isNaN(x) || x < 7 || x > 7){
           box.style.backgroundColor = 'red';
            
         }
         else{
          box.style.backgroundColor = '#27a527';
        
         }
   }
    let check5 = document.getElementById('check5');
   check5.onclick = function(){
      let x;
        x = document.getElementById('number4').value;
         if (isNaN(x) || x < 13 || x > 13){
           box.style.backgroundColor = 'red';
            
         }
         else{
          box.style.backgroundColor = '#27a527';
        
         }
   }





  let resetBtn = document.getElementById('reset');
  
    resetBtn.onclick = function(){ 
         box.style.backgroundColor = '';
          
    }
