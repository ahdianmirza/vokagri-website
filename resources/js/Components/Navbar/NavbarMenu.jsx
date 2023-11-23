import { Link, Head } from "@inertiajs/react";

export default function NavbarMenu(props) {
    const { hrefMenu, children, addStyle } = props;

    return (
        <Link
            className={`relative ml-10 ${addStyle} font-semibold text-primary hover:text-[#0196a0] tracking-[1px] after:content-[''] after:h-[3px] after:w-0 after:bg-[#0196a0] after:absolute after:left-0 after:-bottom-[5px] after:rounded-lg hover:after:w-full  hover:after:duration-300`}
            href={hrefMenu}
        >
            {children}
        </Link>
    );
}
