import { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

interface AboutPageProps { }

interface AboutPageState { }

class AboutPage extends Component<AboutPageProps, AboutPageState> {
  constructor(props: AboutPageProps) {
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
            <Link className="btn btn-outline-secondary" to="/sign-up">Sign Up</Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </main >);
  }
}

export default AboutPage;