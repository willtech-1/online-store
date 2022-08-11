// addProducts function that will add products to the DOM
let container = document.querySelector(".sneaker-images");

// constructor function
function Products(itemID, title, image, brand, description, price) {
  this.itemID = itemID;
  this.title = title;
  this.image = image;
  this.brand = brand;
  this.description = description;
  this.price = price;
}

// create objects
let product1 = new Products(
  01,
  "Jordan 1s",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "Black and Red Nike Air Force 1 hit cut.",
  1600
);
let product2 = new Products(
  02,
  "Nike Air Max",
  "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "Classic Nike Air Max for training and Lifestyle.",
  1500
);
let product3 = new Products(
  03,
  "Nike Air Force 1",
  "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "Brown Nike Air Force 1 low cut.",
  1500
);
let product4 = new Products(
  04,
  "Nike Trainers",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "Nike Frees for running and sports.",
  900
);
let product5 = new Products(
  05,
  "Adidas Stan Smith",
  "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFkaWRhJTIwc3RhbiUyMHNtaXRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Adidas",
  "100% comfortable and lifestyle shoe.",
  800
);
let product6 = new Products(
  06,
  "Nike Air Force 1",
  "https://images.unsplash.com/photo-1656164847621-4665c4c397da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBuaWtlJTIwYWlyJTIwZm9yY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "White Nike Air Force 1 hit cut.",
  1399
);
let product7 = new Products(
  07,
  "Air Jordans",
  "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGpvcmRhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "High top Retro Air Jordans.",
  1800
);
let product8 = new Products(
  08,
  "Reebok Classics",
  "https://images.unsplash.com/photo-1598144112872-06be425d3c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVlYm9rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Reebok",
  "White Reebok lifestyle suade material.",
  900
);
let product9 = new Products(
  09,
  "Sneaker Cleaner",
  "https://images.unsplash.com/photo-1592391303704-f3380c4fa7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlciUyMGNsZWFuZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "Reebok",
  "Liquid for cleaning.",
  400
);
let product10 = new Products(
  10,
  "Sneaker Lab",
  "https://images.unsplash.com/photo-1534226287181-36d1f9179bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZSUyMHNwcmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Nike",
  "Cleaner for sneakers",
  400
);

// store above objects in an array
let productsList = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

//empty object
let productsObj = {};

// console.log(container)
productsObj.addProducts = function () {
  // forEach loop to iterate over the productList
  productsList.forEach((product) => {
    container.innerHTML += `<div class="image-container">
    <img
      class="sneaker-image"
      src="${product.image}"
      alt="${product.title}"
    />
    <div class="image-overlay">
      <div class="image-title">${product.title}</div>
      <br />

      <p class="brand"><b>Brand:</b> ${product.brand}</p>
      <p class="description">
        <b>Description:</b> ${product.description}
      </p>
      <p class="price"><b>Price:</b> R ${product.price}</p>
      <button class="add-to-cart" onclick="addToCart(${product.itemID})">Add To Cart</button>
    </div>`;
  });
};

// calls addProducts function
productsObj.addProducts();

//empty array that will add the above selected object 
let cartItemsArray = [];

// addToCart Function with the price parameter as unique product identifier
function addToCart(itemID) {
  let findItem = productsList.find((item) => {
    if (item.itemID === itemID) {
      return true;
    } else {
      return false;
    }
  });
  // push findItem in an array
  cartItemsArray.push(findItem);
  // store the added to cart items into the localStorage
  localStorage.cartItems = JSON.stringify(cartItemsArray);

  // alert itens in cart
  alert(`${cartItemsArray.length} items added InCart!`);
}

// jquery section
$(document).ready(function () {
  // drop down menu
  $(".drop-down-menu li h4").hover(function () {
    // slide down when hovered over
    $(this).next(".accord-content").slideDown();
    // slide back up
    $(this).closest("li").siblings().find(".accord-content").slideUp();
  });

  // view animation
  $(".view-animation-btn").click(function () {
    $("#ultra-boost-img").animate({
      height: "380px",
      width: "580px",
    });
  });
  // view animation effec
  $(".view-animation").click(function () {
    $("#yeezy-boost-img").animate({
      height: "380px",
      width: "580px",
    });
  });

  // show/hide faqs
  $("#hide").click(function () {
    $("#faq-paragraph").hide();
  });
  $("#show").click(function () {
    $("#faq-paragraph").show();
  });

  $("#hide1").click(function () {
    $("#faq-paragraph2").hide();
  });
  $("#show1").click(function () {
    $("#faq-paragraph2").show();
  });

  $("#hide2").click(function () {
    $("#faq-paragraph3").hide();
  });
  $("#show2").click(function () {
    $("#faq-paragraph3").show();
  });

  // chained effect
  $(function () {
    $(".display-btn").click(function () {
      $(".display-image").slideUp(1000).slideDown(1000);
    });
  });
});
