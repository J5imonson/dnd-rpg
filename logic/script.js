const dropDown = $(".form-select");
const startButton = $(".startButton")





function raceSelector() {
    fetch('https://www.dnd5eapi.co/api/races') // dropdown to select race
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i<data.results.length; i++) {
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
    
    let saveData = JSON.stringify({ race , characterName });
    localStorage.setItem("character", saveData);
    window.location.href = 'action.html';
}


startButton.on("click", save); {

    
}


