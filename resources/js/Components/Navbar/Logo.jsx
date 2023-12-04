export default function Logo(props) {
    const {hrefHome, fontColor, width} = props;

    return (
        <div className={width}>
            <div className="flex">
                <a className="flex items-center" href={hrefHome}>
                    <img
                        src="img/vokagriLogo.png"
                        alt="VokAgri Logo"
                        className="mr-2 w-7 md:w-10"
                    />
                    <h1 className={`text-xl font-bold ${fontColor}`}>VokAgri</h1>
                </a>
            </div>
        </div>
    );
}