// Get the data from the hidden element
const dataContainer = document.getElementById("messages-data");
const messagesData = dataContainer.getAttribute("data-messages");
const form = document.getElementById("chat__form");
const modal = document.getElementById("msgSettings");

// function to create the HTML structure for each message
const createMessageHTML = (name, date, avatar, message) => {
  return `<div class="user__message message__container">
    <div class="message__div">
      <img src="./assets/img/chat/${avatar}.jpg" alt="" />
      <p>
        ${message}
      </p>
    </div>
    <div>
      <span>${name}</span>
      <span>${date}</span>
      </div>
  </div>`;
};

// function to format the data object
const formatDate = (date) => {
  const padZero = (num) => (num < 10 ? "0" : "") + num;

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Months are zero-based
  const year = date.getFullYear();

  return `${hours}:${minutes}, ${day}/${month}/${year}`;
};

// function to append a new message
const saveMessage = (name, avatar, message) => {
  const newMessage = {
    name: name,
    date: formatDate(new Date()),
    image: avatar,
    message: message,
  };

  console.log(newMessage);

  container.innerHTML += createMessageHTML(
    name,
    formatDate(new Date()),
    avatar,
    message
  );
};

// Parse the JSON data
const messages = JSON.parse(messagesData);

// Loop through the dataset and add each message to the container
const container = document.getElementById("messages");
messages.forEach((item) => {
  container.innerHTML += createMessageHTML(
    item.name,
    item.date,
    item.image,
    item.message
  );
});

// EVENT LISTENERS

// open and close modal popup with mensagem settings
document.getElementById("send__icon").addEventListener("click", () => {
  // make backgroung almost disappear
  document.getElementById("desafios").style.opacity = "0.1";
  document.querySelector(".messages__wrap").style.opacity = "0.1";

  // show modal
  modal.style.display = "block";

  // focus on modal
  modal.scrollIntoView({ behavior: "smooth" });

  document.getElementById("user__message").value = document.getElementById(
    "send__message__input"
  ).value;
});

// close the modal when the user clicks on cancel button
document.getElementById("cancel__message").addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  document.getElementById("desafios").style.opacity = "1";
  document.querySelector(".messages__wrap").style.opacity = "1";
});

// send message button
// document.getElementById("send__message__btn").addEventListener("click", (e) => {
//   e.preventDefault();

//   saveMessage(
//     document.getElementById("user__name").value,
//     document.querySelector('input[name="avatar"]:checked').value,
//     document.getElementById("user__message").value
//   );

//   //location.reload();
// });

// form VALIDATION
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check if any of the fields are empty
  let isAvatarNull = true;

  document.querySelectorAll('input[name="avatar"]').forEach((el) => {
    if (el.checked) isAvatarNull = false;
  });

  avatarField = document.querySelector(".avatar__container");
  nameField = document.getElementById("user__name");
  messageField = document.getElementById("user__message");

  // clean form from invalid styles
  if (avatarField.classList.contains("invalid__field"))
    avatarField.classList.remove("invalid__field");

  if (nameField.classList.contains("invalid__field"))
    nameField.classList.remove("invalid__field");

  if (messageField.classList.contains("invalid__field"))
    messageField.classList.remove("invalid__field");

  if (isAvatarNull) {
    console.log("No avatar passed");
    avatarField.classList.add("invalid__field");
  } else if (!nameField.value) {
    console.log("No name passed");
    nameField.classList.add("invalid__field");
  } else if (!messageField.value) {
    console.log("No message passed");
    messageField.classList.add("invalid__field");
  } else {
    console.log(
      document.getElementById("user__name").value,
      document.querySelector('input[name="avatar"]:checked').value,
      document.getElementById("user__message").value
    );

    // reCaptcha VALIDATION
    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0) {
      document.querySelector(".g-recaptcha").classList.add("invalid__field");
      throw new Error("Captcha not complete");
    }
  }
});
