// ================= MOBILE MENU =================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close menu after clicking navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// ================= ORDER BUTTON =================

function orderNow() {

    alert("🎉 Thank you for choosing Foodie! Your order is ready.");

}


// ================= ADD TO CART =================

function addToCart(foodName) {

    alert("🍴 " + foodName + " added to your order!");

}