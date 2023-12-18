var wishlist = JSON.parse(localStorage.getItem('wishlist'));
var templates = "";
var cart = JSON.parse(localStorage.getItem('cart'));

var products = JSON.parse(localStorage.getItem('products'));


                

function removeFromWishlist(productId){
    var tempWishlist = wishlist.filter(item => item.id != productId);
    localStorage.setItem("wishlist",JSON.stringify(tempWishlist));
}

function addToCart(productId){
    // console.log(cart);
    console.log(products);
    var productItems = products.find(function (item){
        return item.id == productId;
    });

    if(cart.length == 0){
        cart.push(productItems);
    }
    else{
        var cartItems = cart.find(function(item){
            return item.id == productId;
        })
        if(cartItems == undefined){
            cart.push(productItems);
        }
        else {
            newQty = ++cartItems.qty;
            cartItems['qty']=newQty;
        }
    }

    console.log(productId);
    localStorage.setItem('cart',JSON.stringify(cart));
}

if(wishlist != null){
    templates = templates + 
    `<div class="wishlist-div">
    <h1 class="">My Wishlist (${wishlist.length} ITEMS)</h1>
    <i class="fa fa-heart" style="color: #ff7b00;"></i><h3 class="">Recently Added</h3>
    <label for="">SORT BY</label>

    <select name="size" id="size">
      <option value="one">Price(Low to High)</option>
      <option value="two">Price(High to Low)</option>
    </select>
    </div>`
}

wishlist.forEach(product => {
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
    <div class="wishlist-js-page" id="${product.id}">
        <img src="./images/${product.imageName}.png" alt="${product.imageName}">
        
        <h1>${product.name}</h1>
        <div class="ratings" id = "ratings-stars">
                    ${stars}
                    
                  </div>
        <div class="price-discount-item-wishlist">
          <h2 class="price-h2-wish">$${product.priceAfterDiscount}</h2>
          <h2 class="total-price-wish">$${product.price}</h2>
          <h2 class="discount-h2">(${product.discount}% Off)</h2>
        </div>

        <select name="size" id="size" class="form-control wishlist-select">
        <option value="default">Select Pack of</option>
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
        </select>

        
        <div class="wishlist-btn-div">
        <a onclick="addToCart(${product.id})" href=""><button class="btn btn-primary">Add to Cart</button></a>
        <a onclick="removeFromWishlist(${product.id})" href=""><button class="btn btn-primary remove-from-wishlist-btn">Remove from Wishlist</button></a>
        </div>
    </div>
    `
});
if(wishlist != 0){
    document.querySelector('#whishlist-page').innerHTML = templates;
}
else{
    document.querySelector('#whishlist-page').innerHTML = "No-Items";
}
// console.log(products.ratings);