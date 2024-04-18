import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom navbar-expand-md " data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        CounterChat Protocol
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon justify-content-end"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-end" id="navbarText">
                        <ul className="navbar-nav mb-2mb-lg-0 ">
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
                </div>
            </nav>
        </>
    );
}
