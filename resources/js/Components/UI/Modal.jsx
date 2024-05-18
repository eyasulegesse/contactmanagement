import React from "react";

const Modal = (props) => {
    return (
        <div className="fixed top-0 left-0 z-20 w-[100%] h-[100vh] bg-appBlack bg-opacity-75">
            <div className="fixed top-[10vh] left-[30%] w-[40%] z-[100px] bg-appWhite rounded-2xl ">
                <div className="flex justify-between h-[50px] pt-smallSpace bg-appColor2 text-appWhite px-smallSpace rounded-t-lg">
                    {props.title}
                    <h3 className="cursor-pointer" onClick={props.onClose}>
                        X
                    </h3>
                </div>
                <div className="p-BigSpace">{props.children}</div>
            </div>
        </div>
    );
};

export default Modal;
