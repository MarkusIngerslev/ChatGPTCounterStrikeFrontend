function Questions() {
    return (
        <>
            <div className="container">
                <h2 className="text-center " style={{ margin: "4.5rem 0" }}>
                    Questions about Counter Strike 2 <br />
                    <span className="fst-italic fw-lighter fs-5">(Powered by OpenAI)</span>
                </h2>

                {/* How to use this page of the site */}
                <div className="container">
                    <div className="row justify-content-center" style={{ marginBottom: "3rem" }}>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Ask about counter Strike</h5>
                                    <form id="form-question" className="container">
                                        <div className="row">
                                            <p className="card-text">
                                                You can ask questions about Counter Strike 2 and get answers from the
                                                Counter Strike 2 Coach.
                                            </p>
                                            <label htmlFor="about">Topic</label>
                                            <input
                                                type="text"
                                                id="about"
                                                className="result"
                                                placeholder="Enter your question about counter strike 2"
                                            />
                                        </div>
                                        <div className="row mt-3">
                                            <div className="column text-end">
                                                <button type="submit" className="btn btn-primary" id="btn-ask-question">
                                                    Ask
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div
                                        id="spinner1"
                                        className="spinner-border text-success"
                                        role="status"
                                        style={{ marginLeft: "1em", borderRadius: "50%", display: "none" }}
                                    >
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p id="result" className="result"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
