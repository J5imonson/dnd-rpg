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

function getEnemy(){
  fetch('https://www.dnd5eapi.co/api/') // dropdown to select race
        .then(response => response.json())
        .then(data => {
            console.log(data)
})
}

let creatureHealth = 0;
/*
we will need to create a global 'for' loop for iterating through our enemies. 
-or-
we can create a variable for iterating through the array and increase that variable in the nextLevel function
*/

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
  playerHP = playerHP - playerAP;
  console.log("attack");
  console.log("Enemy Health: " + playerHP);

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
    //what do we want to happen when the player flees?
    //run gameOver?
    playerFlee = false;
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


