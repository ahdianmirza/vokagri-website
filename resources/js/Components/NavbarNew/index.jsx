"use client";

import { Button, Navbar } from "flowbite-react";
import "../../homepage-style";

const NavbarNew = () => {
    const handleNavbarToggle = () => {
        document.getElementById("navbar").classList.toggle("navbar-click");
    }

    return (
        <Navbar
            id="navbar"
            className="absolute w-full z-20 top-0 start-0 transition duration-200 px-4 md:px-[93px] bg-transparent"
            fluid
            rounded
        >
            <Navbar.Brand href="/">
                <img
                    src="img/vokagriLogo.png"
                    alt="VokAgri Logo"
                    className="w-7 md:w-9 mr-2"
                />
                <span className="self-center whitespace-nowrap text-xl font-bold text-primary dark:text-white">
                    Vokagri
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button className="bg-primary hover:bg-primary-hover">
                    Login
                </Button>
                <Navbar.Toggle
                    id="navbar-toggle"
                    onMouseDown={() => handleNavbarToggle()}
                    className="ml-4 bg-gray-100 bg-opacity-70"
                />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="font-semibold" href="/" active>
                    Beranda
                </Navbar.Link>
                <Navbar.Link className="font-semibold" href="#aboutUs">Tentang</Navbar.Link>
                <Navbar.Link className="font-semibold" href="#layanan">Layanan</Navbar.Link>
                <Navbar.Link className="font-semibold" href="#kontak">Kontak</Navbar.Link>
                <Navbar.Link className="font-semibold" href="/products">Produk</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarNew;