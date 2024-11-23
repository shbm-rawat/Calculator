let display= document.getElementById('input');
let buttons=document.querySelectorAll('button');
let buttonsArray= Array.from(buttons);
  let displayInput='';
buttonsArray.forEach(btn=>{
    btn.addEventListener('click',(e) => {
      if( e.target.innerHTML == 'DEL'){
            displayInput=displayInput.substring( 0, displayInput.length-1);
            display.value =displayInput;
        }
        else if( e.target.innerHTML == 'AC'){
            displayInput='';
            display.value=displayInput;
        } 
        else if(e.target.innerHTML == '='){
            displayInput=eval(displayInput);
            display.value=displayInput;
        }else{
            displayInput +=e.target.innerHTML;
            display.value=displayInput;
        }
    });
});