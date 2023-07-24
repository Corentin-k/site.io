console.log('connecté'); 

// Faire apparaitre le menu 

const divBouton=document.querySelector('.divBouton');
  divBouton.addEventListener('click',function(){
    var contenu_Bouton = document.querySelector(".Contenu_Bouton");
    contenu_Bouton.classList.toggle('contenu_Bouton-cliqué')
    document.querySelector('.BoutonQuitté').classList.toggle('BoutonQuitté-cliqué');
    document.querySelector('.BoutonMenu').classList.toggle('BoutonMenu-cliqué');
})



function APPUYER_BOUTON_PERSO(){
  
  if (document.getElementById("Bouton_etude").checked){
    var Bouton_etude = document.getElementById("Bouton_etude");
    var Bouton_perso = document.getElementById("Bouton_perso");
    var projetEtudeElements = document.getElementsByClassName("Projet_Etude");
    var projetPersoElements = document.getElementsByClassName("Projet_perso");
    
 
    
    Bouton_perso.classList.remove("clicked");
    

    for (var i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "block";
    }
    Bouton_etude.checked = false;
    
    Bouton_etude.classList.remove("clicked");
    

    for (var i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "block";
    }
  }
  
  var Bouton_perso = document.getElementById("Bouton_perso");

  var projetEtudeElements = document.getElementsByClassName("Projet_Etude");
  
  if (Bouton_perso.classList.contains("clicked")) {
    Bouton_perso.classList.remove("clicked");
    

    for (var i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "block";
    }
    Notif("Tous les projets");
  } else {
    Bouton_perso.classList.add("clicked");
    

    for (var i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "none";
  }
  Notif("Projets personnels");
  }
  
}

function APPUYER_BOUTON_ETUDE(){
  if (document.getElementById("Bouton_perso").checked){
    var Bouton_etude = document.getElementById("Bouton_etude");
    var Bouton_perso = document.getElementById("Bouton_perso");
    var projetEtudeElements = document.getElementsByClassName("Projet_Etude");
    var projetPersoElements = document.getElementsByClassName("Projet_perso");


 
    
    
    Bouton_perso.classList.remove("clicked");
    

    for (var i = 0; i < projetEtudeElements.length; i++) {
      projetEtudeElements[i].style.display = "block";
    }
    Bouton_perso.checked = false;
    
    
    Bouton_etude.classList.remove("clicked");
    

    for (var i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "block";
    }
  } 
    

  
  var Bouton_etude = document.getElementById("Bouton_etude");

  var projetPersoElements = document.getElementsByClassName("Projet_perso");
  
  
  

  if (Bouton_etude.classList.contains("clicked")) {
    Bouton_etude.classList.remove("clicked");
    

    for (var i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "block";
    }
    Notif("Tous les projets");
  } else {
    Bouton_etude.classList.add("clicked");
    

    for (var i = 0; i < projetPersoElements.length; i++) {
      projetPersoElements[i].style.display = "none";
  }
  Notif("Projets de cours");

  }
  
}








function MODAL(projectId) {
  var modal = document.getElementById(projectId);

  function open_mod() {
    modal.classList.add('open');
  }

  // ferme la popup au clic sur la croix et le masque
  var closeButton = modal.getElementsByClassName('close')[0];
  var mask = modal.getElementsByClassName('mask')[0];


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
function openPopup() {
  var width = 600;
  var height = 400;
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;

  window.open('URL_DE_LA_PAGE', 'Nom_de_la_fenetre', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
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
      NotifCache.style.display="none";; 
  }, 5000);
  setTimeout(function(){
    notification.remove();
}, 4000);
}

const btnNotif = document.querySelector('.btnNotif'); 
console.log(btnNotif); 

const ctn = document.querySelector('.container-notifications'); 
console.log(ctn); 
