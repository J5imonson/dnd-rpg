const userInput = $(".action-input");
const userAttack = $("#attack");
const userHeal = $("#heal");
const userFlee = $("#flee");

const goblin = {
  name: "goblin",
  attack: 4,
  health: 40,
  xp: 10,
}
const ogre = {
  name: "ogre",
  attack: 6,
  health: 60,
  xp: 15,
}
const cyclops = {
  name: "cyclops",
  attack: 10,
  health: 100,
  xp: 25,
}
const basilisk = {
  name: "basilisk",
  attack: 4,
  health: 40,
  xp: 50,
}
const gary = {
  name: "gary",
  attack: 24,
  health: 500,
  xp: 100,
}

const enemyList = [goblin, ogre, cyclops, basilisk, gary];

let enemyIndex = 0;
let playerHP = 100;
let playerAP = 10;
let enemyHP = enemyList[0].health;
let enemyAP = enemyList[0].attack;
let enemyName = enemyList[0].name;
let playerHeal = 25;
let playerFlee = false;
let isGameOver = false;
let isNextLevel = false;
let maxHealth = 200;




let string = localStorage.getItem("character");
let savedCharacter = JSON.parse(string) || [];


const playerInfo = {
  name: savedCharacter.characterName, 
  race: savedCharacter.race
};







function attack(){
  enemyHP = enemyHP - playerAP;
  console.log("attack");
  console.log("Enemy Health: " + enemyHP);

  if(enemyHP <= 0){
    nextLevel();
  }

  enemyAttack();
  
}

function heal(){
  console.log("heal");
  console.log("Player Health: " + playerHP);

  function healPlayer(){
    playerHP = playerHP + playerHeal;

    if(playerHP > maxHealth){
      playerHP = maxHealth;
    }
  }

  if(playerHP < maxHealth){
    healPlayer()
  }else{
    alert("You're already at max health")
  }

  enemyAttack();

}

function flee(){
  playerFlee = true;
  if(playerFlee){
    playerFlee = false;
    gameOver();
  }
  console.log(playerFlee);
}

function enemyAttack(){
  playerHP = playerHP - enemyAP;

  if(playerHP <= 0){
    gameOver();
  } 
}

function nextLevel(){
   playerHP = 100;

   enemyIndex++;
   enemyAP = enemyList[enemyIndex].attack;
   enemyHP = enemyList[enemyIndex].health;
   enemyName = enemyList[enemyIndex].name;

   //text[enemyIndex].object
}

function gameOver(){
  window.location.href = 'gameOver.html';
}




userAttack.on("click", function(e){
  e.preventDefault();
  attack();
});

userHeal.on("click", function(e){
  e.preventDefault();
  heal();
});

userFlee.on("click", function(e){
  e.preventDefault();
  flee();
});


// getEnemy();



