"use client";

import { Button, Card, Label, TextInput } from "flowbite-react";

const KontakFormCard = () => {
    return (
        <Card className="w-full md:max-w-sm">
            <h1 className="font-semibold text-primary text-2xl md:text-[40px] text-center md:leading-[56px]">
                Form Pertanyaan
            </h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Tuliskan email Anda"
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="pertanyaan" value="Pertanyaan" />
                    </div>
                    <TextInput
                        id="pertanyaan"
                        type="text"
                        placeholder="Tuliskan pertanyaan Anda"
                        required
                    />
                </div>
                <Button type="submit">Kirim</Button>
            </form>
        </Card>
    );
}
export default KontakFormCard;
