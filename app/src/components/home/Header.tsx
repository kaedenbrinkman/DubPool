import { Component } from "react";
import { Link } from "react-router-dom";

interface HeaderProps { }

interface HeaderState { }

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
            <li><Link to="/how-it-works" className="nav-link px-2 text-white">How it works</Link></li>
            <li><Link to="/privacy" className="nav-link px-2 text-white">Privacy</Link></li>
            <li><Link to="/faq" className="nav-link px-2 text-white">FAQs</Link></li>
            <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
          </ul>

          <div className="text-end">
            <Link to="/log-in" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/sign-up" className="btn btn-primary">Sign-up</Link>
          </div>
        </div>
      </div>
    </header>);
  }
}

export default Header;