export default function KontakList(props) {
    const { src, alt, children } = props;

    return (
        <div className="flex items-center mb-2">
            <img src={src} alt={alt} className="mr-2" />
            <p className="text-white-primary leading-[18px]">{children}</p>
        </div>
    );
}