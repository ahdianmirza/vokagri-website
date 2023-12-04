import Logo from "../Navbar/Logo";

export default function Footer(props) {
    const {id} = props;

    return (
        <div>
            <div id={id} className="h-[96px] w-full bg-primary">
                <div className="px-4 md:p-0 md:mx-[93px] h-full flex items-center">
                    <div className="w-full flex justify-between items-center">
                        <Logo width="w-full" hrefHome="/" fontColor="text-white-primary" />
                        <p className="w-full flex justify-end text-white-primary text-xs md:text-[14px]">
                            Copyright by VokAgri All Right Reserved. © 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
