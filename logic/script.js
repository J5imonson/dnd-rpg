const dropDown = document.querySelector(".dropdown-menu");

function raceSelector() {
    fetch('https://www.dnd5eapi.co/api/races') // api for the get request
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i<data.results.length; i++) {
                const liTag = document.createElement("li")
                liTag.textContent = data.results[i].name
                dropDown.appendChild(liTag)
            }
        });
}
raceSelector();

