import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ButtonLink from "@/Components/ButtonLink";
import LayananCard from "@/Components/Layanan/LayananCard";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/Product/ProductCard";

export default function Product(props) {
    const {title} = props;
    
    return (
        <div>
            <Head title={title} />

            {/* Product Hero Section Start */}
            <div id="hero" className="bg-product-bg min-h-screen bg-cover">
                <div className="mx-[93px]">
                    <Navbar
                        hrefHome="/"
                        hrefBeranda="/"
                        hrefTentang="#aboutUs"
                        hrefLayanan="#layanan"
                        hrefKontak="#kontak"
                        hrefProduk="/products"
                        hrefDaftar="/"
                        hrefMasuk="/"
                        fontColor="text-primary"
                        logoWidth="w-full"
                        buttonWidth="w-[120px]"
                        buttonHeight="h-10"
                        buttonBg="bg-primary"
                        buttonBgHover="hover:bg-[#0196a0]"
                    />

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
            <div id="product" className="w-full h-[748px] bg-page">
                <div className="text-primary mx-[90px] flex flex-col justify-center">
                    <div className="mt-12 mb-4">
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

