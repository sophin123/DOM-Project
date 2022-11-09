//delete book
var list = document.querySelector(".book-list ul");

list.addEventListener("click", (e) => {
  console.log("Clicked");
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const forms = document.forms["add-book"];

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = forms.querySelector("input[type=text]").value;

  const li = document.createElement("li");
  const title = document.createElement("span");
  const delBtn = document.createElement("span");

  title.innerHTML = value;
  delBtn.className = "delete";
  delBtn.classList.add("delete-btn");
  delBtn.textContent = "delete";

  li.appendChild(title);
  li.appendChild(delBtn);

  list.appendChild(li);
});

//hide
const hide = document.querySelector("#hide");
console.log(hide);

hide.addEventListener("change", (e) => {
  if (hide.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "inline";
  }
});

//filter book
const searchBox = document.forms["search-books"].querySelector("input");

searchBox.addEventListener("keyup", (e) => {
  const term = e.target.value;
  const list = document.querySelector("#book-list").querySelectorAll("li");
  list.forEach((item) => {
    if (item.textContent.toLowerCase().includes(term.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
