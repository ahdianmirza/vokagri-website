// Navbar Fixed
window.onscroll = () => {
    const navbar = document.getElementById("navbar");
    const fixedNav = navbar.offsetTop;
    const shoppingCart = document.getElementById("shopping-cart");

    if (window.pageYOffset > fixedNav) {
        navbar.classList.add("navbar-fixed");
        shoppingCart.classList.add("shopping-cart-fixed");
    } else {
        setTimeout(() => {
            navbar.classList.remove("navbar-fixed");
            shoppingCart.classList.remove("shopping-cart-fixed");
        }, 200);
    }

    // window.pageYOffset > fixedNav
    //     ? navbar.classList.add("navbar-fixed")
    //     : setTimeout(() => navbar.classList.remove("navbar-fixed"), 200);
}