import Logo from "../Navbar/Logo";

export default function Footer(props) {
    const {id} = props;

    return (
        <div>
            <div id={id} className="w-full h-[96px] bg-primary">
                <div className="mx-[93px] h-full flex justify-between items-center">
                    <Logo hrefHome="/" fontColor="text-white-primary" />
                    <p className="text-white-primary text-[14px]">
                        Copyright by VokAgri All Right Reserved. © 2023
                    </p>
                </div>
            </div>
        </div>
    );
}
