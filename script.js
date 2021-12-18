let inputs =[];
let input = document.querySelector('input');
let button = document.getElementById('btn');
let ol ='';

button.addEventListener('click',() => {

   for(i=0; i<1; i++){
       inputs.push(input.value);
   ol+='<li>'+input.value+'</li>';
    }
    document.querySelector('ol').innerHTML=ol;
  
});
