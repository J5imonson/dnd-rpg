const userInput = $(".action-input");
const userAttack = $("#attack");
const userHeal = $("#heal");
const userFlee = $("#flee");

const goblin = {
  attack: 4,
  health: 40,
  xp: 10,
}
const ogre = {
  attack: 6,
  health: 60,
  xp: 15,
}
const cyclops = {
  attack: 10,
  health: 100,
  xp: 25,
}
const basilisk = {
  attack: 4,
  health: 40,
  xp: 50,
}
const gary = {
  attack: 25,
  health: 500,
  xp: 100,
}

const enemyList = [goblin, ogre, cyclops, basilisk, gary];



let creatureHealth = 0;
let playerHP = 100;
let enemyHP = 100; //will replace with creatureHealth
let playerAP = 10;
let enemyAP = 10;
let playerHeal = 25;
let playerFlee = false;
let isGameOver = false;
let isNextLevel = false;
let maxHealth = 200;







function attack(){
  enemyHP = enemyHP - playerAP;
  console.log("attack");
  console.log("Enemy Health: " + enemyHP);

  if(playerHP <= 0){
    gameOver();
  }
  /*
  --WILL UNCOMMENT WHEN nextLevel FUNCTION IS WRITTEN--
  if(enemyHealth <= 0){
    nextLevel();
  }
  */
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
  /*
    -set all variables back to their base value
    -itterate on the array of enemies to load in next enemies stats and image
    -increase array variable if needed
  */
}

function gameOver(){
  window.open("gameOver.html");
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

getEnemy();


