function trad(){
    const Theader=document.getElementById('header');
    Theader.innerHTML="My project";
    var Bouton_trad = document.getElementById("Bouton_trad");

  
  
  if (Bouton_trad.classList.contains("clicked")) {
    Bouton_trad.classList.remove("clicked");
    Theader.innerHTML="Mes projets";
    localStorage.setItem("traduction",false);
    

  } else {
    Bouton_trad.classList.add("clicked");
    localStorage.setItem("traduction",true);
    Theader.innerHTML="My project";

  }
}

// Regarder si le bouton trad a déj à été sélectionné
let valeur_trad=localStorage.getItem("traduction")
if (valeur_trad=='true'){
  trad()
  var Bouton_trad = document.getElementById("Bouton_trad");
  console.log(Bouton_trad);

  if (Bouton_trad.classList.contains("clicked")) {
    Bouton_trad.checked=true;
    console.log(Bouton_trad);
  } else {
    Bouton_trad.classList.add("clicked");
  }

}


const stockage = window.localStorage;
console.log(stockage);
