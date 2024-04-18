import NavHeader from "./nav/NavHeader";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <header className="mb-5">
                <NavHeader />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
