import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface NavBarProps { }

interface NavBarState {
  currentPage: string;
}

class NavBar extends Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      currentPage: window.location.pathname,
    };
  }
  render() {
    const mainMenu = [
      { name: "Matches", link: "/" },
      { name: "Messages", link: "/messages" },
    ];
    return (
      <header className="py-3 mb-3 border-bottom no-print">
        <div className="container-fluid d-grid gap-3 align-items-center custom-grid-template-columns">
          <div className="dropdown">
            <Link
              to="/"
              className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-car fs-4 mb-2 mt-0"></i>
              <h1 className="fs-5 ms-1">DubPool</h1>
            </Link>
            <ul className="dropdown-menu text-small shadow">
              {mainMenu.map((menuItem) => {
                let active = this.state.currentPage === menuItem.link;
                return (
                  <li key={menuItem.name}>
                    <Link
                      to={menuItem.link}
                      className={"dropdown-item" + (active ? " active" : "")}
                      aria-current={active ? "page" : undefined}
                      onClick={() => {
                        this.setState({ currentPage: menuItem.link });
                      }}
                    >
                      {menuItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3" role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                style={{ opacity: 0 }}
              />
            </form>
            <div className="flex-shrink-0 dropdown">
              <Link
                to="/account"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Link>
              <ul className="dropdown-menu text-small shadow">
              <li>
                  <Link className="dropdown-item" to="/privacy">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/";
                    }}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;