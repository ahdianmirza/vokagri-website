export default function Button(props) {
    const {type, classname, children} = props;

    return (
        <div>
            <button
                type={type}
                className={classname}
            >
                {children}
            </button>
        </div>
    );
}
