export default function Image(props) {
    const {src, alt} = props

    return (
        <div>
            <img
                className="hover:scale-105 hover:duration-300"
                src={src}
                alt={alt}
            />
        </div>
    );
}
