// this function takes text and wraps all the letters in spans
const makeSpans = selector => {
  const [...elements] = document.querySelectorAll(selector)
  return elements.map(element => {
    const text = element.innerText.split('')
    const spans = text
      .map(letter => '<span>' + letter + '</span>')
      .join('')
    return element.innerHTML = spans
  })
}

// or with multiple selectors
makeSpans('h1, h2, h3, h4')


// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
var draggableElem = draggableElems[i];
var draggie = new Draggabilly( draggableElem, {
containment: true
});
draggies.push( draggie );
}



//open contacts
const open = document.getElementById('wannasayhi')
const body = document.querySelector('body')
const mode = document.getElementById('mode')




open.addEventListener("click", function () {

  if (mode.innerHTML === "LIGHT MODE" && body.className==='dark'){
    document.getElementById("container").className = "container";
    document.getElementById("wannasayhi-box").className = "wannasayhi-box-dark";
  }
  else if (mode.innerHTML === "DARK MODE" && body.className==='light') {
    document.getElementById("container").className = "container";
    document.getElementById("wannasayhi-box").className = "wannasayhi-box-light";
  }
  else {
    document.getElementById("container").className = "container";
    document.getElementById("wannasayhi-box").className = "wannasayhi-box-ee";
  }



})

//close contacts
const close = document.getElementById('close')
close.addEventListener("click", function () {
    document.getElementById("wannasayhi-box").className = "off";
    document.getElementById("container").className = "off";

  }
)


// dark e light
const button = document.getElementById('mode')
const contatti = document.getElementById('wannasayhi-box')


button.addEventListener("click", function () {

  if (button.innerHTML === "DARK MODE") {
    button.innerHTML = "LIGHT MODE";
    document.getElementById("body").className = "dark";
    document.getElementById("mode").className = "button-dark";
    document.getElementById("wannasayhi").className = "button-dark";
    document.getElementById("cv").className = "button-dark";
    document.getElementById("close").className = "button-dark";
    document.getElementById("francesca").className = "francesca-dark";
    document.getElementById("runner").className = "runner-dark";
    document.getElementById("testo-base").className = "testo-base-dark";
    document.getElementById('draggable').className="testo-base-dark";
    document.getElementById('discover').className="button-dark";
    document.getElementById("dida").className = "testo-base-dark";
    document.getElementById("col1").className = "colonna-dark";
    document.getElementById("col2").className = "colonna-dark";


    }
    else {
    button.innerHTML = "DARK MODE";
    document.getElementById("body").className = "light";
    document.getElementById("mode").className = "button-light";
    document.getElementById("wannasayhi").className = "button-light";
    document.getElementById("cv").className = "button-light";
    document.getElementById("close").className = "button-light";
    document.getElementById("francesca").className = "francesca-light";
    document.getElementById("runner").className = "runner-light";
    document.getElementById("testo-base").className = "testo-base-light";
    document.getElementById('draggable').className="testo-base-light";
    document.getElementById('discover').className="button-light";
    document.getElementById("dida").className = "testo-base-light";
    document.getElementById("col1").className = "colonna-light";
    document.getElementById("col2").className = "colonna-light";



    }
})
