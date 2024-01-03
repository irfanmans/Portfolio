import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Navbar from "./assets/Components/Navbar/Navbar";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
