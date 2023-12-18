let productsListUrl = '/products.json';


fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;
            localStorage.setItem('products',JSON.stringify(data.Products));

            if(!localStorage.getItem('cart')){
                localStorage.setItem('cart','[]')
            }
        })

        var cart = JSON.parse(localStorage.getItem('cart'));
        var products = JSON.parse(localStorage.getItem('products'));
        var newQty; 
        var wishlist = JSON.parse(localStorage.getItem('wishlist'));
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
            // console.log(item.id == productId);
        });
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

if(!localStorage.getItem('wishlist')){
    localStorage.setItem('wishlist','[]')
}

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
}
console.log(wishlist);



async function loadProducts(productsListUrl) {

    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;


            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
                                    <span>New</span>
                                </div>`;
                }

                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }

                cards = cards +
                    `<div class="cards col-xl-4 col-lg-4 col-md-6" id="cards-products-list3">
                    <section class="">
                    <div class="card" id="${product.id}">
                    <img class="product" src="./images/${product.imageName}.png">
                    <div class="cart-view-wishlist">
                        <a href="./cart.html"><img class="cart-icon" src="./images/cart.png"></a>
                        <img class="view-icon" src="./images/view.png">
                        <a href="./wishlist.html"><img class="wishlist-icon" src="./images/wishlist.png"></a>
                    </div>
                    <div class="details-ratings">
                    
                    <h3>${product.name}</h3>
                    <h4><span class="price">$${product.priceAfterDiscount}</span><span class="total-price">$${product.price}</span></h4>
                    <div class="ratings">
                    ${stars}
                    
                  </div>
                  </div>
                  <a onclick="addToCart(${product.id})" href="#"><button class="add-to-cart-btn">Add to Cart</button></a>
                  <a onclick="addToWishlist(${product.id})" href="./products-list.html"><button class="add-to-wishlist-btn">Add to Wishlist</button></a>
                </section>
                    </div>`;
            });

            document.querySelector('#productsListArea').innerHTML = cards;
        });
}

loadProducts(productsListUrl);





