
function raceSelector() {
fetch('https://www.dnd5eapi.co/api/races') // api for the get request
    .then(response => response.json())
    .then(data => console.log(data));
    
}
raceSelector(); 

