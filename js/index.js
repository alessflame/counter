/*funzione che crea un elemento e lo ritorna
   caratteristiche dell'elemento:
   attributo- id- un "eventuale" valore - una "eventuale" funzione da associare al click
  */
function create(elemento, id, value = " ", clickFunc = " ") {
  let element = document.createElement(elemento);
  element.id = id;
  element.innerText = value;

  element.onclick = clickFunc;

  return element;
}

//funzione che appende gli elementi ad un "container"

//se il contenitore ha un id allora viene ricercato attraverso getElementById
//altrimenti come nel caso del "body" si utilizza queryselector
function append(element, idElementChild = [], id = false) {
  let boxElement;

  if (id) {
    boxElement = document.getElementById(element.id);
  } else {
    boxElement = document.querySelector(element);
  }

  idElementChild.forEach((element) => {
    boxElement.appendChild(element);
  });
}

//funzioni count

function addValue(number, div) {
  let label = document.getElementById(div);

  let num = parseInt(label.textContent);
  num += number;
  label.innerText = num;
}

function addZero(div) {
  let label = document.getElementById(div);
  label.innerText = 0;
}

let mainContainer = create("div", "count"); //contenitore dei pulsanti e del numero

//array che contiene gli elementi creati
elementMainContainer = [
  create("button", "operatorMinus", "-", () => addValue(-1, "num")),
  create("span", "num", "0"),
  create("button", "operatorPlus", "+", () => addValue(1, "num")),
];

let container2 = create("div", "title"); //container secondario

//elementi dentro il container secondario
let elementContainer = [
  create("h1", "", "counter"),
  create("button", "zero", "zero", () => addZero("num")),
];

//appendo i contenitori alla pagine
append("body", [mainContainer]);
append("body", [container2]);

//inserisco gli elementi nei rispettivi container
append(mainContainer, elementMainContainer, true);
append(container2, elementContainer, true);


let footer= create("footer", ""); //creo un footer
let textFooter= create("h3", "textFooter", "Js Basic"); //creo testo per il footer
append("body",[footer] ); //appendo il footer al body 
append("footer", [textFooter] ); //inserisco l'elemento H3 all'interno del footwe