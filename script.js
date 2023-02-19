// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// 1.2  2ci merhelede functiondan kenarda array yaradin ve 
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin 
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// **********************************************
let SET = 'SET_DATA';
let GET = 'GET_DATA'
let DELETE = 'DELETE_DATA'
let array=[1,3,5];
function all_Data(type) {

    switch (type) {
        case SET:
            console.log(type);
             array.push(Math.floor(Math.random()*9)+1);
             console.log(array);
            break;

            case GET:
                console.log(type);
                console.log(array);
            break;

            case DELETE:
                console.log(type);
                array.length>0 ? array.pop():console.error('SILINECEK DATA TAPILMADI');
                console.log(array);
            break;
    
        default:
            console.log('UYGUN DATA TAPILMADI');
            break;
    }

console.log(array);
}

// all_Data(SET);
all_Data(GET);
all_Data(DELETE);

// ****************************************************************************

///////////////////////////////////////////////////////////////////////////////////////////

 let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin  
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

function all_Months() {  
for (const months of mL) {

    switch (months) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(`${months} - 31 days`)
            break;
         case 'February':
            console.log(`${months} - 28--29 days`)
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            console.log(`${months} - 30 days`)
            break;
    }

// console.log(months);
    
}
}
all_Months();
console.log(mL);


// ********************************************************************************************


// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

function current_Month() {
    let date =new Date();
    console.log(date);
    let curmonth=date.getMonth()+1;
    console.log(curmonth);
    let curyear =date.getFullYear();
   console.log(new Date(curyear,curmonth,0).getDate());    


  
    function countDays(monthindex) {
        return new Date(curyear,++monthindex,0).getDate();    
    }
    countDays();
    mL.forEach((month,monthindex)=>{
        switch (month) {
            case 'January':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'February':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'March':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'April':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'May':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'June':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'July':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'August':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;
            case 'September':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'October':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break; 
            case 'November':   
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;

            case 'December':
                console.log(`${month}- ${countDays(monthindex)} days`)
                break;
        
            default:
                break;
        }
    })
}

current_Month(); 

// ***************************************************************************************

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

function month_find() {
let inc_date= new Date(2023, 1, 12);
console.log(inc_date);
 month_curr =mL[inc_date.getMonth()]
 console.log(month_curr)

    switch (month_curr) {
        case 'January':
        case 'February':
        case 'March':
        case 'April':
        case 'May':
        case 'June':
            console.log(`${month_curr} ilin 1-ci yarisina aiddir.`);
            break;

        case 'July':
        case 'August':
        case 'September':
        case 'October':
        case 'November':
        case 'December':
            console.log(`${month_curr} ilin 2-ci yarisina aiddir.`);
            break;
        
    }
}
month_find();

// *******************************************************************************************

// 5) 4 cu taski heftenin gunleri ile yoxlayin

