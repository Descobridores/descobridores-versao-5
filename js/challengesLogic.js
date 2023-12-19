// model popup with challenge rules
const showRulesModel = (index) => {
  document.getElementById("show__rules__btn").addEventListener("click", () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    modal.style.overflow = "hidden";

    document
      .getElementById("img01")
      .setAttribute("src", `./assets/img/Desafios/${index}.svg`);

    // When the user clicks on <span> (x), close the modal
    const span = document.getElementById("fechar");
    span.onclick = function () {
      modal.style.display = "none";
    };
  });
};
