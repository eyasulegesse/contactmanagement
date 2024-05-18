import Input from "@/Components/UI/Input";
import Modal from "../UI/Modal";
import { router } from "@inertiajs/react";

const Create = () => {
    const [inputValue, setInputValue] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
    });

    const { firstName, middleName, lastName } = inputValue;

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const submitHandler = (event) => {
        event.preventDefault();
        router.post(route("contact.store"), inputValue, {
            onSuccess: () => {
                setViewModal(false);
                setViewMessage(true);
            },
        });
    };

    <Modal title="Add New Contact" onClose={closeModalHandler}>
        <form onSubmit={submitHandler}>
            <Input
                type="text"
                label="First Name"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                onChange={inputChangeHandler}
            />
            <Input
                type="text"
                label="Middle Name"
                placeholder="Enter Middle Name"
                name="middleName"
                value={middleName}
                onChange={inputChangeHandler}
            />
            <Input
                type="text"
                label="Last Name"
                placeholder="Enter Last Name"
                value={lastName}
                name="lastName"
                onChange={inputChangeHandler}
            />
            <Button type="submit" title="Save" />
        </form>
    </Modal>;
};

export default Create;
