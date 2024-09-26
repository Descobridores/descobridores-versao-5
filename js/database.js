const fetchGames = async () => {
  try {
    const response = await fetch(`https://127.0.0.1:3000/games`);
    return await response.json();
  } catch (error) {
    console.error(`Error GETing games: ${error}`);
  }
};

const updateGame = async (data) => {
  try {
    const response = await fetch(`https://127.0.0.1:3000/games/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.name }),
    });

    console.log(response);
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error(`Error UPDATing game: ${error}`);
  }
};

const deleteGame = async (id) => {
  try {
    const response = await fetch(`https://127.0.0.1:3000/games/${id}`, {
      method: "DELETE",
    });

    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error(`Error DELETing game: ${error}`);
  }
};

const postGame = async (value) => {
  try {
    const response = await fetch(`https://127.0.0.1:3000/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ game_name: value }),
    });

    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error(`Error POSTing game: ${error}`);
  }
};

// MESSAGES
const fetchMessages = async (gameId) => {
  try {
    const response = await fetch(
      `https://127.0.0.1:3000/messages?game_id=${gameId}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

const addMessage = async (data) => {
  try {
    const response = await fetch(`https://127.0.0.1:3000/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error(`Error POSTing message: ${error}`);
  }
};

const deleteMessage = async (id) => {
  try {
    const response = await fetch(`https://127.0.0.1:3000/messages/${id}`, {
      method: "DELETE",
    });

    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error(`Error DELETing message: ${error}`);
  }
};
