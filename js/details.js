const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const characterUrl = "https://rickandmortyapi.com/api/character/" + id;

async function getCharacterById() {
  const header = document.querySelector("h1");

  try {

    // id/name
    const idResponse = await fetch(characterUrl);
    const idResult = await idResponse.json();
    header.innerHTML = idResult.name;

    console.log(idResult);

    // image 
    const image = document.querySelector(".details-image");
    image.src = idResult.image;
    image.alt = idResult.name;

    // status
    const status = document.querySelector("#status");
    status.innerHTML = idResult.status;

    // species
    const species = document.querySelector("#species");
    species.innerHTML = idResult.species;

    // origin 
    const origin = document.querySelector("#origin");
    origin.innerHTML = idResult.origin.name;

    // location
    const location = document.querySelector("#location");
    location.innerHTML = idResult.location.name;

  } catch (error) {
    document.location.href = "error.html";
    console.log(error);
  }
}

getCharacterById();
