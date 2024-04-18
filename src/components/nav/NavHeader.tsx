import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom navbar-expand-lg" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        CounterChat Protocol
                    </NavLink>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/questions">
                                Questions
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/roulette">
                                Roulette
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
