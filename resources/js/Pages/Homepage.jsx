import React from 'react';
import { Link, Head } from "@inertiajs/react";
import KontakList from '@/Components/Kontak/KontakList';
import ButtonLink from '@/Components/ButtonLink';
import Image from '@/Components/AboutUs/image';
import NavbarNew from '@/Components/NavbarNew';
import LayananCardNew from '@/Components/Layanan/LayananCardNew';
import KontakFormCard from '@/Components/Kontak/KontakFormCard';
import Footer from '@/Components/Footer';

export default function Homepage(props) {
    const {title} = props;

    return (
        <div>
            <Head title={title} />

            {/* Hero Section Start */}
            <div
                id="hero"
                className="bg-hero-bg min-h-screen bg-auto bg-left md:bg-cover"
            >
                <div className="mx-4 md:mx-[93px]">
                    <NavbarNew />

                    <div className="w-full min-h-screen flex flex-col justify-center">
                        <div className="md:w-1/2 mb-6">
                            <h1 className="text-white-primary text-center md:text-start text-3xl md:text-[52px] font-bold md:leading-[64px] mb-6">
                                Raih Keuntungan Usaha Pertanianmu
                            </h1>
                            <p className="text-center md:text-start text-white-primary">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, numquam! Eius
                                dolorem perspiciatis veritatis molestias
                                repudiandae voluptate provident doloribus
                                officiis?
                            </p>
                        </div>
                        <div className="flex justify-center items-center md:justify-start">
                            <ButtonLink hrefLink="#layanan">
                                Temukan Layanan
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 ml-2"
                                >
                                    <path
                                        d="M19.704 12L11.212 3.273C11.1421 3.20267 11.0868 3.11917 11.0494 3.02734C11.012 2.93551 10.9931 2.83717 10.9939 2.738C10.9947 2.63884 11.0152 2.54082 11.0542 2.44962C11.0931 2.35843 11.1498 2.27586 11.2209 2.2067C11.2919 2.13754 11.376 2.08317 11.4683 2.04672C11.5605 2.01027 11.659 1.99248 11.7582 1.99437C11.8573 1.99626 11.9551 2.01779 12.0459 2.05772C12.1367 2.09765 12.2186 2.15519 12.287 2.227L21.287 11.477C21.4232 11.617 21.4995 11.8047 21.4995 12C21.4995 12.1953 21.4232 12.383 21.287 12.523L12.287 21.773C12.2186 21.8448 12.1367 21.9023 12.0459 21.9423C11.9551 21.9822 11.8573 22.0037 11.7582 22.0056C11.659 22.0075 11.5605 21.9897 11.4683 21.9533C11.376 21.9168 11.2919 21.8625 11.2209 21.7933C11.1498 21.7241 11.0931 21.6416 11.0542 21.5504C11.0152 21.4592 10.9947 21.3612 10.9939 21.262C10.9931 21.1628 11.012 21.0645 11.0494 20.9727C11.0868 20.8808 11.1421 20.7973 11.212 20.727L19.704 12Z"
                                        fill="#F8FAFC"
                                    />
                                </svg>
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}

            {/* About Us Section Start */}
            <div id="aboutUs" className="h-fit md:h-[703px] bg-white-primary">
                <div className="px-4 py-10 md:p-0 md:mx-[93px] h-full flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-3/5">
                        <h1 className="md:text-start text-black-primary text-2xl md:text-[52px] font-bold md:leading-[64px] mb-2 md:mb-6">
                            VokAgri : Nurturing Agriculture Innovation
                        </h1>
                        <p className="text-black-primary text-justify md:text-start">
                            VokAgri adalah aplikasi manajemen yang membantu tiap
                            pemilik usaha di bidang pertanian untuk
                            mengoptimalkan keuntungan dan mampu melakukan
                            tindakan preventif jika ditemukan gejala pada produk
                            secara efisien. VokAgri.id mengadopsi konsep
                            manajemen keuangan dengan tampilan yang lebih
                            sederhana dan mudah dipahami oleh pengguna.
                        </p>
                    </div>
                    <div className="md:w-2/5 flex md:flex-row gap-x-2 md:gap-x-5">
                        <div className="flex flex-col justify-center items-end gap-y-2 md:gap-y-5">
                            <Image src="img/gambar1.png" alt="Gambar 1" />
                            <Image src="img/gambar3.png" alt="Gambar 3" />
                        </div>
                        <div className="flex flex-col justify-center items-end gap-y-2 md:gap-y-5 mb-20 md:mb-[100px]">
                            <Image src="img/gambar2.png" alt="Gambar 2" />
                            <Image src="img/gambar4.png" alt="Gambar 4" />
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us Section End */}

            {/* Layanan Section Start */}
            <div id="layanan" className="h-fit md:h-[703px] bg-page">
                <div className="px-4 py-10 md:p-0 text-primary h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center mb-6 md:mb-12">
                        <h1 className="font-semibold text-3xl md:text-5xl">
                            Layanan Kami
                        </h1>
                        <p className="text-center md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus, accusamus?
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        <LayananCardNew
                            title="Informasi"
                            src="img/iconInformasi.png"
                            alt="Icon Informasi"
                        >
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </LayananCardNew>
                        <LayananCardNew
                            title="Konsultasi"
                            src="img/iconKonsultasi.png"
                            alt="Icon Konsultasi"
                        >
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </LayananCardNew>
                        <LayananCardNew
                            title="Penjualan"
                            src="img/iconPenjualan.png"
                            alt="Icon Penjualan"
                        >
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </LayananCardNew>
                    </div>
                </div>
            </div>
            {/* Layanan Section End */}

            {/* Kontak Section End */}
            <div
                id="kontak"
                className="bg-kontak-bg min-h-screen bg-auto bg-left md:bg-cover"
            >
                <div className="px-4 py-10 md:mx-[93px] flex flex-col md:flex-row md:flex-wrap items-center">
                    <div className="md:w-1/2 md:h-screen flex flex-col justify-center mb-10">
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-3xl md:text-[40px] text-white-primary font-bold md:leading-[56px]">
                                Butuh Konsultasi ?
                            </h1>
                            <h1 className="text-3xl md:text-[40px] text-white-primary font-bold md:leading-[56px]">
                                Silahkan Kontak Kami
                            </h1>
                            <h1 className="text-3xl md:text-[40px] text-white-primary font-bold md:leading-[56px]">
                                Kami Siap Membantu
                            </h1>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-white-primary font-semibold mb-3">
                                Kontak
                            </h1>
                            <KontakList src="img/location.png" alt="Lokasi">
                                Sekolah Vokasi IPB
                            </KontakList>
                            <KontakList src="img/whatsapp.png" alt="Whatsapp">
                                123-456-789
                            </KontakList>
                            <KontakList src="img/email.png" alt="Email">
                                vokagri@gmail.com
                            </KontakList>
                        </div>
                        <div>
                            <h1 className="text-white-primary font-semibold mb-3">
                                Sosial Media
                            </h1>
                            <KontakList src="img/instagram.png" alt="Instagram">
                                @vokagri
                            </KontakList>
                        </div>
                    </div>

                    <KontakFormCard />
                </div>
            </div>
            {/* Kontak Section End */}

            {/* Footer Section Start */}
            <Footer id="footer" />
            {/* Footer Section End */}
        </div>
    );
}