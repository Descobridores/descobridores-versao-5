const desafios = document.getElementById("menu-two-columns");
desafios.innerHTML = "";

fetchGames()
  .then((gamesInfo) => {
    gamesInfo.forEach((game) => {
      let li = document.createElement("li");

      li.innerHTML = `<a
			class="dropdown-item"
			onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', ${
        game.id - 1
      });"
			href="./desafio.html"
			>${game.game_name}
		</a>`;

      desafios.appendChild(li);
    });
    // make data available for other files to use
    const dataEvent = new CustomEvent("dataFetched", { detail: gamesInfo });
    window.dispatchEvent(dataEvent); // Dispatch the custom event with the data
  })
  .catch((error) => console.error("Error fetching games:", error));
