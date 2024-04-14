
var products = [
    {
        imageUrl:"https://cdn01.pharmeasy.in/dam/products_otc/Q84402/abzorb-total-skin-relief-dusting-powder-20-extra-bottle-of-120gm-2-1712152617.jpg?dim=1440x0",
        name: "Abzorb Total Skin Relief Dusting Powde",
        price: "₹150.40",
    },
]

var container = document.getElementsByClassName("new-container");
 container.innerHTML = "";

  products.forEach(function (ele) {
    
    var card = document.createElementsByClassName("new-options");

    var image = document.createElement("img");
    image.src = ele.imageUrl;

    var p = document.createElement("p");
    h4.textContent = ele.name;

    var price = document.createElement("h5");
    price.textContent = ele.price;

    var btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(ele);
    });
   
    card.append(image, p, price, btn);
    container.append(card);
  });

  var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
  function addToCart(ele) {
    console.log(ele);
    cartArr.push(ele);

    console.log(cartArr);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    window.location.href = "cart.html"
  }