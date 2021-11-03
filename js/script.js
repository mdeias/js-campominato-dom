// recupero il bottone e aggiungo l'evento click

document.getElementById("play").addEventListener("click",function(){
    play();
})

// creo una funzione che conterrà tutto il procedimento

function play(){
    const opzioni = 
   parseInt(document.getElementById("opzioni").value);
    let numeroCelle = 100;
    if (opzioni === 2) {
        numeroCelle = 81;
    }else if (opzioni === 3) {
        numeroCelle = 49;
    }
    console.log(numeroCelle);
    //resetto il main
    document.querySelector("main").innerHTML = "";
    // chiamo la funzione che genererà la griglia e le celle
    generatoreCella();

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
          cella.addEventListener("click",celleCliccate);
          console.log(cella);
          container.append(cella);
        }
        document.querySelector("main").append(container);
   }
    //creo una funzione per aggiungere una classe alle celle cliccate
    function celleCliccate(){
        this.classList.add("cliccata");
    }

   //genero 16 numeri casuali nello stesso range della difficoltà impostata

}




