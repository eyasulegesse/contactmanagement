const Message = (props) => {
    return (
        <div className="fixed top-0 left-0 z-20 w-full h-[100vh] bg-appBlack bg-opacity-75 ">
            {props.type == "success " ? (
                <div className="fixed top-[30vh] left-[35%] w-[400px] z-10 bg-appWhite  ">
                    <div className="flex justify-between bg-appsuccess text-appWhite px-[20px]">
                        <h3>success</h3>
                        <h3
                            className="cursor-pointer"
                            onClick={props.closeMessage}
                        >
                            X
                        </h3>
                    </div>
                    <div className="pl-5 py-5"> {props.message}</div>
                </div>
            ) : (
                <div>error</div>
            )}
        </div>
    );
};

export default Message;
