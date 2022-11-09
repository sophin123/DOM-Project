let data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },

  {
    id: 7,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 8,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 9,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 10,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 12,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 13,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const cardcontainer = document.querySelector(".contextcontainer");
const slider = document.querySelector(".slidercontainer input");
const sliderValue = document.querySelector(".slidercontainer label");
const ul = document.querySelectorAll("li");
const search = document.querySelector("#search");

//update slider value
slider.oninput = function () {
  sliderValue.innerHTML = "$" + this.value;
};

displayProduct(data);
//filtering data

ul.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerText == "All") {
      displayProduct(data);
      console.log("all called");
    } else {
      let filterData = data.filter((d) => d.cat == e.target.innerText);
      console.log(filterData, "filter called");
      displayProduct(filterData);
    }
  });
});

//searchHandler
search.addEventListener("keyup", (e) => {
  let value = e.target.value;

  if (value) {
    let filterData = data.filter((d) =>
      d.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filterData);
    displayProduct(filterData);
  } else {
    displayProduct(data);
  }
});

//display Product

function displayProduct(filterData) {
  cardcontainer.innerHTML = filterData.map(
    (item) =>
      `<div class="card" id =${item.id}">
            <img
            src=${item.img}
            alt="img"
          />
          <p>${item.name}</p>
          <b>$ ${item.price}</b>
           </div>`
  );
}

//sliderFilter

const priceList = data.map((data) => data.price);
const minValue = Math.min(...priceList);
const maxValue = Math.max(...priceList);

slider.min = minValue;
slider.max = maxValue;

slider.value = maxValue;
sliderValue.textContent = maxValue;

slider.addEventListener("input", (e) => {
  displayProduct(data.filter((item) => item.price <= e.target.value));
});
