import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Helper/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from './Components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <UserStorage>
        <Header />
        <main className="AppBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<ProtectedRoute>
            <Login />
          </ProtectedRoute>} />
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
