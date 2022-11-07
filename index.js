//Delete handler

const list = document.querySelector(".words-list ul");

list.addEventListener("click", (e) => {
  if (e.target.className == "button delete") {
    const li = e.target.parentElement.parentElement;
    list.removeChild(li);
  }
});

//edit handler
list.addEventListener("click", (e) => {
  if (e.target.className == "button edit") {
    const li = e.target.parentElement.parentElement;
    const value = li.querySelector(".meaning").textContent;

    //remove meaning from word context element
    const wordContext = li.querySelector(".word-context");
    wordContext.removeChild(wordContext.lastElementChild);

    const textArea = document.createElement("textarea");
    const saveBtn = document.createElement("button");

    //textarea
    wordContext.append(textArea);
    textArea.className = "textarea";
    textArea.setAttribute("rows", 5);
    textArea.textContent = value;

    //saveButton

    wordContext.append(saveBtn);
    saveBtn.className = "button save";
    saveBtn.textContent = "Save";

    saveBtn.addEventListener("click", (e) => {
      // e.preventDefault();

      const text = textArea.value;
      const meaning = document.createElement("span");
      meaning.className = "meaning";
      meaning.textContent = text;

      wordContext.removeChild(wordContext.lastElementChild);
      wordContext.removeChild(wordContext.lastElementChild);

      wordContext.append(meaning);
    });
  }
});

//add words
const addBtn = document.forms["addwordform"];

addBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  const textInput = addBtn.querySelector("#addword");
  const valueInput = addBtn.querySelector("#meaningword");

  const text = textInput.value;
  const value = valueInput.value;

  list.innerHTML += ` <li>
  <div class="word-context">
                <span class="word">${text}</span>
                <span class="meaning">${value}</span>
              </div>
              <div class="buttonsection">
                <span class="button edit">Edit</span>
                <span class="button delete">Delete</span>
              </div>
              </li>`;

  textInput.value = "";
  valueInput.value = "";
});

//search text

const searchText = document.forms["searchform"].querySelector("input");

searchText.addEventListener("keyup", (e) => {
  const term = e.target.value;
  const list = document.querySelector("ul").querySelectorAll("li");

  list.forEach((item) => {
    const text = item.firstElementChild.textContent.toLowerCase().trim();
    if (text.includes(term.toLowerCase())) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
