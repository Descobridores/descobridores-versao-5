const title = "title one";

// fetch file from github repository
const downloadFile = (url, fileFunction, type) => {
  fetch(url)
    .then((response) => response.text())
    .then((string) => {
      modifyFileContent(string, fileFunction, type);
    })
    .catch((error) => console.error("Error downloading file", error));
};

// parse string into html, call specific function to modify file and then download modified file
const modifyFileContent = (htmlString, fileFunction, type) => {
  // Parse the HTML string into a document object
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, type);

  const newDoc = fileFunction(doc);

  // Serialize the modified document back to a string
  const serializer = new XMLSerializer();
  const modifiedHtmlString = serializer.serializeToString(newDoc);

  // save the modified content to a new file and download it
  const blob = new Blob([modifiedHtmlString], { type: type });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `modified_file.${
    type == "application/javascript" ? "js" : "html"
  }`;
  link.click();
};

/**
 * FETCH files from github repository
 * this will download the files in github to be modified
 */

/**
 * ADD new challenge's name into titles list for "desafio.html" file
 */

const modifyChallengePage = (jsFile) => {
  // Find the position of the titles array
  const titlesArrayMatch = jsFile.match(/var titles = \[(.*?)\];/s);
  let modifiedJsCode = "";
  if (titlesArrayMatch) {
    console.log("fee");
    // Extract the existing titles array content
    const titlesArrayContent = titlesArrayMatch[1].trim();

    // Create the modified titles array content
    const modifiedTitlesArrayContent = `${titlesArrayContent},\n  ${[
      title,
    ].join(",\n  ")}`;

    // Replace the old titles array content with the modified one
    modifiedJsCode = jsFile.replace(
      titlesArrayMatch[1],
      modifiedTitlesArrayContent
    );
  }

  // Optionally, you can save the modified content to a new file
  const blob = new Blob([modifiedJsCode], { type: "application/javascript" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "modified_file.js";
  link.click();
};

// downloadFile(
//   "https://raw.githubusercontent.com/Descobridores/descobridores-versao-5/main/js/gamePage.js",
//   modifyChallengePage,
//   "application/javascript"
// );

// fetch file from github repository

fetch(
  "https://raw.githubusercontent.com/Descobridores/descobridores-versao-5/main/js/gamePage.js"
)
  .then((response) => response.text())
  .then((string) => {
    modifyChallengePage(string);
  })
  .catch((error) => console.error("Error downloading file", error));

/**
 * ADD new challenge to INDEX page
 */
const createNewChallengeDiv = (id, container) => {
  const div = document.createElement("div");
  div.id = `vinheta${id}`;
  div.className += "col-lg-3 col-md-6 col-sm-12 Vinheta";
  div.innerHTML = `
    <a
        onclick="window.localStorage.setItem('aleatorio','false'); window.localStorage.setItem('indice', ${id});"
        href="./desafio.html"
        >
        <img
            class="img-fluid img-thumbnail zoom VinhetasIMG"
            src="./assets/img/Vinhetas/vinheta-${id}.svg"
        />
    </a>`;

  container.appendChild(div);
};

const modifyIndex = (doc) => {
  // add new challenge to index page
  const indexContainer = doc.getElementById("imagensIndex");
  const containerRows = indexContainer.querySelectorAll(".row");

  // check if should create a new row of if should insert new challenge into an existing row
  let lastRowId = 4;
  containerRows.forEach((row) => {
    let rowId = parseInt(row.id.split("-")[1]);
    if (rowId > lastRowId) lastRowId = rowId;
  });

  const lastRow = doc.getElementById(`row-${lastRowId}`);

  // get last challenge's id
  let lastDivId = 0;
  lastRow.querySelectorAll("div").forEach((div) => {
    let divId = parseInt(div.id.split("a")[1]);
    if (divId > lastDivId) lastDivId = divId;
  });

  const newId = lastDivId + 1;

  if (lastRow.childElementCount < 4) {
    // insert into existing row
    createNewChallengeDiv(newId, lastRow);
  } else {
    // create new row
    const newRow = doc.createElement("div");
    newRow.id = `row-${lastRowId + 1}`;
    newRow.className += "row";
    indexContainer.appendChild(newRow);

    createNewChallengeDiv(newId, newRow);
  }

  return doc;
};

downloadFile(
  "https://raw.githubusercontent.com/Descobridores/descobridores-versao-5/main/index.html",
  modifyIndex,
  "text/html"
);
