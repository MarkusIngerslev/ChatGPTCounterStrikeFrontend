import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Roulette from "./pages/Roulette";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/roulette" element={<Roulette />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
