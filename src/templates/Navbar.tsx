import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('accessToken') !== null;

  const renderAuthenticatedLinks = () => (
    <ul className="navbar-nav ml-auto text-right">
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          PROFILE
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">
          LOGOUT
        </NavLink>
      </li>
    </ul>
  );

  const renderGuestLinks = () => (
    <ul className="navbar-nav ml-auto text-right">
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          LOGIN
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          SIGNUP
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        USER MANAGEMENT
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                USERS
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
        </ul>
        {isLoggedIn ? renderAuthenticatedLinks() : renderGuestLinks()}
      </div>
    </nav>
  );
}

export default Navbar;
