const buttonRD = document.getElementById('RD');
const buttonHD = document.getElementById('HD');

let un = document.getElementById("un");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");
let quatre = document.getElementById("quatre");
let cinq = document.getElementById("cinq");
let six = document.getElementById("six");

let round_j1 = document.getElementById("roundj1");
let round_j2 = document.getElementById("roundj2");
let global_j1 = document.getElementById("globalj1");
let global_j2 = document.getElementById("globalj2");

let j1_global = 0;
let j2_global = 0;
let j1_round = 0;
let j2_round = 0;

let joueur = 1;
let tjoueur = 1;

function Init()
{
  j1_global = 0;
  j2_global = 0;

  j1_round = 0;
  j2_round = 0;

  alert('Le joueur n°1 commence la partie !');
}

function Roll(){
  let roll = Math.floor((Math.random() * 6) + 1);
  return roll;
}

function Tour(lancer,joueur,tjoueur)
{
  if(joueur === 1 || tjoueur === 1)
  {
    if(j1_global <= 100)
    {
      if(lancer !== 1)
      {
        j1_round += lancer;
        round_j1.innerHTML = j1_round;
      }
      else
      {
        Perdre(round_j2,round_j1,joueur);
      }
    }
  }
  if(joueur === 2 || tjoueur === 2)
  {
    if(j2_global <= 100)
    {
      if(lancer !== 1)
      {
        j2_round += lancer;
        round_j2.innerHTML = j2_round;
      }
      else
      {
        Perdre(round_j2,round_j1,joueur);
      }
    }
  }

  return {j1_global,j2_global,j1_round,j2_round,tjoueur}
}

function Perdre(round_j2,round_j1,joueur)
{
  round_j2.innerHTML = "0";
  round_j1.innerHTML = "0";
  if(joueur === 1)
  {
    tjoueur = 2;
    alert("C'est au joueur 2 de jouer !");
    j1_round = 0;
  }
  if(joueur === 2)
  {
    tjoueur = 1;
    alert("C'est au joueur 1 de jouer !");
    j2_round = 0;
  }
  console.log('test',tjoueur);
  return tjoueur;
}

function Hold(j1_global,j2_global,j1_round,j2_round,joueur)
{
  round_j2.innerHTML = "0";
  round_j1.innerHTML = "0";

  if(joueur === 1)
  {
    j1_global += j1_round;
    global_j1.innerHTML = j1_global;
    j1_round = 0;
    tjoueur = 2;
    alert("C'est au joueur 2 de jouer !");
  }

  if(joueur === 2)
  {
    j2_global += j2_round;
    global_j2.innerHTML = j2_global;
    j2_round = 0;
    tjoueur = 1;
    alert("C'est au joueur 1 de jouer !");
  }

  return {j1_global,j2_global,tjoueur}
}

buttonRD.addEventListener('click', event => {

  un.style.display = "none";
  deux.style.display = "none";
  trois.style.display = "none";
  quatre.style.display = "none";
  cinq.style.display = "none";
  six.style.display = "none";

  let lancer = Roll();

  if(lancer === 1)
  {
    un.style.display = "block";
  }
  if(lancer === 2)
  {
    deux.style.display = "block";
  }
  if(lancer === 3)
  {
    trois.style.display = "block";
  }
  if(lancer === 4)
  {
    quatre.style.display = "block";
  }
  if(lancer === 5)
  {
    cinq.style.display = "block";
  }
  if(lancer === 6)
  {
    six.style.display = "block";
  }

  if(tjoueur === 1)
  {
    joueur = 1;console.log("tamer",j1_round,lancer);
  }

  if(tjoueur === 2)
  {
    joueur = 2;console.log("tonper",j2_round,lancer);
  }

  Tour(lancer,joueur,tjoueur);
});

buttonHD.addEventListener('click', event => {

Hold(j1_global,j2_global,j1_round,j2_round,joueur);

});


/*
const buttonRD = document.getElementById('RD');

buttonRD.addEventListener('click', event => {

  un.style.display = "none";
  deux.style.display = "none";
  trois.style.display = "none";
  quatre.style.display = "none";
  cinq.style.display = "none";
  six.style.display = "none";

  lancer = Roll();

  if(lancer === 1)
  {
    un.style.display = "block";

  }
  if(lancer === 2)
  {
    deux.style.display = "block";

  }
  if(lancer === 3)
  {
    trois.style.display = "block";

  }
  if(lancer === 4)
  {
    quatre.style.display = "block";

  }
  if(lancer === 5)
  {
    cinq.style.display = "block";

  }
  if(lancer === 6)
  {
    six.style.display = "block";

  }

  if(j1_global <= 100)
  {
    if(joueur === 0)
    {
      tjoueur = 0;
      console.log(lancer,joueur,tjoueur,j1_round,j2_round);
      if(lancer === 1)
      {
        j1.innerHTML = 0;
        alert("C'est au tour du joueur 2");
        joueur = 1;
        tjoueur = 1 ;
        delete lancer;
      }
      else
      {
        j1_round += lancer;
        j1.innerHTML = j1_round;
        j1_global += lancer;
      }
    }
  }

  if(j2_global <= 100){
    if( joueur === 1)
    {
      tjoueur = 1;
      console.log(lancer,joueur,tjoueur,j1_round,j2_round);
      if(lancer === 1)
      {
        j2.innerHTML = 0;
        alert("C'est au tour du joueur 1");
        joueur = 0;
        tjoueur = 0;
        delete lancer;
      }
      else
      {
        j2_round += lancer;
        j2.innerHTML = j2_round;
        j2_global += lancer;
      }
    }
  }


  const button = document.getElementById('HD');

  button.addEventListener('click', event => {

  Hold();

  });

  function Hold(){
    console.log(joueur,tjoueur,j1_round,j2_round);
    if (tjoueur === 0){
      gj1.innerHTML = j1_global
      j1.innerHTML = 0;
      joueur = 1;
      alert("C'est au joueur 2 !");
      delete tjoueur;
      delete lancer;
    }
    if (tjoueur === 1) {
      gj2.innerHTML = j2_global;
      j2.innerHTML = 0;
      joueur = 0;
      alert("C'est au joueur 1 !");
      delete tjoueur;
      delete lancer;
    }
  }



});*/
