// recupero il bottone e aggiungo l'evento click

document.getElementById("play").addEventListener("click",function(){
    play();
})


// creo una funzione che conterrà tutto il procedimento

function play(){
    const opzioni = 
   parseInt(document.getElementById("opzioni").value);
    let numeroCelle = 0 ;
    const NUMERO_BOMBE = 16;
    if (opzioni === 2) {
        numeroCelle = 81;
    }else if (opzioni === 3) {
        numeroCelle = 49;
    }else{
        numeroCelle = 100;
    }

    //resetto il main
    document.querySelector("main").innerHTML = "";

    //richiamo le funzioni che generano bombe e celle
    const listaBombe = creaBombe();
    const celle = generatoreCella();
   

    // chiamo la funzione che genererà la griglia e le celle
    // generatoreCella();
    

    // creo le celle e il loro container
   function generatoreCella() {
       const container = document.createElement("div");
       container.classList.add("container");
       console.log(container);
       for (let i = 1; i <= numeroCelle; i++) {
          const cella = document.createElement("div");
          cella.className = "cella";
          cella.innerHTML = i;
          if (numeroCelle === 100) {
              cella.classList.add("easy");
          }else if (numeroCelle === 81) {
              cella.classList.add("hard");
          }else{
              cella.classList.add("crazy");
          }

    //cerco il modo di confrontare l'array contenente le bombe con i numeri delle celle, ovviamente con scarsi risultati

          cella.addEventListener("click", function click() {
              
              if (i === listaBombe) {
                  cella.classList.add("bomba");
                }else{
                   cella.classList.add("cliccata");
                }
            })

          console.log(cella);
          container.append(cella);
        }   
        
        document.querySelector("main").append(container);        
        }
   
    //creo una funzione per aggiungere una classe alle celle cliccate
    // function celleCliccate(){
    //     this.classList.add("cliccata");
    // }

    // function cellaBomba() {
    //     this.classList.add("bomba");
    // }
   

    //creo la funzione per generare le bombe e non rendere ripetibili i numeri 
    function creaBombe() {
        const listaBombe = [];
        console.log("lista bombe",listaBombe);
        for (let i = 0; i < NUMERO_BOMBE; i++) {
            const bomba = numRandom(1, numeroCelle);
            console.log("incremento", i);
            if (listaBombe.includes(bomba)) {
                i--;
                console.log("decremento", i);
            }else{
                listaBombe.push(bomba);
            }
            console.log("bomba",bomba);
        }
        return listaBombe;
    }
   
}


//genero 16 numeri casuali nello stesso range della difficoltà impostata
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


