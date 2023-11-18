import Logo from "./Logo";
import NavbarList from "./NavbarList";
import AuthButtonList from "./AuthButtonList";

export default function Navbar(props) {
    const {
        hrefHome,
        hrefBeranda,
        hrefTentang,
        hrefLayanan,
        hrefProduk,
        hrefDaftar,
        hrefMasuk,
        fontColor,
        width,
    } = props;

    return (
        <nav className="flex items-center justify-between mt-[15px]">
            <Logo width={width} hrefHome={hrefHome} fontColor={fontColor} />
            <NavbarList
                hrefBeranda={hrefBeranda}
                hrefTentang={hrefTentang}
                hrefLayanan={hrefLayanan}
                hrefProduk={hrefProduk}
            />
            <AuthButtonList hrefDaftar={hrefDaftar} hrefMasuk={hrefMasuk} />
        </nav>
    );
}