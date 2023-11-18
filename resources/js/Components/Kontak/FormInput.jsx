export default function FormInput(props) {
    const { id, label, type, placeholder } = props;

    return (
        <div className="flex flex-col mb-6">
            <label htmlFor={id} className="text-2xl text-primary font-semibold mb-3 leading-[18px]">{label}</label>
            <input type={type} className="bg-[#d9d9d9] rounded-lg px-6 py-4 border-none" placeholder={placeholder} id={id} name={id} />
        </div>
    );
}