const charactersUrl = "https://rickandmortyapi.com/api/character/";

async function fetchCharacters() {
    try {
        const charactersResponse = await fetch(charactersUrl);
        const characters = await charactersResponse.json();

        displayCharacter(characters.results);
        console.log(characters.results);

    } catch (error) {
        document.location.href = "error.html";
        console.log(error);

    } finally {
        const loader = document.querySelector(".loader");
        loader.style.display = "none"
    }
}

fetchCharacters();


function displayCharacter(character) {

    const characterContainer = document.querySelector(".row.results");

    let html = "";

    for (let i = 0; i < character.length; i++) {

        let typeValue = "Unknown";

        if (character[i].type !== "") {
            typeValue = character[i].type;
        }

        html += `<div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img class="image" src="${character[i].image} "
                            alt = "${character[i].name}" >
                        <div class="details">
                            <h4 class="name">${character[i].name}</h4>
                            <p>Type: ${typeValue}</p>
                            <p>Episode count: ${character[i].episode.length}</p>
                            <a class="btn btn-primary" href="details.html?id=${character[i].id}">Details</a>
                        </div>
                     </div>
                </div>
            `;
    }

    characterContainer.innerHTML = html;
}