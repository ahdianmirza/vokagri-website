import NavbarMenu from "./NavbarMenu";

export default function NavbarList(props) {
    const { hrefBeranda, hrefTentang, hrefLayanan, hrefKontak, hrefProduk } = props;

    return (
        <div className="w-full">
            <div className="flex items-center justify-center">
                <NavbarMenu hrefMenu={hrefBeranda}>Beranda</NavbarMenu>
                <NavbarMenu hrefMenu={hrefTentang}>Tentang</NavbarMenu>
                <NavbarMenu hrefMenu={hrefLayanan}>Layanan</NavbarMenu>
                <NavbarMenu hrefMenu={hrefKontak}>Kontak</NavbarMenu>
                <NavbarMenu hrefMenu={hrefProduk}>Produk</NavbarMenu>
            </div>
        </div>
    );
}