# Creating html mockup for home page

+ User Story 1: Create a folder name challenge-1, inside that create a file "index.html"

+ User Story 2: Inside the folder, create a folder called images. 
This folder should contain all the required images.

+ User Story 3: Your index.html should contain html5 template.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ...
</body>
</html>
```

+ User Story 4: Give the title as "Swag of India".

+ User Story 5: Home page should contain three sections namely header, main and footer. Use the respective semantic tags.

+ User Story 6: Header section should contain two nav element, one containing top navigation, other containing main navigation.
``` HTML
        <header>
            <nav class="top-navigation">

            </nav>
            <nav class="main-navigation">

            </nav>
        </header>
```

+ User Story 7: Top-navigation should contain the following elements:

    +    social media icons
    +    search box
    +    customer care number
    +    Sell On Company link
    +    Download App link
    +    Flag
    +    Drop down to change country (English, India, USA)

+ User Story 8: Main-navigation should contain the following elements:
    +    image to show logo
    +    "Home" link
    +    "Categories" link
    +    "Latest" link
    +    "Blog" link
    +    "Pages" link
    +    "Contact" link
    +    icon for wishlist
    +    icon for cart
    +    "Sign in" button

+ User Story 9: Main tag should contain three more sections: 
            
    + a section element with class 'carousel' to show addvertisement or announcements
    + section for "shop by category"
    + section for "latest products"
```HTML
<main>
    <section class="carousel">
    
    </section>
    <section class="shop-by-category">

    </section>
    <section class="latest-products">

    </section>
</main>
```

+ User Story 10: Carousel section should have an image, and a section for description.

``` HTML
<section class="carousel">
    <section>
        <img > <!-- to contains brides image-->
        <section class="adv-description">
            <section> 60% discount </section>
            <section> Ethnic Collection </section>
            <section> Best Cloth Collection of 2022!</section>
            <button>Sign In</button>
        <section>
    </section>
</section>
```

+ User Story 11: Shop by Category section should have different sectionS for Women, 
 Ethnic Wear and Men's Clothing.
```HTML
<section class="shop-by-category">
    <h1>Shop by Category</h1>
    <section>
        <img src="./images/cat1.jpg"><!-- img for women-->
        <h2>Women</h2>
        <button>Best New Deals</button>
    <section>
    ...
</section>
```

+ User Story 12: Latest proudcts should have another navigation for All, New, Featured and Offer.

+ User Story 13: Latest proudcts should have a section with class "card" to show different products, you should have atleast 6 cards sections showing different product images.

```HTML
<section class="card">
    <img src="./images/product1.png">
    <div>
        <img src="./images/cart.png">
        <img src="./images/view.png">
        <img src="./images/wishlist.png">
    </div>
    <div class="ratings">
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
    </div>
    <h3>Green Dress with details</h3>
    <h4><span>$40.00</span><span>$60.00</span></h4>
</section>
```

+ User Story 14: Use font-awesome for icons to be displayed properly

    > Hint: Add font-awesome cdn in the head section

```HTML
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swag of India</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
```

+ User Story 15: Footer section should have 5 sections for Policy Info, Company, Snapdeal Business, Need Help and Subscribe. Check the mock for more understanding.
```HTML
<footer>
    <div>
        <div class="footer-list">
            <h6>POLICY INFO</h6>
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Report Abuse & Takedown Policy</p>
        </div>
        <div class="footer-list">
            <h6>COMPANY</h6>
            <p>About Us</p>
            <p>Core Values</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Sitemap</p>
        </div>
        ...
    </div>
    ...
</footer>
```

+ User Story 16: Footer should include Copyright text.

+ User Story 17: Footer should include social media icons. Use font awesome for the same. 

```HTML
<section>
    <h6>Copyright © All rights reserved</h6>
    <div class="social-media">
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-behance" aria-hidden="true"></i>
        <i class="fa fa-globe" aria-hidden="true"></i>
    </div>
</section>
```

## Don't worry if your page is not looking preety. We will make it beautiful in the next challenge.