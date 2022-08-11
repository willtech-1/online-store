// all the selectors
const itemsWrapper = document.getElementById("cart-items");
// const coupons = document.getElementById("coupons");
const emptyCart = document.getElementById("empty-cart");
const checkBox = document.getElementById("cleaner");
const shipItem = document.getElementById("shipping");
const ship = document.getElementById("ship");
const confirmMyOrder = document.getElementById("confirm-order");

// check if items exist on localStorage
if (localStorage.cartItems) {
  // if cartItems exist in the localStorage make the JSON into an array of object
  cartItemsArray = JSON.parse(localStorage.cartItems);

  // iterate over the cart items and display
  cartItemsArray.forEach((item) => {
    itemsWrapper.innerHTML += `<div class="item-container">
        <img
          class="item-image"
          src="${item.image}"
          alt="${item.title}"
        />
        <div class="item">
        <p class="item-name"><b>Name: </b> ${item.title}</p>
          <p class="item-price"><b>Price:</b> R ${item.price}</p>
        </div>
        `;
  });
  // if the cart is empty
} else {
  emptyCart.innerHTML += `<h2>Your Cart is Empty!</h2>
  <span style="margin-left: 1rem"><a href="shoppingCart.html">Start Shopping</a></span>`;
}

// shipping places MAP
let shipping = new Map();
shipping.set("--Choose Option--", 0);
shipping.set("Cape Town", 500);
shipping.set("Gauteng", 300);
shipping.set("Port Elizabeth", 400);
shipping.set("Durban", 100);

// assign an option variable to an empty string and it will used later
let option = "";
// loop over key value pairs
for (let keys of shipping.keys()) {
  // assign an option variable the option element
  option += `<option>${keys}</option>`;
}
// out the above on the select element to the dom
shipItem.innerHTML = option;

// calculate total price
function total() {
  let shippingVal = 0;
  // get the value from the shipItem
  const key = shipItem.value;
  // South African VAT
  const vat = 1.15;
  // sneaker cleaner discount
  let cleaner = 200;
  // total variable initialized to zero
  let total = 0;

  // add price based on shipping location
  if (key) {
    //get() method to return values of the shipping MAP keys
    shippingVal = shipping.get(key);
  }
  // console.log(shippingVal);
  // iterate over cartItemsArray and get each item price
  cartItemsArray.forEach((item) => {
    let prices = item.price;
    // sneaker cleaner condition
    if (checkBox.checked) {
      cleaner = 200;
    } else {
      cleaner = 0;
    }
    total += prices * vat + cleaner;
  });

  // add shipping price to the total
  total += shippingVal;
  document.getElementById("total-price").innerHTML = `<br>
  <h6 style="text-align: center";>Including 15% VAT</h6><h2 style="text-align: center; margin-top: 2rem">Total Price: R ${total.toFixed(
    2
  )}</h2>`;
}

total();

// generate reference
function confirmOrder() {
  // generate random numbers
  const randomNums = Math.random();
  //convert the above numbers to string
  const numsAndStrings = randomNums.toString();
  // remove the first 2 characters from the string of numns
  const reference = numsAndStrings.substring(2);
  const btn = document.getElementById("confirm-order");
  btn.addEventListener("click", function () {
    if (reference) {
      alert(
        `Thank You, your order was successful! Your reference number is: ${reference}`
      );
    }
  });
}

confirmOrder();
