export default function ButtonLink(props) {
    const { hrefLink, children, width, height, buttonBg, buttonBgHover } =
        props;

    return (
        <div>
            <a
                href={hrefLink}
                className={`flex justify-center items-center ${width} ${height} ${buttonBg} ${buttonBgHover} hover:duration-300 rounded-lg text-white font-semibold`}
            >
                {children}
            </a>
        </div>
    );
}
