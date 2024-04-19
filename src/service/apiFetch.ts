const SERVER_URL = "http://localhost:8080/api/v1/";

export async function fetchAnswerQuestions(question: string): Promise<string> {
    const URL = `${SERVER_URL}questions?about=${question}`;

    try {
        const response = await fetch(URL).then(handleHttpErrors);
        return response.answer;
    } catch (err) {
        throw new Error("Failed to fetch answer: " + (err as Error).message);
    }
}

async function handleHttpErrors(res: Response) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const msg = errorResponse.message ? errorResponse.message : "No error details provided";
        throw new Error(msg);
    }
    return res.json();
}
