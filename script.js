
let data_pikachu = {
    "id":"",
    "name":"",
    "type":"",
    "image":""
};

let btn = document.getElementById("Get");
btn.addEventListener("click", async () => {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/pikachu",
        {
            method:"GET"
        }
    );

    const json = await response.json();
    const results = json.results;

    data_pikachu.id = json.id;
    data_pikachu.name = json.name;
    data_pikachu.type = json.types[0].type.name;
    data_pikachu.image = json.sprites.front_default;

    let pokeID = document.getElementById("pokeID");
    let pokeLogo = document.getElementById("pokeLogo");
    let pokeType = document.getElementById("pokeType");
    let container = document.getElementById("card");

    container.style.backgroundColor = "rgba(231,200,89,255)";
    container.style.border = "solid rgba(208,179,73,255) 4px";

    pokeID.innerHTML = `${data_pikachu.id}: ${data_pikachu.name}`;
    pokeID.style.fontSize = "24px";
    pokeID.style.fontFamily = "Arial";
    pokeID.style.color = "white";

    pokeLogo.setAttribute("src", data_pikachu.image);
    pokeLogo.style.width="300px";
    pokeLogo.style.height="300px";

    pokeType.innerHTML = `Type : ${data_pikachu.type}`;
    pokeType.style.fontSize = "24px";
    pokeType.style.fontFamily = "Arial";
    pokeType.style.color = "white";
});

