const Button = (props) => {
    return (
        <button
            type={props.type || "submit"}
            onClick={props.onViewModal}
            className="bg-appColor2 hover:bg-appColor1 text-appWhite px-MediumSpace py-extraSmall rounded-xl"
        >
            {props.title}
        </button>
    );
};

export default Button;
