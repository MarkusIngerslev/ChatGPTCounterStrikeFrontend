import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom navbar-expand-md py-0" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand me-0" to="/">
                        <div className="row row-cols-2">
                            <img
                                src="../../../public/img/CounterChat Protocol only logo.png"
                                alt="logo af ai chatbot"
                                style={{ height: "60px", width: "auto" }}
                            />
                            <div className="col px-0">
                                <p className="fs-5 fst-italic mb-0">CounterChat Protocol</p>
                                <p className="fs-6 mb-0">The protocol calls for AI</p>
                            </div>
                        </div>
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
