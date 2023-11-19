import NavbarMenu from "./NavbarMenu";

export default function AuthButtonList(props) {
    const { hrefDaftar, hrefMasuk } = props;

    return (
        <div className="w-full flex justify-end items-center">
            <NavbarMenu hrefMenu={hrefDaftar} addStyle="mr-8">
                Daftar
            </NavbarMenu>
            <a
                href={hrefMasuk}
                className="flex justify-center items-center w-[120px] h-10 bg-primary hover:bg-[#0196a0] hover:duration-300 rounded-lg text-white font-semibold"
            >
                Masuk
            </a>
        </div>
    );
}