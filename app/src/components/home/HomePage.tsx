import { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

interface HomePageProps { }

interface HomePageState { }

class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Carpool, made easy</h1>
            <p className="lead fw-normal">Find other students whose commuting schedule matches yours.</p>
            <Link className="btn btn-outline-secondary" to="/log-in">Sign Up</Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </main >);
  }
}

export default HomePage;