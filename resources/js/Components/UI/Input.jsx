const Input = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div className="py-smallSpace">
            <h3 className="font-bold my-smallSpace">{label}</h3>
            <input
                className="h-[30px] w-[100%] border-[2px] rounded-lg"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
