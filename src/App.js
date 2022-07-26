import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
//import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AddExpenses from "./pages/addExpenses";
import UserList from "./pages/userHome";
import AddEditUserForm from "./components/addUserForm";
import AuthorizationHome from "./pages/authoHome";
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addexpenses" element={<AddExpenses />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/adduser" element={<AddEditUserForm />} />
          <Route path="/auth" element={<AuthorizationHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
