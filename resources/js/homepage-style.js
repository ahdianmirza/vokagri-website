// Navbar Fixed
window.onscroll = () => {
    const navbar = document.getElementById("navbar");
    const fixedNav = navbar.offsetTop;

    if (window.pageYOffset > fixedNav) {
        navbar.classList.add("navbar-fixed");
    } else {
        setTimeout(() => navbar.classList.remove("navbar-fixed"), 200);
    }

    // window.pageYOffset > fixedNav
    //     ? navbar.classList.add("navbar-fixed")
    //     : setTimeout(() => navbar.classList.remove("navbar-fixed"), 200);
}