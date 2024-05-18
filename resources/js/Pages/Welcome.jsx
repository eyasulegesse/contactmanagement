import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import AdminLayout from "@/Layouts/adminlayout/AdminLayout";
import { Link, Head, router } from "@inertiajs/react";
import React, { useState } from "react";

import Input from "@/Components/UI/Input";
import Table from "@/Components/UI/Table";
import Message from "@/Components/UI/Message";
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    contacts,
}) {
    const [viewModal, setViewModal] = useState(false);
    const [viewMessage, setViewMessage] = useState(false);

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
    const viewModalHandler = () => {
        setViewModal(true);
    };
    const closeModalHandler = () => {
        setInputValue({
            firstName: "",
            middleName: "",
            lastName: "",
        });
        setViewModal(false);
    };
    const closeMessageHandler = () => {
        setViewMessage(false);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        router.post(route("contact.store"), inputValue, {
            onSuccess: () => {
                setViewModal(false);
                setViewMessage(true);
                setInputValue({
                    firstName: "",
                    middleName: "",
                    lastName: "",
                });
            },
        });
    };

    const deleteHandler = (id) => {
        router.delete(`/contact/${id}`, {
            onSuccess: () => {
                setViewMessage(true);
            },
        });
    };
    const columns = [
        { title: "ID", dataIndex: "id" },
        { title: "First Name", dataIndex: "firstName" },
        { title: "Middle Name", dataIndex: "middleName" },
        { title: "Last Name", dataIndex: "lastName" },
    ];
    return (
        <AdminLayout>
            <Head title="Welcome" />
            <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Button
                        title="Add New Contact"
                        onViewModal={viewModalHandler}
                    />
                </div>
            </header>
            {viewModal && (
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
                </Modal>
            )}

            <Table data={contacts} columns={columns} onDelete={deleteHandler} />
            {viewMessage && (
                <Message
                    message="Contact Successfully Registered"
                    type="success "
                    closeMessage={closeMessageHandler}
                />
            )}
        </AdminLayout>
    );
}
