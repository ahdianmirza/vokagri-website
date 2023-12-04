"use client";

import { Card } from "flowbite-react";

function LayananCardNew(props) {
    const {title, children, src, alt} = props;

    return (
        <Card className="md:max-w-sm md:w-[380px] md:h-[300px]">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <img
                        className="w-[70px] mb-2 md:mb-6"
                        src={src}
                        alt={alt}
                    />
                    <h5 className="text-black-primary text-xl md:text-2xl text-center font-bold tracking-tight dark:text-white">
                        {title}
                    </h5>
                    <p className="text-center font-normal text-black-primary dark:text-gray-400">
                        {children}
                    </p>
                </div>
            </div>
        </Card>
    );
}
export default LayananCardNew;
