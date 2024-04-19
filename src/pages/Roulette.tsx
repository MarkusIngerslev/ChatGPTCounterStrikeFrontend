import React, { useState } from "react";
import { fetchAnswerRoulette } from "../service/apiFetch"; // Stien til din api.ts-fil

function Roulette() {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetchAnswerRoulette(question);
            setAnswer(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center" style={{ margin: "4.5rem 0" }}>
                Roulette Strats for Counter Strike 2 <br />
                <span className="fst-italic fw-lighter fs-5">(Powered by OpenAI)</span>
            </h2>

            <div className="container">
                <div className="row justify-content-center" style={{ marginBottom: "3rem" }}>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ask about Counter Strike strategies</h5>
                                <form onSubmit={handleSubmit} className="container">
                                    <div className="row">
                                        <p className="card-text">You can ask for a random Counter Strike 2 strategy.</p>
                                        <label htmlFor="about">Counter Strike 2 Map:</label>
                                        <input
                                            type="text"
                                            id="about"
                                            className="result"
                                            placeholder="Enter the map you want a strategy for"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                        />
                                    </div>
                                    <div className="row mt-3">
                                        <div className="column text-end">
                                            <button type="submit" className="btn btn-primary" id="btn-ask-question">
                                                {loading ? "Loading..." : "Ask"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {loading && (
                                    <div
                                        className="spinner-border text-success"
                                        role="status"
                                        style={{ marginLeft: "1em", borderRadius: "50%" }}
                                    />
                                )}
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                {answer && <p className="result">{answer}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Roulette;
