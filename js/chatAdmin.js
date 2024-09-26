const adminForm = document.getElementById("chat__form__admin");
const removeMsgBtn = document.getElementById("remove__message");
const editChatContainer = document.getElementById("edit__chat__container");
const chat__names = document.querySelector(".edit__chat__names");
let selectedMessage = -1;

// SEND MESSAGE LOGIC
const sendAdminMessage = () => {
  const name = document.getElementById("user__name").value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;
  const message = document.getElementById("user__message").value;
  const dateStr = new Date();

  const avatarID = avatar.split("avatar")[1];

  const messageDiv = document.createElement("div");

  messageDiv.classList.add("message__container");
  messageDiv.classList.add("monitor__message");

  messageDiv.innerHTML = createMessageHTML(name, dateStr, avatarID, message);
  document.getElementById("messages").appendChild(messageDiv);

  // send to database
  game_id = parseInt(activeGame.split("-")[1]) + 1;
  const messageData = {
    username: name,
    date: formatDateToMySQL(),
    avatar_number: avatarID,
    message,
    is_admin: 1,
    game_id,
  };

  addMessage(messageData)
    .then(() => {
      // location.reload();
    })
    .catch((error) => console.error(error));
};
// message form event listener
adminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formValidation()) {
    sendAdminMessage();
    closeModal();
  }
});

// REMOVE MESSAGES LOGIC
const removeMessage = (msgId) => {
  if (
    window.confirm(
      "Tem certeza que deseja excluir permanentemente essa mensagem?"
    )
  ) {
    deleteMessage(msgId)
      .then((response) => {
        if (response) {
          if (!alert("Mensagem excluída!")) {
            window.location.reload();
          }
        } else {
          if (!alert("Ocorreu um erro. Tente de novo mais tarde.")) {
            window.location.reload();
          }
        }
      })
      .catch((error) => {
        console.error("ERROR: could delete message!", error);
        window.alert("Ocorreu um erro. Tente de novo mais tarde.");
      });
  }
};

const showDeleteMsgBtn = (messageEl) => {
  // clear other selected message from style
  if (selectedMessage != -1)
    selectedMessage.classList.remove("selected__message");

  selectedMessage = messageEl;

  // add styles
  messageEl.classList.add("selected__message");
  removeMsgBtn.parentNode.removeChild(removeMsgBtn);

  selectedMessage.appendChild(removeMsgBtn);
  removeMsgBtn.style.display = "flex";
};

window.addEventListener("html-created", () => {
  document.querySelectorAll(".message__container").forEach((el) => {
    el.classList.add("admin__message__container");
    el.addEventListener("click", () => {
      showDeleteMsgBtn(el);
    });
  });
});

removeMsgBtn.addEventListener("click", () => {
  removeMessage(removeMsgBtn.parentElement.id.split("__")[1]);
});