function week_find() {
    

let week=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
let date = new Date();
let week_day=week[date.getDay()];
// let week_day=date.getDay();
// console.log(week);
// console.log(week_day);

switch (week_day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${week_day} Hefte icidir`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`${week_day} Hefte sonudur.`)    
        break;

    default:
        console.log('Hər anı son anmış kimi yaşa:)')
        break;
}
}
week_find();

//************************************************************************************************** */

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

function find_weekofmonth() {
    
let date = new Date();
let curr_Month = date.getMonth();
let curr_Date = date.getDate();
console.log(curr_Date);
let curr_Year = date.getFullYear();

// Ayin ilk gununu hesablayaq
let firstDay = new Date(curr_Year, curr_Month, 1);
console.log(firstDay);

// Ayin ilk gununun heftenin necenci günü olduğunu hesablayaq
let weekDay = firstDay.getDay();
console.log(weekDay);
// Ayin hansi heftesinde oldugumuzu hesablayaq
let weekOfMonth = Math.ceil((curr_Date + weekDay) / 7);

console.log(`Bu ayin ${weekOfMonth}-cu heftesindeyik`);
}
find_weekofmonth();




///////////////////////////////////////////////////////////////////////////////////////////



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin 
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5


// 1.1 // Verilen array
 

///////////////////////////////////////////////////////////////////////////////////////////

//let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'], 
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//     ['August'], 
//     ['September'],
//     ['October'],
//     ['November'], 
//     ['December']
// ];

// let newArr=[];
// for (const item of mL) {
//     newArr.push([item])
// }
// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
//  let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'], 
//     ['May','June','July','August'], 
//     ['September' , 'October', 'November', 'December']
// ];

//1ci usulll****

// let arr =[];
// for (let i = 0; i < mL.length; i+=4) {
//    arr.push(mL.slice(i,i+4))
      
//     }
//     console.log(arr);


 //2 ci usullll**** 
//  let arraygrup = [];
// for (const [index, month] of mL.entries()) {
//   if (index % 4 === 0) {
//     arraygrup.push([]);
//   }
//   arraygrup[arraygrup.length - 1].push(month);
// }

// console.log(arraygrup);
 
///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['May','June',['July','August']], 
//     ['September' , ['October', 'November', 'December']]
// ];

// let newarr = [];
// for (let i = 0; i < mL.length; i +=4) {

//   if (i + 4 < mL.length) {
//     newarr.push([mL[i], mL[i+1], [mL[i+2], mL[i+3]]]);
//   } else {
//     newarr.push([mL[i], [mL[i+1], mL[i+2], mL[i+3]]]);
//   }
// }

// console.log(newarr);



/////////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]], 
//     ['May','June',['July',['August']]], 
//     ['September' , ['October', 'November', ['December']]]
// ];

// let newArray=[];
// for (let i = 0; i < mL.length; i+=4) {
    
//     if (i+4<mL.length) {
//         newArray.push([mL[i], mL[i+1], [mL[i+2], [mL[i+3]]]]);
//     } else {
//       newArray.push([mL[i], [mL[i+1], mL[i+2], [mL[i+3]]]]);
//     }
     
// }
// console.log(newArray);


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']], 
// ];

// let newmLarr = [];
// for (let i = 0; i < mL.length; i +=4) {

//   if (i + 4 < mL.length) {
//     newmLarr.push([mL[i], mL[i+1], [mL[i+2], mL[i+3]]]);
//   } else {
//     newmLarr.push([mL[i], [mL[i+1], mL[i+2], mL[i+3]]]);
//   }
// }
// const temp = newmLarr[2];
// console.log(newmLarr[2]);
// newmLarr.splice(2, 1, newmLarr[1]);
// newmLarr.splice(1, 1, temp);

// console.log(newmLarr);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var) 
// sonra onlari umumi arraya elave etmelisiz

let fullName ='Gulu Suleymanova';
let result =[];
console.log(fullName);
let name =fullName.split(' ')[0];
let surname =fullName.split(' ')[1];
console.log(name);
console.log(surname);


let max_leng =Math.max(name.length, surname.length)
console.log(max_leng);

for (let i = 0; i < max_leng; i++) {
   let ad = name[i]||'X';
   let soyad =surname[i] || 'X';
   result.push([ad, soyad]);
    
}
console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////


// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

let cumle = 'Ey babeK kebaB ye!';
let cumleTers = cumle.split('').reverse().join('');
console.log(cumleTers);


// ***************************************************************************************

 let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

let cem =0;
 for (const reqem of arr) {
   if (reqem%5===0 && reqem %7 ===0) {
      
      cem+=reqem;

   }
 }
 console.log(cem);

//  ********************************************************************************************

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)
//1ci usulll.
let maxnum = arr.filter(number=>  number %2==0 && number>=100 && number<=999);
let maximum = Math.max(...maxnum);
console.log(maxnum);
console.log(maximum);


//2ci usulll.
let max =0;
 for (const number of arr) {
   if (number%2===0 && number>=100 && number <=999) {
     max = Math.max(max, number);
   }
 }

 console.log(max);


// ******************************************************************************************


// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin
//1ci usull
let minnum = arr.filter(number=> number %3===0 && number !==3);
let minimum = Math.min (...minnum);
 console.log(minnum);
 console.log(minimum);


// 2ci usull
let min =Infinity;
for (const number of arr) {
   if (number%3=== 0 && number !==3) {
      
      min =Math.min(min, number);

   }
}
 console.log(min);

 //**************************************************************************************** */


 // 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

let obj = {
    key1: 0,
    key2: 3,
    key3:2,
    key4:4,
    key5:53,
    key7:7,
    key8:8,
    key9:91,
}

let newvalue=[];

for (const key in obj) {
  let keys=Number(key.slice(-1)) ;
  let value= obj[key];
  console.log(value);
  console.log(keys);
  if (keys ===value) {
   newvalue.push(value);
  }
}
console.log(newvalue);

////////////////////////////////////////////////////////////////////////////////////////////////
