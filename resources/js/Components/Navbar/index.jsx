import Logo from "./Logo";
import NavbarList from "./NavbarList";
import AuthButtonList from "./AuthButtonList";

export default function Navbar(props) {
    const {
        hrefHome,
        hrefBeranda,
        hrefTentang,
        hrefLayanan,
        hrefKontak,
        hrefProduk,
        hrefDaftar,
        hrefMasuk,
        fontColor,
        logoWidth,
        buttonWidth,
        buttonHeight,
        buttonBg,
        buttonBgHover
    } = props;

    return (
        <nav className="flex items-center justify-between pt-[15px]">
            <Logo width={logoWidth} hrefHome={hrefHome} fontColor={fontColor} />
            <NavbarList
                hrefBeranda={hrefBeranda}
                hrefTentang={hrefTentang}
                hrefLayanan={hrefLayanan}
                hrefKontak={hrefKontak}
                hrefProduk={hrefProduk}
            />
            <AuthButtonList
                hrefDaftar={hrefDaftar}
                hrefMasuk={hrefMasuk}
                width={buttonWidth}
                height={buttonHeight}
                buttonBg={buttonBg}
                buttonBgHover={buttonBgHover}
            />
        </nav>
    );
}