import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AddExpenses from "./pages/addExpenses";
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addexpenses" element={<AddExpenses />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
