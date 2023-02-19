// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

//Burada biraz deyisiklik etmisem. verilen sert ile  yazanda ekrandan kenara cixir gedir scroll yaranir.
// ona gore de  ekran olcusune yeni her hansi bir kunce catanda artiq geri qayitmaga baslayir.
// asagi saga gedirdise window olcusune catandan sonra yuxari ve sola qayitmaga baslayir))

let div = document.createElement('div');
div.id = 'task2_div';
document.body.appendChild(div);
let down = true;
let right = true;

setInterval(() => {


  let bottom = div.offsetTop;
  let left = div.offsetLeft;

  div.style.top = down ? bottom + 10 + 'px' : bottom - 10 + 'px';
  div.style.left = right ? left + 10 + 'px' : left - 10 + 'px';

  if (window.innerWidth-(left + div.offsetWidth) <= 0) {
         right = false;
      }
         else {
            if (left <= 0) {
                right = true;
            }
        }

  if (window.innerHeight-(bottom + div.offsetHeight) <= 0) {
          down = false;
     }
       else {
                    
        if (bottom <= 0) {
             down = true;
            }
     }
                
}, 1000);
