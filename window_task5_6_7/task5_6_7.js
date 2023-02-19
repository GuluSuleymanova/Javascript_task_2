// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce  
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

let div = document.createElement("div");
div.id='task5_div';
div.style.position = "absolute";
div.style.top = "0px";
div.style.left = "0px";
div.style.bottom ='0px';
div.style.right ='0px';
document.body.appendChild(div);
let clicksayi = 0;

function getPoz() {
  let getposition = JSON.parse(localStorage.getItem("position"));
  if (getposition) {
    div.style.top = getposition.bizimtop;
    div.style.left = getposition.bizimleft;
  }
}
getPoz();  

function setPoz() {
    localStorage.setItem("position", JSON.stringify({
      bizimtop: div.style.top,
      bizimleft: div.style.left,
    }));
  }
  
div.addEventListener("click", function() {
  switch(clicksayi) {
    case 0:
      div.style.top = "0px";
      div.style.right = "0px";
      div.style.bottom = "";
      div.style.left = "";
      break;
    case 1:
      div.style.top = "";
      div.style.right = "0px";
      div.style.bottom = "0px";
      div.style.left = "";

      break;
    case 2:
      div.style.top = "";
      div.style.right = "";
      div.style.bottom = "0px";
      div.style.left = "0px";
  
      break;
    case 3:
      div.style.top = "0px";
      div.style.right = "";
      div.style.bottom = "";
      div.style.left = "0px";
      clicksayi=-1;
      break;
  }
  clicksayi++;
setPoz();
});


/////////////////////////////////////////////////////////////////////////////////////////////

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin. 
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.


document.addEventListener("keyup", (event)=> {
    switch(event.key) {
      case "ArrowRight":
        div.style.top = "0px";
        div.style.right = "0px";
        div.style.bottom = "";
        div.style.left = "";
  
        break;
      case "ArrowDown":
        div.style.top = "";
        div.style.right = "0px";
        div.style.bottom = "0px";
        div.style.left = "";
  
        break;
      case "ArrowLeft":
        div.style.top = "";
        div.style.right = "";
        div.style.bottom = "0px";
        div.style.left = "0px";
    
        break;
      case "ArrowUp":
        div.style.top = "0px";
        div.style.right = "";
        div.style.bottom = "";
        div.style.left = "0px";
        break;
    }
   
  setPoz();
  })
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin. 

// local storage 5ci ve 6ci taska elave edilib.

///////////////////////////////////////////////////////////////////
