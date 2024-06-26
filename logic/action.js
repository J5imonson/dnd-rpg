const userInput = $(".action-input");
const userAttack = $("#attack");
const userHeal = $("#heal");
const userFlee = $("#flee");

const userIDname = $("#userID");
const userIDhealth = $("#userHealth");
const userIDrace = $("#userRace");
const enemyIDname = $("#enemyID");
const enemyIDhealth = $("#enemyHealth");
const userIDheals = $("#maxHeals");

const enemyImage = $('#monsterImage');

const goblin = {
  name: "goblin",
  attack: 4,
  health: 40,
  xp: 10,
  image: "./assets/images/goblin.jpg",
}
const ogre = {
  name: "ogre",
  attack: 6,
  health: 60,
  xp: 15,
  image: "./assets/images/ogre.jpeg",
}
const cyclops = {
  name: "cyclops",
  attack: 10,
  health: 100,
  xp: 25,
  image: "./assets/images/cyclops.png",
}
const basilisk = {
  name: "basilisk",
  attack: 4,
  health: 40,
  xp: 50,
  image: "./assets/images/basilisk.jpeg",
}
const gary = {
  name: "gary",
  attack: 24,
  health: 500,
  xp: 100,
  image: "./assets/images/garyFace.jpg",
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
let maxHeals = 4;
let test = false;

let string = localStorage.getItem("character");
let savedCharacter = JSON.parse(string) || [];

const playerInfo = {
  name: savedCharacter.characterName,
  race: savedCharacter.race
};

alert("You awake alone in a forest, with only your weapon by your side...");

function attack() {
  enemyHP = enemyHP - playerAP;
  console.log("attack");
  console.log("Enemy Health: " + enemyHP);

  enemyImage.addClass('animate__animated');
  enemyImage.addClass('animate__wobble');
  if (enemyHP <= 0) {
    nextLevel();
  }
}


function heal() {
  console.log("heal");
  console.log("Player Health:" + playerHP);

  function healPlayer() {
    playerHP = playerHP + playerHeal;
    alert("You regain 25HP!");
    if (playerHP > maxHealth) {
      playerHP = maxHealth;
    }
  }

  if (playerHP < maxHealth && maxHeals > 0) {
    healPlayer()
    maxHeals--;
  } else if (maxHeals == 0) {
    alert("You have no more heals")
  } else {
    alert("You're already at max health")
  }
  enemyAttack();
}

function flee() {
  playerFlee = true;
  if (playerFlee) {
    playerFlee = false;
    gameOver();
  }
  console.log(playerFlee);
  alert("Cowards have no place in a game like this!🐔");
}

function enemyAttack() {
  playerHP = playerHP - enemyAP;
  console.log(playerHP);
  test = false;
  refreshInfo();


  if (playerHP <= 0) {
    gameOver();
    alert("The enemy has defeated you.")
  }
}

function nextLevel() {
  playerHP = 100;
  maxHeals = maxHeals + 2;

  enemyIndex++;
  enemyAP = enemyList[enemyIndex].attack;
  enemyHP = enemyList[enemyIndex].health;
  enemyName = enemyList[enemyIndex].name;
  const textPrompts = [
    "The old man promised you treasure. He also promised you danger. So far, it has been mostly the latter...",
    "Maybe your friend is around this next turn...",
    "What's that? Who's there!?",
    "You press onwards. You must escape. As unlikely as that seems...",
    "I  want to be an adventurer, you said. It'll be fun, you said.",
    "What did I just step in? Ew! It's on my boots! EEEWWW!"]

  const randomPrompt = textPrompts[Math.floor(Math.random() * textPrompts.length)];
  alert(randomPrompt);
  populateInfo();

}

function gameOver() {
  window.location.href = 'gameOver.html';
}

function populateInfo() {
  userIDname.text("name: " + playerInfo.name);
  userIDhealth.text("health: " + playerHP);
  userIDrace.text("race: " + playerInfo.race);
  enemyIDname.text("enemy: " + enemyList[enemyIndex].name);
  enemyIDhealth.text("enemy health: " + enemyHP);
  userIDheals.text("heals: " + maxHeals);
  enemyImage.attr("src", enemyList[enemyIndex].image);
}

function refreshInfo() {
  userIDhealth.text("health: " + playerHP);
  enemyIDhealth.text("enemy health: " + enemyHP);
  userIDheals.text("heals: " + maxHeals);
}


populateInfo();



userAttack.on("click", function (e) {
  e.preventDefault();
  enemyImage.removeClass('animate__wobble');
  enemyImage.removeClass('animate__animated');
  attack();
});

userHeal.on("click", function (e) {
  e.preventDefault();
  heal();
});

userFlee.on("click", function (e) {
  e.preventDefault();
  flee();
});

enemyImage.on('animationend', (event) => {
  event.stopPropagation();
  event.preventDefault();
  enemyImage.removeClass('animate__wobble');
  enemyImage.removeClass('animate__animated');

  enemyAttack();
});