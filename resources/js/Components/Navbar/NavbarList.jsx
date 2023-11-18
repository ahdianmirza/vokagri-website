export default function NavbarList(props) {
    const { hrefBeranda, hrefTentang, hrefLayanan, hrefProduk } = props;

    return (
        <div className="w-full">
            <ul className="flex items-center justify-between">
                <li className="font-semibold text-primary">
                    <a href={hrefBeranda}>Beranda</a>
                </li>
                <li className="font-semibold text-primary">
                    <a href={hrefTentang}>Tentang</a>
                </li>
                <li className="font-semibold text-primary">
                    <a href={hrefLayanan}>Layanan</a>
                </li>
                <li className="font-semibold text-primary">
                    <a href={hrefProduk}>Produk</a>
                </li>
            </ul>
        </div>
    );
}