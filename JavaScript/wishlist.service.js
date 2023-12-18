
        
        var products = JSON.parse(localStorage.getItem('products'));

        function addToWishlist(productId) {
           var productItems = products.find(function (item){
                return item.id == productId;
           });

           if(wistlist.length == 0){
            wistlist.push(productItems);
           }
           else{
            var wishlistItem = wishlist.find(function (item){
                return item.id == productId;
            })
            if(wishlistItem == undefined){
                cart.push(productItems);
            }
           }

           console.log(productId);
           localStorage.setItem('wishlist',JSON.stringify(wishlist));
        }