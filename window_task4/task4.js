// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

let section =document.createElement('section');

let div = document.createElement("div");
div.id ='task4_div';
div.innerText='Rotate';


let btn_div=document.createElement('div');
btn_div.id ='btn-div'

let startbutton=document.createElement('button');
startbutton.innerText='Start';
startbutton.id='start';

let stopbutton=document.createElement('button');
stopbutton.innerText='Stop';
stopbutton.id='stop';


document.body.appendChild(section);
section.append(div, btn_div);
btn_div.append(startbutton, stopbutton);
let rotation;


function move_rotate() {
    div.style.transform+='rotate(90deg)'; 
}

startbutton.addEventListener('click',()=>{
    setTimeout(() => {
       rotation=setInterval(move_rotate, 2000);
    }, 1000);
 
})


stopbutton.addEventListener('click',()=>{
    stopbutton.innerText = "Stop";
    let say = 3;
    let countdown= setInterval(() => {
        if (say>0) {
        stopbutton.innerText=` Stop ${say--}`;  
        }
        else {
            clearInterval(rotation);
            clearInterval(countdown);
            stopbutton.innerText = "Stop";
          }
        
    }, 1000);

})

