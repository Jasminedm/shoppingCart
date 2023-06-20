/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = []
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
/* REFACTORED OBJECT CREATION

class Product {
  constructor(name, price, quantity, productId, image){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.productId = productId;
    thid.image = image;
  }
}
const product1 = new Product("Cherry", 4, 1, 11, "cherry.jpg")
const product2 = new Product("Orange", 3, 1, 12, "orange.jpg")
const product3 = new Product("Strawberry", 5, 1, 13, "strawberry.jpg")
*/
// OBJECT LITERAL NOTATION
const product1 = {
  name: "Cherry",
  price: 4,
  quantity: 1,
  productId: 11,
  image: "cherry.jpg"
}
const product2 = {
  name: "Orange",
  price: 3,
  quantity: 1,
  productId: 12,
  image: "orange.jpg"
}
const product3 = {
  name: "Strawberry",
  price: 5,
  quantity: 1,
  productId: 13,
  image: "strawberry.jpg"
}

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = []
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId){
  let product;
if(productId === product1.productId){
  product = product1
product1.quantity += 1
}else if (productId === product2.productId){
  product = product2
  product2.quantity += 1
}else if(productId === product3.productId){
  product = product3
  product3.quantity += 1
}

if(cart.includes(productId)){
  cart.push(productId)
}
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  let product;
if(productId === product1.productId){
  product = product1
product1.quantity += 1
}else if (productId === product2.productId){
  product = product2
  product2.quantity += 1
}else if(productId === product3.productId){
  product = product3
  product3.quantity += 1
}
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  let product;
  if(product.quantity === 1){
    cart.pop()
  }else if(productId === product1.productId){
  product = product1
product1.quantity -= 1
}else if (productId === product2.productId){
  product = product2
  product2.quantity -= 1
}else if(productId === product3.productId){
  product = product3
  product3.quantity -= 1
}
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  let product;
  if(product.quantity === 1){
    cart.pop()
  }else if(productId === product1.productId){
  product = product1
product1.quantity = 0
}else if (productId === product2.productId){
  product = product2
  product2.quantity = 0
}else if(productId === product3.productId){
  product = product3
  product3.quantity = 0
};
};
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  let count;
  cart.forEach(function(item){
    count++;
  })
  return count;
};
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart = []
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
  
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
