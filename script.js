$(document).ready(function(){

// Variable désignant les boutons
const buttonRD = document.getElementById('RD');
const buttonHD = document.getElementById('HD');
const buttonNG = document.getElementById('NG');

// Variable désignant les dés
let un = document.getElementById("un");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");
let quatre = document.getElementById("quatre");
let cinq = document.getElementById("cinq");
let six = document.getElementById("six");

// Variable désignant les rounds ou globaux
let roundJ1 = document.getElementById("roundj1");
let roundJ2 = document.getElementById("roundj2");
let globalJ1 = document.getElementById("globalj1");
let globalJ2 = document.getElementById("globalj2");

// initialisation des globaux et round
let j1Global = 0;
let j2Global = 0;
let j1Round = 0;
let j2Round = 0;


// initialisation joueur et statut partie
let joueur = 1;
let statutPartie = false;

/*
Si on clique sur le bouton new game 
*/
$(buttonNG).click(function(){
  Init();
});

/*
Fonction qui commence le jeu en intilisant ou rénitialisant les variables.
*/
function Init()
{
  statutPartie = true;

  joueur = 1;
  tJoueur = 1;

  $(roundJ1).text("0");
  $(roundJ2).text("0");
  $(globalJ1).text("0");
  $(globalJ2).text("0");

  alert('Le joueur n°1 commence la partie !');
}

/*
Si on clique sur le bouton roll on affiche le dé correspondant.
Si il fait 1 il perd.
Sinon on cumule son round.
*/
$(buttonRD).click(function(){
  if(statutPartie)
  {
    var lancer = Math.floor(Math.random() * 6) + 1;

    un.style.display = "none";
    deux.style.display = "none";
    trois.style.display = "none";
    quatre.style.display = "none";
    cinq.style.display = "none";
    six.style.display = "none";

    if(lancer === 1)
    {
      un.style.display = "block";
      if(joueur===1)
      {
        Perdre();
      }
      else if(joueur===2)
      {
        Perdre();
      }
    }
    if(lancer === 2)
    {
      deux.style.display = "block";
      if(joueur===1)
      {
        j1Round += lancer;
        roundJ1.innerHTML = j1Round;
      }
      else if(joueur===2)
      {
        j2Round += lancer;
        roundJ2.innerHTML = j2Round;
      }
    }
    if(lancer === 3)
    {
      trois.style.display = "block";
      if(joueur===1)
      {
        j1Round += lancer;
        roundJ1.innerHTML = j1Round;
      }
      else if(joueur===2)
      {
        j2Round += lancer;
        roundJ2.innerHTML = j2Round;
      }
    }
    if(lancer === 4)
    {
      quatre.style.display = "block";
      if(joueur===1)
      {
        j1Round += lancer;
        roundJ1.innerHTML = j1Round;
      }
      else if(joueur===2)
      {
        j2Round += lancer;
        roundJ2.innerHTML = j2Round;
      }
    }
    if(lancer === 5)
    {
      cinq.style.display = "block";
      if(joueur===1)
      {
        j1Round += lancer;
        roundJ1.innerHTML = j1Round;
      }
      else if(joueur===2)
      {
        j2Round += lancer;
        roundJ2.innerHTML = j2Round;
      }
    }
    if(lancer === 6)
    {
      six.style.display = "block";
      if(joueur===1)
      {
        j1Round += lancer;
        roundJ1.innerHTML = j1Round;
      }
      else if(joueur===2)
      {
        j2Round += lancer;
        roundJ2.innerHTML = j2Round;
      }
    }
  }
  else
  {
    alert('Veuillez commencer la partie avant de lancer les dés ');
  }
});


/*
Si on clique sur le bouton hold on sauvegarde le score global !
Si le score est supérieur ou égal a 100 le joueur a gagner
*/
$(buttonHD).click(function() {
  if (statutPartie)
  {
    if(joueur === 1)
    {
      j1Global += j1Round;
      if(j1Global >= 100)
      {
        alert('Le joueur 1 a gagner la partie !');
        Init();
      }
      else
      {
        $(globalJ1).text(j1Global);
        Perdre();
      }
    }
    else if(joueur === 2)
    {
      j2Global += j2Round;
      if(j2Global >= 100)
      {
        alert('Le joueur 2 a gagner la partie !');
        Init();
      }
      else
      {
        $(globalJ2).text(j2Global);
        Perdre();
      }
    }
  }
  else
  {
    alert('Veuillez commencer la partie avant de sauvegarder les scores de dés ');
  }
});

  /*
  function pour remettre les socre à 0  et changer de joueur !
  */
  function Perdre()
  {
    if(joueur === 1)
    {
      j1Round = 0;
      $(roundJ1).text(j1Round);
      alert("C'est au joueur 2 de jouer");
    }
    if(joueur === 2)
    {
      j2Round = 0;
      $(roundJ2).text(j2Round);
      alert("C'est au joueur 1 de jouer");
    }
    joueur === 1 ? joueur = 2 : joueur = 1;
  }

});
