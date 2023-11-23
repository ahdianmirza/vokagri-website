import React from 'react';
import { Link, Head } from "@inertiajs/react";
import Navbar from '@/Components/Navbar';
import LayananCard from '@/Components/Layanan/layananCard';
import KontakList from '@/Components/Kontak/KontakList';
import FormInput from '@/Components/Kontak/FormInput';
import ButtonLink from '@/Components/ButtonLink';
import Button from '@/Components/Button';
import Footer from '@/Components/Footer';
import Image from '@/Components/AboutUs/image';

export default function Homepage(props) {
    const {title} = props;

    return (
        <div>
            <Head title={title} />

            {/* Hero Section Start */}
            <div id="hero" className="bg-hero-bg min-h-screen bg-cover">
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

                    <div className="w-full min-h-screen flex flex-col justify-center">
                        <div className="w-1/2 mb-6">
                            <h1 className="text-white-primary text-[52px] font-bold leading-[64px] mb-2">
                                Raih Keuntungan Usaha Pertanianmu
                            </h1>
                            <p className="text-white-primary">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, numquam! Eius
                                dolorem perspiciatis veritatis molestias
                                repudiandae voluptate provident doloribus
                                officiis?
                            </p>
                        </div>
                        <div>
                            <ButtonLink
                                width="w-[237px]"
                                height="h-[70px]"
                                hrefLink="#layanan"
                                buttonBg="bg-[#1D7E5A]"
                                buttonBgHover="hover:bg-[#17654a]"
                            >
                                Temukan Layanan
                                <span className="text-white-primary">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19.704 12L11.212 3.273C11.1421 3.20267 11.0868 3.11917 11.0494 3.02734C11.012 2.93551 10.9931 2.83717 10.9939 2.738C10.9947 2.63884 11.0152 2.54082 11.0542 2.44962C11.0931 2.35843 11.1498 2.27586 11.2209 2.2067C11.2919 2.13754 11.376 2.08317 11.4683 2.04672C11.5605 2.01027 11.659 1.99248 11.7582 1.99437C11.8573 1.99626 11.9551 2.01779 12.0459 2.05772C12.1367 2.09765 12.2186 2.15519 12.287 2.227L21.287 11.477C21.4232 11.617 21.4995 11.8047 21.4995 12C21.4995 12.1953 21.4232 12.383 21.287 12.523L12.287 21.773C12.2186 21.8448 12.1367 21.9023 12.0459 21.9423C11.9551 21.9822 11.8573 22.0037 11.7582 22.0056C11.659 22.0075 11.5605 21.9897 11.4683 21.9533C11.376 21.9168 11.2919 21.8625 11.2209 21.7933C11.1498 21.7241 11.0931 21.6416 11.0542 21.5504C11.0152 21.4592 10.9947 21.3612 10.9939 21.262C10.9931 21.1628 11.012 21.0645 11.0494 20.9727C11.0868 20.8808 11.1421 20.7973 11.212 20.727L19.704 12Z" />
                                    </svg>
                                </span>
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}

            {/* About Us Section Start */}
            <div id="aboutUs" className="h-[703px] bg-white-primary">
                <div className="mx-[93px] h-full flex justify-center items-center">
                    <div className="w-3/5">
                        <h1 className="text-black-primary text-[52px] font-bold leading-[64px] mb-6">
                            VokAgri : Nurturing Agriculture Innovation
                        </h1>
                        <p className="text-black-primary">
                            VokAgri adalah aplikasi manajemen yang membantu tiap
                            pemilik usaha di bidang pertanian untuk
                            mengoptimalkan keuntungan dan mampu melakukan
                            tindakan preventif jika ditemukan gejala pada produk
                            secara efisien. VokAgri.id mengadopsi konsep
                            manajemen keuangan dengan tampilan yang lebih
                            sederhana dan mudah dipahami oleh pengguna.
                        </p>
                    </div>
                    <div className="w-2/5 flex gap-x-5">
                        <div className="flex flex-col justify-center items-end gap-y-5">
                            <Image src="img/gambar1.png" alt="Gambar 1" />
                            <Image src="img/gambar3.png" alt="Gambar 3" />
                        </div>
                        <div className="flex flex-col justify-center items-end gap-y-5 mb-[100px]">
                            <Image src="img/gambar2.png" alt="Gambar 2" />
                            <Image src="img/gambar4.png" alt="Gambar 4" />
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us Section End */}

            {/* Layanan Section Start */}
            <div id="layanan" className="h-[703px] bg-page">
                <div className="text-primary h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center mb-12">
                        <h1 className="font-semibold text-5xl">Layanan Kami</h1>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus, accusamus?
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <LayananCard
                            src="img/iconInformasi.png"
                            alt="Icon Informasi"
                            title="Informasi"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet, atque?
                        </LayananCard>

                        <LayananCard
                            src="img/iconKonsultasi.png"
                            alt="Icon Informasi"
                            title="Konsultasi"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet, atque?
                        </LayananCard>

                        <LayananCard
                            src="img/iconPenjualan.png"
                            alt="Icon Informasi"
                            title="Penjualan"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet, atque?
                        </LayananCard>
                    </div>
                </div>
            </div>
            {/* Layanan Section End */}

            {/* Kontak Section End */}
            <div id="kontak" className="bg-kontak-bg min-h-screen bg-cover">
                <div className="mx-[93px] flex items-center">
                    <div className="w-1/2 h-screen flex flex-col justify-center">
                        <div className="mb-8">
                            <h1 className="text-[40px] text-white-primary font-bold leading-[56px]">
                                Butuh Konsultasi ?
                            </h1>
                            <h1 className="text-[40px] text-white-primary font-bold leading-[56px]">
                                Silahkan Kontak Kami
                            </h1>
                            <h1 className="text-[40px] text-white-primary font-bold leading-[56px]">
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

                    <div className="w-[580px] h-[445px] bg-white-primary rounded-lg px-12 py-[34px]">
                        <h1 className="font-semibold text-primary text-[40px] text-center mb-4 leading-[56px]">
                            Form Pertanyaan
                        </h1>
                        <form action="">
                            <FormInput
                                id="email"
                                label="Email"
                                type="text"
                                placeholder="Masukkan email Anda"
                            />
                            <FormInput
                                id="pertanyaan"
                                label="Pertanyaan"
                                type="text"
                                placeholder="Masukkan pertanyaan"
                            />
                            <Button
                                type="button"
                                classname="bg-primary hover:bg-[#0196a0] hover:duration-300 flex justify-center items-center w-full h-[66px] rounded-lg"
                            >
                                <p className="text-white-primary font-semibold text-2xl">
                                    Kirim
                                </p>
                                <span className="text-white-primary">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19.704 12L11.212 3.273C11.1421 3.20267 11.0868 3.11917 11.0494 3.02734C11.012 2.93551 10.9931 2.83717 10.9939 2.738C10.9947 2.63884 11.0152 2.54082 11.0542 2.44962C11.0931 2.35843 11.1498 2.27586 11.2209 2.2067C11.2919 2.13754 11.376 2.08317 11.4683 2.04672C11.5605 2.01027 11.659 1.99248 11.7582 1.99437C11.8573 1.99626 11.9551 2.01779 12.0459 2.05772C12.1367 2.09765 12.2186 2.15519 12.287 2.227L21.287 11.477C21.4232 11.617 21.4995 11.8047 21.4995 12C21.4995 12.1953 21.4232 12.383 21.287 12.523L12.287 21.773C12.2186 21.8448 12.1367 21.9023 12.0459 21.9423C11.9551 21.9822 11.8573 22.0037 11.7582 22.0056C11.659 22.0075 11.5605 21.9897 11.4683 21.9533C11.376 21.9168 11.2919 21.8625 11.2209 21.7933C11.1498 21.7241 11.0931 21.6416 11.0542 21.5504C11.0152 21.4592 10.9947 21.3612 10.9939 21.262C10.9931 21.1628 11.012 21.0645 11.0494 20.9727C11.0868 20.8808 11.1421 20.7973 11.212 20.727L19.704 12Z" />
                                    </svg>
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Kontak Section End */}

            {/* Footer Section Start */}
            <Footer id="footer" />
            {/* Footer Section End */}
        </div>
    );
}