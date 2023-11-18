export default function AuthButtonList(props) {
    const { hrefDaftar, hrefMasuk } = props;

    return (
        <div className="w-full flex justify-end items-center">
            <a href={hrefDaftar} className="font-semibold text-primary mr-8">
                Daftar
            </a>
            <a href={hrefMasuk} className="flex justify-center items-center w-[120px] h-10 bg-primary rounded-lg text-white font-semibold">
                Masuk
            </a>
        </div>
    );
}