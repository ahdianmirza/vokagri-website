export default function ButtonLink(props) {
    const { hrefLink, children } =
        props;

    return (
        <div>
            <a
                href={hrefLink}
                className="flex justify-center items-center w-fit px-4 py-4 md:w-[237px] md:h-[70px] bg-primary hover:bg-primary-hover hover:duration-300 rounded-lg text-white font-semibold"
            >
                {children}
            </a>
        </div>
    );
}
