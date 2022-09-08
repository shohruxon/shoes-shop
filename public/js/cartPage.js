const tbody = document.querySelector("tbody");
const totalPrice = document.querySelector(".totalPrice span");

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) cart = [];
  return cart;
}

function loadCart() {
  let cart = getCart();
  tbody.innerHTML = "";

  let price = 0;
  cart.forEach((item) => {
    price += item.price;
    tbody.innerHTML += `<tr
  class="product"> <td> <img src="${item.img}" alt="" /> </td> <td><h2>${item.name}</h2></td>
  <td><h2>$${item.price}</h2><button class="product_del" data-id="${item.idx}">delete</button></td> </tr>`;
  });

  totalPrice.innerHTML = price;

  getDeletes();
}

function getDeletes() {
  const btns = document.querySelectorAll(".product_del");

  btns.forEach((item) => {
    item.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      let cart = getCart();
      let idx = cart.findIndex((item) => item.idx === id);
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    });
  });
}

loadCart();
