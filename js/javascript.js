console.log('connecté'); 

// Fonction pour le bouton traduction

const divBouton=document.querySelector('.divBouton');
  divBouton.addEventListener('click',function(){
    const contenu_Bouton = document.querySelector(".Contenu_Bouton");
    contenu_Bouton.classList.toggle('contenu_Bouton-cliqué')
    document.querySelector('.BoutonQuitté').classList.toggle('BoutonQuitté-cliqué');
    document.querySelector('.BoutonMenu').classList.toggle('BoutonMenu-cliqué');
})



function APPUYER_BOUTON_PERSO(){
  
  let i;
  let projetEtudeElements;
  let Bouton_perso;
  if (document.getElementById("Bouton_etude").checked){
    const Bouton_etude = document.getElementById("Bouton_etude");
    Bouton_perso = document.getElementById("Bouton_perso");
    projetEtudeElements = document.getElementsByClassName("Projet_Etude");
    const projetPersoElements = document.getElementsByClassName("Projet_perso");


    Bouton_perso.classList.remove("clicked");
    

    for (i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "block";
    }
    Bouton_etude.checked = false;
    
    Bouton_etude.classList.remove("clicked");
    

    for (i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "block";
    }
  }

  Bouton_perso = document.getElementById("Bouton_perso");

  projetEtudeElements = document.getElementsByClassName("Projet_Etude");

  if (Bouton_perso.classList.contains("clicked")) {
    Bouton_perso.classList.remove("clicked");
    

    for (i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "block";
    }
    Notif("Tous les projets");
  } else {
    Bouton_perso.classList.add("clicked");
    

    for (i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "none";
  }
  Notif("Projets personnels");
  }
  
}

function APPUYER_BOUTON_ETUDE(){
  let i;
  let projetPersoElements;
  let Bouton_etude;
  if (document.getElementById("Bouton_perso").checked){
    Bouton_etude = document.getElementById("Bouton_etude");
    const Bouton_perso = document.getElementById("Bouton_perso");
    const projetEtudeElements = document.getElementsByClassName("Projet_Etude");
    projetPersoElements = document.getElementsByClassName("Projet_perso");


 
    
    
    Bouton_perso.classList.remove("clicked");
    

    for (i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "block";
    }
    Bouton_perso.checked = false;
    
    
    Bouton_etude.classList.remove("clicked");
    

    for (i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "block";
    }
  }


  Bouton_etude = document.getElementById("Bouton_etude");

  projetPersoElements = document.getElementsByClassName("Projet_perso");


  if (Bouton_etude.classList.contains("clicked")) {
    Bouton_etude.classList.remove("clicked");
    

    for (i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "block";
    }
    Notif("Tous les projets");
  } else {
    Bouton_etude.classList.add("clicked");
    

    for (i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "none";
  }
  Notif("Projets de cours");

  }
  
}



function MODAL(projectId) {
  const modal = document.getElementById(projectId);

  function open_mod() {
    modal.classList.add('open');
  }

  // ferme la popup au clic sur la croix et le masque
  const closeButton = modal.getElementsByClassName('close')[0];
  const mask = modal.getElementsByClassName('mask')[0];


  closeButton.addEventListener('click', function() {
    closePopup();
  });
  mask.addEventListener('click', function() {
    closePopup();
  });

  // fonction qui supprime la classe
  function closePopup() {
    modal.classList.remove('open');
  }

  open_mod();
}



//Changer de mode Sombre/clair
const switchBox=document.querySelector('.switch');
console.log(switchBox);

const btn=document.querySelector('.btn');
console.log(btn);
const icone=document.querySelector('i');
console.log(icone);
const body=document.querySelector('body');
console.log(body);

switchBox.addEventListener('click',function(){
  console.log('Switch cliqué');
  btn.classList.toggle('btn-change');
  body.classList.toggle('body-change');
  icone.classList.toggle('icone-change');
  icone.classList.toggle('fa-sun');
  document.querySelector('header').classList.toggle('header-change');
  
  if (icone.classList.contains("fa-sun")){Notif("Mode clair");}
  else{
    Notif("Mode sombre");
  }
  
})


function Notif(message){
  const NotifCache=document.querySelector('.NotifCache');
  NotifCache.style.display="block";

  const notification=document.createElement('div');
  console.log(notification);
  notification.classList.add('toast');
  notification.innerText=message;
  ctn.appendChild(notification); 
   setTimeout(function(){
      NotifCache.style.display="none";
  }, 5000);
  setTimeout(function(){
    notification.remove();
}, 4000);
}

const btnNotif = document.querySelector('.btnNotif'); 
console.log(btnNotif); 

const ctn = document.querySelector('.container-notifications'); 
console.log(ctn); 
