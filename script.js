const toggler = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-links");
//add a click event to the toggler
toggler.addEventListener("click", function (){
    if(navLinks.classList.contains("active")){
        navLinks.classList.remove("active");
    }else{
        navLinks.classList.add("active");
    }
})
//Remove the navigation bar on scroll
window.addEventListener("scroll", function (){
    if(window.pageYOffset > 100){
        navLinks.classList.remove("active");
    }
})
AOS.init();
AOS.init({
    delay: 3000,
    easing: 'ease',
});