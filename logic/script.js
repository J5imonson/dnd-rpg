const dropDown = $(".form-select");
const startButton = $(".startButton")

$("#song")[0].volume = 0.2;

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

window.addEventListener('click', () => {
    document.getElementById("song").play();
});

startButton.on("click", save);


