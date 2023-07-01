import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./templates/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Users from './pages/Users';
import NewUser from './pages/NewUser';
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Footer from './templates/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/users" Component={Users} />
          <Route path="/newuser" Component={NewUser} />
          <Route path="/about" Component={About} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  )
}

export default App
