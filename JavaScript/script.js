function countryMap(){
    let a = new Map();
    a.set("India","+91 9008008085");
    a.set("USA","+1 1234567890");
    a.set("Canada","+71 9876543210");

    document.getElementById("country").addEventListener("change",function (){
        let countryName = this.value;
        document.getElementById("no").innerHTML = a.get(countryName);
        document.getElementById("flag").src = `./images/${countryName}.png`;
    })
}







// Top Arrow Script

document.getElementById("move-top-btn").classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};

// Navigation bar Sticky 
document.addEventListener('scroll',() => {
    var scroll = getYPosition();
    if(scroll < 150){
        document.getElementById("header-sticky").classList.remove("sticky")
    }
    else{
        document.getElementById("header-sticky").classList.add("sticky")
    }
})


document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById("move-top-btn");
    scrolled = () => {
        window.scroll({
            top: 0 ,
            left: 0,
            behavior: 'smooth'
        });
    }
    if(scroll > 535){
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click',scrolled);
    }
    else{
        document.getElementById('move-top-btn').classList.remove("show");
        document.getElementById('move-top-btn').classList.add("hide");
        document.getElementById('move-top-btn').removeEventListener("click",scrolled);
    }
})







// 2nd Way

// function moveTop(){
// document.getElementById("move-top-btn").addEventListener("scroll",function(){
//     // document.documentElement.style.scrollBehavior = "smooth";
//     // window.body.style.scrollBehavior = "smooth";
//     window.scrollTo({top: 0, behavior: 'smooth'});
// })
// }


// window.onscroll = function() {myFunction()};
      
// var navlist = document.getElementById("header-sticky");
// var sticky = navlist.offsetTop;
  
// /* Function to stick the nav bar */
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navlist.classList.add("sticky")
//     } 
//       else {
//           navlist.classList.remove("sticky");
//       }
// }