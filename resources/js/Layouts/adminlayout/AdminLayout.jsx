import Header from "./Header";

const AdminLayout = (props) => {
    return (
        <div class="min-h-full">
            <Header />

            <main>
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {props.children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
