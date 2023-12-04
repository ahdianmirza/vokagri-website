export default function LayananCard(props) {
    const { src, alt, title, children } = props;

    return (
        <div className="md:w-[380px] md:h-[300px] hover:scale-[1.03] bg-white-primary hover:bg-[#c8fffb] hover:duration-300 rounded-lg px-4 py-10 md:px-[62px] md:py-[53px] flex flex-col justify-center items-center text-[#3B3B3B] drop-shadow-xl">
            <img className="mb-2 md:mb-6" src={src} alt={alt} />
            <h1 className="text-center font-semibold text-lg md:text-2xl">{title}</h1>
            <p className="text-sm md:text-base text-center">{children}</p>
        </div>
    );
}