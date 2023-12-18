var wishlist = JSON.parse(localStorage.getItem('wishlist'));
var order = JSON.parse(localStorage.getItem('order'));
var templates = "";
var cart = JSON.parse(localStorage.getItem('cart'));

var products = JSON.parse(localStorage.getItem('products'));

                
function removeFromOrder(productId){
    var tempOrder = order.filter(item => item.id != productId);
    localStorage.setItem("order",JSON.stringify(tempOrder));
}

// function addToOrder(productId){
    
//     console.log(products);
//     var productItems = products.find(function (item){
//         return item.id == productId;
//     });

//     if(order.length == 0){
//         order.push(productItems);
//     }
//     else{
//         var orderItems = order.find(function(item){
//             return item.id == productId;
//         })
//         if(orderItems == undefined){
//             order.push(productItems);
//         }
//         else {
//             newQty = ++orderItems.qty;
//             orderItems['qty']=newQty;
//         }
//     }

//     console.log(productId);
//     localStorage.setItem('order',JSON.stringify(order));
// }

if(order != null){
    templates = templates + 
    `<div class="wishlist-div">
    <h1 class="">My Order (${order.length} ITEMS)</h1>
    <i class="fa fa-heart" style="color: #ff7b00;"></i><h3 class="">Recently Added</h3>
    <label for="">SORT BY</label>

    <select name="size" id="size">
      <option value="one">Price(Low to High)</option>
      <option value="two">Price(High to Low)</option>
    </select>
    </div>`
}

order.forEach(product => {
                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }
    templates = templates +
    `
    <div class="wishlist-js-page order-page" id="${product.id}">
        <img src="./images/${product.imageName}.png" alt="${product.imageName}">
        
        <h1>${product.name}</h1>
        <h2>Color : ${product.color}</h2>
        <h2>Sold By : ${product.soldBy}</h2>
        <div class="price-discount-item-wishlist price-order">
          <h3 class="price-h2-wish">$${product.priceAfterDiscount}</h3>
          <h3 class="total-price-wish">$${product.price}</h3>
          <h3 class="discount-h2">(${product.discount}% Off)</h3>
        </div>
        
        <div class = "delivery-track">
            <h4>Delivery expected by Jul 28<h4>
            <h4 class = "order-placed">Your Order has been placed<h4>
            <a href="">Track Your Order</a>
        </div>
        
        <div class="wishlist-btn-div" id = "order-btn-div">
        <a onclick="addToCart(${product.id})" href=""><button class="btn btn-primary">Buy Again</button></a>
        <a onclick="removeFromOrder(${product.id})" href=""><button class="btn btn-primary remove-from-wishlist-btn">Cancel Order</button></a>
        </div>
    </div>
    `
});
if(order != 0){
    document.querySelector('#order-page').innerHTML = templates;
}
else{
    document.querySelector('#order-page').innerHTML = "No-Items";
}
// console.log(products.ratings);