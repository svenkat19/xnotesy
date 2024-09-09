import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigator=useNavigate()
  let handleLogout=()=>{
    localStorage.removeItem('token')
    navigator('/login')
  }
  let loc = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Xnotesy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${loc.pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    loc.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              
              {!localStorage.getItem('token')?<>
              <Link className="btn btn-primary me-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary" to="/signup" role="button">
                SignUp
              </Link></>:<button onClick={handleLogout} className="btn btn-primary">Logout</button>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
