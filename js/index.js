

//buttone azzera conteggio
let zero= document.getElementById("zero");
zero.addEventListener("click", (e) => {num=0; label.innerText=num;});
//


//selezione del div che contiente i bottoni
let div=document.querySelector("div");
//delego l'evento "click" dei bottoni al div che li contiene
div.addEventListener("click", evento);

//selezione del'elemento span che contiente il numero
let label= document.querySelector("#count > span");

//variabile che contiene il numero (valore testo)
let num= label.textContent;



//funzione dell'evento con uno switch basato sull'id del bottone che genera l'evento 
function evento(e){
    let idEvent= e.target.id;
    
switch(idEvent){
     case "operatorMinus":
       num=minus(num);
       label.innerText=num;
        break;
     case "operatorPlus":
          num=plus(num);
       label.innerText=num;
          break;
     case "plusTen":
         num= tenPlus(num);
          label.innerText=num;
     break;
     case "minusTen":
         num= tenMinus(num);
          label.innerText=num;
          break; 

}}


//funzioni 

function plus(x){
        return ++x;
}

function minus(x){
     return --x;
}

function tenMinus(x){
     return Number(x)-10;
}

function tenPlus(x){
     return Number(x)+10;
}