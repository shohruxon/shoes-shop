window.addEventListener("load", function (e) {
  // body
  const productBybtn = document.querySelectorAll(".productBybtn");
  productBybtn.forEach((element) => {
    element.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let product = JSON.parse(element.getAttribute("data-product"));
      product.idx = Math.floor(Math.random() * 9999999999);
      if (!cart) cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      location = "/cart";
    });
  });
});
