// CODE FOR WHEN THERE IS DATABASE
// const games = document.getElementById("menu-two-columns");
// games.innerHTML = "";

// fetchGames()
//   .then((gamesInfo) => {
//     gamesInfo.forEach((game) => {
//       let li = document.createElement("li");

//       li.innerHTML = `<a
// 			class="dropdown-item"
// 			onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', ${
//         game.id - 1
//       });"
// 			href="./desafio.html"
// 			>${game.game_name}
// 		</a>`;

//       games.appendChild(li);
//     });
//     // make data available for other files to use
//     const dataEvent = new CustomEvent("dataFetched", { detail: gamesInfo });
//     window.dispatchEvent(dataEvent); // Dispatch the custom event with the data
//   })
//   .catch((error) => console.error("Error fetching games:", error));

// APPEND HEADER
const getHeader = () => {
  const header = `
  <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container" id="mainNav">
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul
                id="menu"
                class="navbar-nav text-uppercase ml-auto"
                style="margin-right: auto !important"
              >
                <li class="parent nav-item dropdown">
                  <a class="nav-link" href="javascript:"
                    ><b class="BotaoNavMain">Descobridores</b></a
                  >
                  <ul class="child">
                    <li>
                      <a href="./Oque.html" class="dropdown-item" href="#"
                        >O que é</a
                      >
                    </li>
                    <li class="parent">
                      <a class="dropdown-item" href="javascript:"
                        >Quem somos<span class="expand">»</span></a
                      >
                      <ul class="child">
                        <li>
                          <a
                            class="dropdown-item"
                            href="./apresentacao.html"
                            nowrap
                            >Apresentação</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="./coordenadores.html"
                            nowrap
                            >Coordenador</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="./sub-coordenadores.html"
                            nowrap
                            >Sub-coordenadores</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="./orientadores.html"
                            nowrap
                            >Orientadores</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="./professores.html"
                            nowrap
                            >Professores</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="./monitores.html"
                            nowrap
                            >Monitores</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="./revisao.html" nowrap
                            >Coordenação de Revisão e Linguagem</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="./diagramacao.html"
                            nowrap
                            >Arte gráfica, Design, Ilustração</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="./site.html" nowrap
                            >Website</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="./acoes.html"
                        >Nossas Ações</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="parent nav-item">
                  <a class="nav-link" href="javascript:" id="navbarDropdown"
                    ><b class="BotaoNavMain">Desafios</b></a
                  >
                  <ul id="menu-two-columns" class="child">
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 0);"
                        href="./desafio.html"
                        >Aposte na Soma</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 1);"
                        href="./desafio.html"
                        >Construindo Pipas</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 2);"
                        href="./desafio.html"
                        >Desafio da Escada</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 3);"
                        href="./desafio.html"
                        >Desafio da Ilha</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 4);"
                        href="./desafio.html"
                        >Desafio da Pá Suja</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 5);"
                        href="./desafio.html"
                        >Desafio das Bandeiras</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 6);"
                        href="./desafio.html"
                        >Desafio das Varetas</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 7);"
                        href="./desafio.html"
                        >Desafio do Dragão</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 8);"
                        href="./desafio.html"
                        >Flores no Jardim</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 9);"
                        href="./desafio.html"
                        >Gincana das Alturas</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 10);"
                        href="./desafio.html"
                        >Milu e Nala</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 11);"
                        href="./desafio.html"
                        >Monstros na Roda</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 12);"
                        href="./desafio.html"
                        >Organizando o Curral</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 13);"
                        href="./desafio.html"
                        >Palitos Coloridos</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 14);"
                        href="./desafio.html"
                        >Quantos Retângulos?</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 15);"
                        href="./desafio.html"
                        >Sequência de Triângulos</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 16);"
                        href="./desafio.html"
                        >Torre da Matilda</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 17);"
                        href="./desafio.html"
                        >Triângulos Amigos</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 18);"
                        href="./desafio.html"
                        >Triângulos no Pentágono</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', 19);"
                        href="./desafio.html"
                        >Triângulos Numéricos</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onclick=""
                        href="./desafio.html"
                        style="color: #ec4326"
                        >Banco de Problemas</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="parent nav-item">
                  <a class="nav-link" href="javascript:"
                    ><b class="BotaoNavMain">Educadores</b></a
                  >
                  <ul class="child">
                    <li>
                      <a class="dropdown-item" href="./implementacao.html"
                        >Implementação</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="./anexos.html"
                        >Implementação (anexos)</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="./explicacoes.html"
                        >Explicações iniciais para as análises</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="parent nav-item">
                  <a class="nav-link" href="javascript:"
                    ><b class="BotaoNavMain">Mídia</b></a
                  >
                  <ul class="child">
                    <li>
                      <a class="dropdown-item" href="./videos.html">Vídeos</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="./fotos.html">Fotos</a>
                    </li>
                  </ul>
                </li>
                <li class="parent nav-item">
                  <a class="nav-link" href="./contato.html"
                    ><b class="BotaoNavMain">Contato</b></a
                  >
                </li>
                <li class="parent nav-item">
                  <a class="nav-link" href="./links.html"
                    ><b class="BotaoNavMain">Links</b></a
                  >
                </li>
                <li class="parent nav-item dropdown">
                  <a class="nav-link" href="javascript:" id="navbarDropdown">
                    <img
                      class="Lupa"
                      src="./assets/img/Lupa.png"
                      alt="Buscar"
                    />
                  </a>
                  <ul class="child">
                    <li>
                      <form style="display: flex">
                        <input
                          type="text"
                          id="busca"
                          placeholder="Buscar Desafio"
                        />
                        <button
                          class="btn"
                          onclick="window.localStorage.setItem('busca',document.getElementById('busca').value);"
                        >
                          <a href="busca.html">Buscar</a>
                        </button>
                      </form>
                    </li>
                  </ul>
                </li>
                <!-- Organiza espaçamento menu -->
                <li>
                  <a><b style="color: white">Links</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>`;

  document.getElementById("container").appendChild(header);
};
