const dropDown = document.querySelector(".form-select");


// function save(){
// let saveData = JSON.stringify(taskList);
//         localStorage.setItem("character", saveData);
//     }

//   let string = localStorage.getItem("character");
//         let taskList = JSON.parse(string) || [];



function raceSelector() {
    fetch('https://www.dnd5eapi.co/api/races') // dropdown to select race
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i<data.results.length; i++) {
                const optionTag = document.createElement("option")
                optionTag.textContent = data.results[i].name
                dropDown.appendChild(optionTag)  
            }
        });
}

raceSelector();

// function startGame(){
//     .startbutton.addEventListener("click", save())
// }

