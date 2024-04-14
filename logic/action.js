const userInput = $(".action-input");
const userAttack = $("#attack");
const userHeal = $("#heal");
const userFlee = $("#flee");

/*
Somewhere in here we will create and add our array of our enemy objects
*/

/*
The following variables are very much placeholders for POC. Feel free to iterate upon as needed!
*/

//let creatureHealth = array[0].Health? this is assuming we create an array of objects with each creature having its own HP
let playerHP = 100;
let enemyHP = 100; //will replace with creatureHealth
let playerAP = 10;
let enemyAP = 10;
let playerHeal = 25;
let playerFlee = false;
let isGameOver = false;
let isNextLevel = false;



function attack(){
  enemyHP = enemyHP - playerAP;
  console.log("attack");
  /*
  --WILL UNCOMMENT WHEN nextLevel FUNCTION IS WRITTEN--
  if(enemyHealth <= 0){
    nextLevel();
  }
  */
}

function heal(){
  playerHP = playerHP + playerHeal;
  console.log("heal");

  /*
  --IF WE WANT TO SET A MAX HEALTH VALUE: UNCOMMENT AND DELETE LINE 36--

   function healPlayer(){
  playerHP = playerHP + playerHeal;
    if(playerHP > maxHealth){
      playerHP = maxHealth;
    }
  }

  if(playerHP < maxHealth){
    run healPlayer()
  }else{
    alert("You are already at max health")
  }


  */
}

function flee(){
  playerFlee = true;
  if(playerFlee){
    //what do we want to happen when the player flees?
    //run gameOver?
  }
  console.log(playerFlee);
}

function enemyAttack(){
  playerHP = playerHP - enemyAP;

  /*
  --WILL UNCOMMENT WHEN endGame FUNCTION IS WRITTEN--
  if(playerHealth <= 0){
    endGame();
  }
  */
}



function nextLevel(){
  /*
    -set all variables back to their base value
    -itterate on the array of enemies to load in next enemies stats and image
  */
}

function gameOver(){
  /*
    -run gameOver html and script
  */
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



