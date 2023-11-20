import ButtonLink from "../ButtonLink";
import NavbarMenu from "./NavbarMenu";

export default function AuthButtonList(props) {
    const { hrefDaftar, hrefMasuk, width, height, buttonBg, buttonBgHover } = props;

    return (
        <div className="w-full flex justify-end items-center">
            <NavbarMenu hrefMenu={hrefDaftar} addStyle="mr-8">
                Daftar
            </NavbarMenu>
            <ButtonLink
                hrefLink={hrefMasuk}
                width={width}
                height={height}
                buttonBg={buttonBg}
                buttonBgHover={buttonBgHover}
            >
                Masuk
            </ButtonLink>
        </div>
    );
}