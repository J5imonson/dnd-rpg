const dropDown = $(".form-select");
const startButton = $(".startButton")





function raceSelector() {
    fetch('https://www.dnd5eapi.co/api/races') // dropdown to select race
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                const optionTag = $("<option>")
                optionTag.text(data.results[i].name)
                dropDown.append(optionTag);
            }
        });
}

raceSelector();

function save() {
    const race = dropDown.find(":selected").text()
    const characterName = $(".form-control").val()

    if (race == "Select Race" || characterName == "") {
        alert("None shall pass!");
        document.location.href = "./index.html";
    }
    else {
        window.location.href = 'action.html';
    }
    let saveData = JSON.stringify({ race, characterName });
    localStorage.setItem("character", saveData);
}


startButton.on("click", save);


