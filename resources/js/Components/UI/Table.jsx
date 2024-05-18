const Table = ({ data, columns, onDelete }) => {
    return (
        <table className="w-[100%] border-2">
            <thead>
                <tr className="bg-appColor2 text-appWhite text-left ">
                    {columns.map((col) => (
                        <th className="pl-8">{col["title"]}</th>
                    ))}
                    <th className="pl-8">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr>
                        <td className="pl-10">{item["id"]}</td>
                        <td className="pl-10">{item["firstName"]}</td>
                        <td className="pl-10">{item["middleName"]}</td>
                        <td className="pl-10">{item["lastName"]}</td>
                        <td className="pl-10">
                            <h3
                                className="cursor-pointer"
                                onClick={() => onDelete(item["id"])}
                            >
                                Delete
                            </h3>
                            <h3 className="cursor-pointer">Edit</h3>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
