export default function LayananCard(props) {
    const { src, alt, title, children } = props;

    return (
        <div className="w-[380px] h-[300px] hover:scale-[1.03] bg-white-primary hover:bg-[#c8fffb] hover:duration-300 rounded-lg px-[62px] py-[53px] flex flex-col justify-center items-center text-[#3B3B3B] drop-shadow-xl">
            <img className="mb-6" src={src} alt={alt} />
            <h1 className="text-center font-semibold text-2xl">{title}</h1>
            <p className="text-center">{children}</p>
        </div>
    );
}