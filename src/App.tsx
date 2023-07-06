import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./templates/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import UserLogin from './pages/blogPages/UserLogin';
import UserRegister from './pages/blogPages/UserRegister';
import UserProfile from './pages/blogPages/UserProfile';
import UsersView from './pages/blogPages/UsersView';

import Footer from './templates/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/users" Component={UsersView} />
          <Route path="/register" Component={UserRegister} />
          <Route path="/login" Component={UserLogin} />
          <Route path="/profile" Component={UserProfile} />
          <Route path="/about" Component={About} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  )
}

export default App
