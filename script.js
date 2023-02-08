const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

const redbtn = document.querySelector(".Red");
const greenbtn = document.querySelector(".Green");
const bluebtn = document.querySelector(".Blue");
const yellowbtn = document.querySelector(".Yellow");
const blackbtn = document.querySelector(".Black");

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note", "animate-note");

  note.innerHTML = `
    <div class="tools">
        <div class="note-title">
            <img src="https://img.icons8.com/fluency/22/null/note.png"/>
            <input type="text" placeholder="Note" class="note-text"/>
        </div>
        <div>
            <button class="edit" title="Toggle edit"><i class="fas fa-edit"></i></button>
            <button class="delete" title="Delete Note"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}

function my_onkeydown_handler(event) {
  switch (event.keyCode) {
    case 116: // 'F5'
      event.preventDefault();
      event.keyCode = 0;
      window.status = "F5 disabled";
      break;
  }
}
document.addEventListener("keydown", my_onkeydown_handler);

greenbtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--navbar-colorTheme", "#139a43");
  document.documentElement.style.setProperty("--button-color", "#17b850");
  document.documentElement.style.setProperty("--noteBar-color", "#15a94a");
  document.documentElement.style.setProperty("--noteFont-color", "#0c5d29");
  document.documentElement.style.setProperty("--website-background", "#e3fcec");
  document.documentElement.style.setProperty("--note-background", "#c5f8d7");
});

redbtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--navbar-colorTheme", "#e4572e");
  document.documentElement.style.setProperty("--button-color", "#e86f4c");
  document.documentElement.style.setProperty("--noteBar-color", "#e6633d");
  document.documentElement.style.setProperty("--noteFont-color", "#983214");
  document.documentElement.style.setProperty("--website-background", "#fbe8e3");
  document.documentElement.style.setProperty("--note-background", "#f9dcd4");
});
bluebtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--navbar-colorTheme", "#232ed1");
  document.documentElement.style.setProperty("--button-color", "#4751e0");
  document.documentElement.style.setProperty("--noteBar-color", "#2a35db");
  document.documentElement.style.setProperty("--noteFont-color", "#12186b");
  document.documentElement.style.setProperty("--website-background", "#d8daf9");
  document.documentElement.style.setProperty("--note-background", "#bbbff4");
});
yellowbtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--navbar-colorTheme", "#edbc10");
  document.documentElement.style.setProperty("--button-color", "#f3cf4e");
  document.documentElement.style.setProperty("--noteBar-color", "#f2ca3e");
  document.documentElement.style.setProperty("--noteFont-color", "#7d6409");
  document.documentElement.style.setProperty("--website-background", "#fcf1cd");
  document.documentElement.style.setProperty("--note-background", "#fbedbd");
});
blackbtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--navbar-colorTheme", "#2e282a");
  document.documentElement.style.setProperty("--button-color", "#52484b");
  document.documentElement.style.setProperty("--noteBar-color", "#494043");
  document.documentElement.style.setProperty("--noteFont-color", "#131011");
  document.documentElement.style.setProperty("--website-background", "#e8e4e5");
  document.documentElement.style.setProperty("--note-background", "#d0c9cb");
});
