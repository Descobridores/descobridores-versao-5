// modal popup with challenge rules
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

    span.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
};

// chat button
const redirect = (gameId) => {
  window.location.href = `chat.html?desafio=${gameId}`;
};

// conffeti effect
const addConfettiEffect = () => {
  const confetti = `
    <div class="App">
        <div class="confetti-149"></div>
        <div class="confetti-148"></div>
        <div class="confetti-147"></div>
        <div class="confetti-146"></div>
        <div class="confetti-145"></div>
        <div class="confetti-144"></div>
        <div class="confetti-143"></div>
        <div class="confetti-142"></div>
        <div class="confetti-141"></div>
        <div class="confetti-140"></div>
        <div class="confetti-139"></div>
        <div class="confetti-138"></div>
        <div class="confetti-137"></div>
        <div class="confetti-136"></div>
        <div class="confetti-135"></div>
        <div class="confetti-134"></div>
        <div class="confetti-133"></div>
        <div class="confetti-132"></div>
        <div class="confetti-131"></div>
        <div class="confetti-130"></div>
        <div class="confetti-129"></div>
        <div class="confetti-128"></div>
        <div class="confetti-127"></div>
        <div class="confetti-126"></div>
        <div class="confetti-125"></div>
        <div class="confetti-124"></div>
        <div class="confetti-123"></div>
        <div class="confetti-122"></div>
        <div class="confetti-121"></div>
        <div class="confetti-120"></div>
        <div class="confetti-119"></div>
        <div class="confetti-118"></div>
        <div class="confetti-117"></div>
        <div class="confetti-116"></div>
        <div class="confetti-115"></div>
        <div class="confetti-114"></div>
        <div class="confetti-113"></div>
        <div class="confetti-112"></div>
        <div class="confetti-111"></div>
        <div class="confetti-110"></div>
        <div class="confetti-109"></div>
        <div class="confetti-108"></div>
        <div class="confetti-107"></div>
        <div class="confetti-106"></div>
        <div class="confetti-105"></div>
        <div class="confetti-104"></div>
        <div class="confetti-103"></div>
        <div class="confetti-102"></div>
        <div class="confetti-101"></div>
        <div class="confetti-100"></div>
        <div class="confetti-99"></div>
        <div class="confetti-98"></div>
        <div class="confetti-97"></div>
        <div class="confetti-96"></div>
        <div class="confetti-95"></div>
        <div class="confetti-94"></div>
        <div class="confetti-93"></div>
        <div class="confetti-92"></div>
        <div class="confetti-91"></div>
        <div class="confetti-90"></div>
        <div class="confetti-89"></div>
        <div class="confetti-88"></div>
        <div class="confetti-87"></div>
        <div class="confetti-86"></div>
        <div class="confetti-85"></div>
        <div class="confetti-84"></div>
        <div class="confetti-83"></div>
        <div class="confetti-82"></div>
        <div class="confetti-81"></div>
        <div class="confetti-80"></div>
        <div class="confetti-79"></div>
        <div class="confetti-78"></div>
        <div class="confetti-77"></div>
        <div class="confetti-76"></div>
        <div class="confetti-75"></div>
        <div class="confetti-74"></div>
        <div class="confetti-73"></div>
        <div class="confetti-72"></div>
        <div class="confetti-71"></div>
        <div class="confetti-70"></div>
        <div class="confetti-69"></div>
        <div class="confetti-68"></div>
        <div class="confetti-67"></div>
        <div class="confetti-66"></div>
        <div class="confetti-65"></div>
        <div class="confetti-64"></div>
        <div class="confetti-63"></div>
        <div class="confetti-62"></div>
        <div class="confetti-61"></div>
        <div class="confetti-60"></div>
        <div class="confetti-59"></div>
        <div class="confetti-58"></div>
        <div class="confetti-57"></div>
        <div class="confetti-56"></div>
        <div class="confetti-55"></div>
        <div class="confetti-54"></div>
        <div class="confetti-53"></div>
        <div class="confetti-52"></div>
        <div class="confetti-51"></div>
        <div class="confetti-50"></div>
        <div class="confetti-49"></div>
        <div class="confetti-48"></div>
        <div class="confetti-47"></div>
        <div class="confetti-46"></div>
        <div class="confetti-45"></div>
        <div class="confetti-44"></div>
        <div class="confetti-43"></div>
        <div class="confetti-42"></div>
        <div class="confetti-41"></div>
        <div class="confetti-40"></div>
        <div class="confetti-39"></div>
        <div class="confetti-38"></div>
        <div class="confetti-37"></div>
        <div class="confetti-36"></div>
        <div class="confetti-35"></div>
        <div class="confetti-34"></div>
        <div class="confetti-33"></div>
        <div class="confetti-32"></div>
        <div class="confetti-31"></div>
        <div class="confetti-30"></div>
        <div class="confetti-29"></div>
        <div class="confetti-28"></div>
        <div class="confetti-27"></div>
        <div class="confetti-26"></div>
        <div class="confetti-25"></div>
        <div class="confetti-24"></div>
        <div class="confetti-23"></div>
        <div class="confetti-22"></div>
        <div class="confetti-21"></div>
        <div class="confetti-20"></div>
        <div class="confetti-19"></div>
        <div class="confetti-18"></div>
        <div class="confetti-17"></div>
        <div class="confetti-16"></div>
        <div class="confetti-15"></div>
        <div class="confetti-14"></div>
        <div class="confetti-13"></div>
        <div class="confetti-12"></div>
        <div class="confetti-11"></div>
        <div class="confetti-10"></div>
        <div class="confetti-9"></div>
        <div class="confetti-8"></div>
        <div class="confetti-7"></div>
        <div class="confetti-6"></div>
        <div class="confetti-5"></div>
        <div class="confetti-4"></div>
        <div class="confetti-3"></div>
        <div class="confetti-2"></div>
        <div class="confetti-1"></div>
        <div class="confetti-0"></div>
    </div>`;

  const div = document.createElement("div");
  div.classList.add("root");
  div.innerHTML = confetti;

  document.querySelector(".game__container").prepend(div);
};

// show when user successfully completed the challenge
const showSucessCard = (gameDivs) => {
  addConfettiEffect();

  const sound = new Audio("./assets/sounds/correct_4.wav");
  sound.play();

  const containers = gameDivs.map((className) => {
    return document.querySelector(className);
  });

  setTimeout(() => {
    containers.forEach((el) => {
      el.style.opacity = "0.1";
    });
    document.getElementById("success__card").style.display = "flex";

    // document.querySelector(".game__container").style.justifyContent = "center";
  }, 4000);
};
