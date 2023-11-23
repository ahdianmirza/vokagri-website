import React from 'react'

export default function ProductCard(props) {
    const {children} = props;

    return (
        <div className="w-[280px] bg-white rounded-2xl flex flex-col items-center">
            {children}
        </div>
    );
}

const Header = (props) => {
    const {image, alt} = props;

    return (
        <div className="w-[250px] my-4">
            <img className="rounded-2xl" src={image} alt={alt} />
        </div>
    );
};

const Body = (props) => {
    const { name, price } = props;

    return (
        <div className="w-full px-4 pb-4 flex justify-between items-center text-[#3B3B3B]">
            <div className="flex flex-col justify-center">
                <h4 className="font-bold leading-5">{name}</h4>
                <p className="font-semibold leading-5">Rp {price}</p>
            </div>
            <Button />
        </div>
    );
};

const Button = () => {
    return (
        <div>
            <button className="w-[100px] h-[34px] rounded-full bg-primary text-white-primary text-base font-semibold text-center">
                Beli
            </button>
        </div>
    );
}

ProductCard.Header = Header;
ProductCard.Body = Body;


