import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container">
                <h2 className="text-center " style={{ margin: "4.5rem 0" }}>
                    The Counter Strike 2 Coach <br />
                    <span className="fst-italic fw-lighter fs-5">(Powered by OpenAI)</span>
                </h2>

                {/* Information about the abilities of the bot on the site */}
                <div className="container">
                    <div className="row justify-content-center" style={{ marginBottom: "5rem" }}>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">What can the Counter Strike 2 Coach do?</h5>
                                    <p className="card-text">
                                        The Counter Strike 2 Coach is a tool that can help you improve your Counter
                                        Strike 2 gameplay. You can ask questions about the game and get answers, or you
                                        can use the Roulette feature to get a random Counter Strike 2 strat to try with
                                        your team.
                                    </p>

                                    <h5 className="card-title">How does it work?</h5>
                                    <p className="card-text">
                                        The Counter Strike 2 Coach uses OpenAI's GPT-3.5 turbo model to generate
                                        responses to your questions. The model has been trained on a large dataset of
                                        Counter Strike 2 information, so it can provide accurate and helpful answers to
                                        a wide range of questions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards for the different funktions */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Questions</h5>
                                    <p className="card-text">Ask questions about Counter Strike 2 and get answers.</p>
                                    <NavLink to="/questions" className="btn btn-primary">
                                        Go to Questions
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Roulette</h5>
                                    <p className="card-text">
                                        Get a random Counter Strike 2 strat to try with your team.
                                    </p>
                                    <NavLink to="/roulette" className="btn btn-primary">
                                        Go to Roulette
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
