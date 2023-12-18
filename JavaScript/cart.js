var cart = JSON.parse(localStorage.getItem('cart'));
var templates = "";
var total = 0;
var initialTotal = 0;
var discount = 0;
var wishlist = JSON.parse(localStorage.getItem('wishlist'));
var products = JSON.parse(localStorage.getItem('products'));
// filter method for cart array


function addToOrder(){
    return JSON.parse(localStorage.getItem("order")) || [];
}
    let order = addToOrder();


function addToWishlist(productId) {
    var productItems = products.find(function (item){
         return item.id == productId;
    });

    if(wishlist.length == 0){
     wishlist.push(productItems);
    }
    else{
     var wishlistItem = wishlist.find(function (item){
         return item.id == productId;
     })
     if(wishlistItem == undefined){
         wishlist.push(productItems);
     }
     else {
        newQty = ++wishlistItem.qty;
        wishlistItem['qty']=newQty;
    }
    }

    localStorage.setItem('wishlist',JSON.stringify(wishlist));
    removeFromCart(productId);
}

    for(var i = 0;i < cart.length; i++){
        total = parseInt(total+(cart[i].priceAfterDiscount * cart[i].qty));
        initialTotal = parseInt(total+(cart[i].price * cart[i].qty));
    }

    function removeFromCart(productId){
       var tempCart = cart.filter(item => item.id != productId);
       localStorage.setItem("cart",JSON.stringify(tempCart));
    }
    function removeAll(){
        order.push(...cart);
        localStorage.setItem("order",JSON.stringify(order));
        localStorage.setItem("cart","[]");
    }
    

        discount = initialTotal-total;
            if(cart != null){
                templates = templates +
                `<div class="cart-items-price">
                <h1 class="my-cart-h1">MY CARTS</h1>
                <h2 class="items-h2">(${cart.length} ITEMS)</h2>
                <h3 class="price-h3-cart">Total : Rs ${total}</h3>
                </div>
                
                
                <div class="" id="col-2nd">
                <h1 class="coupons-h1">COUPONS</h1>
                <div class="apply-cart">
                <img class="coupons-img" src="./images/coupon.png" alt="Coupons">
                <h2>Apply Coupons</h2>
                <button>Apply</button>
                </div>
                <hr class ="hr-cart-col-2nd">

                <div class="price-dicount-total-cart1">
                <h2>PRICE DETAILS</h2>
                <h3>Price Details</h3>
                <h3>Bag Discount</h3>
                <h3>Coupon Discount</h3>
                <h3>Order Total</h3>
                <h3>Delivery Charges</h3>
                </div>

                <div class="price-dicount-total-cart2">
                <h3>$${initialTotal}</h3>
                <h3 class="bag-discount-free">$${discount}</h3>
                <h3 class="apply-coupon-h3">Apply Coupon</h3>
                <h3>$${total}</h3>
                <h3><span class="delivery-span">$ 9</span><span class="bag-discount-free">  Free</span></h3>
                </div>

                <div id="total-price">
                <h1>Total</h1>
                <h1 class = "total-h1-price">$${total}</h1>
                </div>  

                <a onclick= "removeAll()" href="" ><button id="place-order">PLACE ORDER</button></a>
            </div>`

            }
            cart.forEach(product => {

                templates = templates +
                    `<div class="row">
                    <div class="col-1st" id="${product.id}">
                        <img class="classic-img-cart" src="./images/${product.imageName}.png" alt="${product.imageName}">
                        <div class="cart-items-div">
                        <h1>${product.name}</h1>
                        <h2>Color : ${product.color}</h2>
                        <h2>Sold By : ${product.soldBy}</h2>
                        </div>
                        <label class="label-size" for="size">Size:</label>
                        <select name="size" id="size">
                        <option value="one">OneSize</option>
                        <option value="two">TwoSize</option>
                        <option value="three">ThreeSize</option>
                        <option value="four">FourSize</option>
                        </select>
        
                        <label for="qty">QTY:</label>
                        <select name="size" id="size">
                        <option value="">${product.qty}</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        </select>
        
                        <div class="div-price-discount-delivery">
                        <h1>$${product.priceAfterDiscount}</h1>
                        <h2 class="price-total-h2">$${product.price}</h2>
                        <h2 class="discount-h2">(${product.discount}% Off)</h2>
                        <h3>Delivery in 4 - 6 days</h3>
                        </div>
                        <div class="remove-move-to-wish-div">

                            <hr class="hr-rm-wd">
                            <a onclick="removeFromCart(${product.id})" href=""><button id="remove-a-btn">Remove</button></a>
                            <a onclick="addToWishlist(${product.id})" href=""><button>Move To Wishlist</button></a>
                            <div class="vl"></div>

                        </div>
                    </div>
                    
                </div>`;
            });

            if(cart != 0){
                document.querySelector('#cart-js-operation').innerHTML = templates;
            }
            else{
                document.querySelector('#cart-js-operation').innerHTML = "No-Items";
            }

            
            