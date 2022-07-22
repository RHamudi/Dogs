import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Helper/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<ProtectedRoute>
            <Login />
          </ProtectedRoute>} />
        </Routes>
        <Footer />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
