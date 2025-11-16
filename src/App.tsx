import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PripravujemePage from "./pages/PripravujemePage";
import NabijeniPage from "./pages/NabijeniPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f6f7f9]">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pripravujeme" element={<PripravujemePage />} />
            <Route path="/nabijeni-do-site" element={<NabijeniPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
