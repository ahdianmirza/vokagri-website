import React from "react";
import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/Product/ProductCard";
import NavbarNew from "@/Components/NavbarNew";

export default function Product(props) {
    const {title} = props;
    
    return (
        <div>
            <Head title={title} />

            {/* Product Hero Section Start */}
            <div id="hero" className="bg-product-bg min-h-screen bg-cover">
                <NavbarNew
                    location={props.ziggy.location}
                    url={props.ziggy.url}
                />
                <div className="mx-[93px]">
                    <div className="w-full min-h-screen flex flex-col justify-center items-center">
                        <div className="w-full mb-6">
                            <h1 className="text-white-primary text-center text-[48px] font-bold leading-[64px] mb-2">
                                Menyediakan Beberapa Produk Terbaik
                            </h1>
                            <p className="text-white-primary text-[24px] text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, numquam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Hero Section End */}

            {/* Product List Section Start */}
            <div id="products" className="w-full py-12 bg-page">
                <div className="text-primary mx-[90px] flex flex-col justify-center">
                    <div className="mb-4">
                        <h1 className="font-semibold text-[40px]">
                            Produk Kami
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <ProductCard>
                            <ProductCard.Header
                                image="img/product.jpg"
                                alt="Produk"
                            />
                            <ProductCard.Body
                                name="Nama Produk"
                                price="1.000.000"
                            />
                        </ProductCard>

                        <ProductCard>
                            <ProductCard.Header
                                image="img/product.jpg"
                                alt="Produk"
                            />
                            <ProductCard.Body
                                name="Nama Produk"
                                price="1.000.000"
                            />
                        </ProductCard>

                        <ProductCard>
                            <ProductCard.Header
                                image="img/product.jpg"
                                alt="Produk"
                            />
                            <ProductCard.Body
                                name="Nama Produk"
                                price="1.000.000"
                            />
                        </ProductCard>

                        <ProductCard>
                            <ProductCard.Header
                                image="img/product.jpg"
                                alt="Produk"
                            />
                            <ProductCard.Body
                                name="Nama Produk"
                                price="1.000.000"
                            />
                        </ProductCard>

                        <ProductCard>
                            <ProductCard.Header
                                image="img/product.jpg"
                                alt="Produk"
                            />
                            <ProductCard.Body
                                name="Nama Produk"
                                price="1.000.000"
                            />
                        </ProductCard>
                    </div>
                </div>
            </div>
            {/* Product List Section End */}

            {/* Footer Section Start */}
            <Footer id="footer" />
            {/* Footer Section End */}
        </div>
    );
}

