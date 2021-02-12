'strict mode'

// DECLARATIONS
let suerte = document.getElementsByTagName("P") ;
let entera = document.getElementById("entera");
let crack = document.getElementById("area");
let written = document.getElementById("written");
console.log(suerte.length)

// EVENTS 
crack.addEventListener("click", funCrack)

// FUNCTIONS
for(let i = 0 ; i < suerte.length; i++){
    suerte[i].setAttribute("id", i+1)
}

let max = suerte.length;
let min = 1 ;

function random ( max , min ){

    let chosen = Math.floor( Math.random() * ( max - min +1))+ min ;
    let pChosen = document.getElementById(chosen);
    written.innerHTML= pChosen.innerHTML ;
    written.style.display= "none";

    console.log(chosen)
    console.log(written.innerText)
} 

random(max, min)

function funCrack(e){
   e.preventDefault();
   
   if(typeof (localStorage.getItem("destiny")) !== "string" ){

  entera.style.display= "none";

  let outer = document.getElementById("outer");
  let inner = document.getElementById("inner");
  let paper = document.getElementById("paper");
  let cover = document.getElementById("cover");
  outer.style.display= "block"
  inner.style.display= "block"
  paper.style.display= "block"
  cover.style.display= "inline-block"
  written.style.display= "block"

  console.log(written.innerHTML+" primero")

   localStorage.setItem("destiny", JSON.stringify(written.innerHTML))

   }else if( typeof(localStorage.getItem("destiny")) == "string"  ){
    
     console.log(written.innerHTML +" segundo")
     written.innerHTML= JSON.parse(localStorage.getItem("destiny"))
    entera.style.display= "none";

    let outer = document.getElementById("outer");
    let inner = document.getElementById("inner");
    let paper = document.getElementById("paper");
    let cover = document.getElementById("cover");
    outer.style.display= "block"
    inner.style.display= "block"
    paper.style.display= "block"
    cover.style.display= "inline-block"
    written.style.display= "block"
   }
   
}

