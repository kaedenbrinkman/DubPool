import { Component } from "react";
import { Link } from "react-router-dom";

interface HowItWorksProps { }

interface HowItWorksState { }

class HowItWorks extends Component<HowItWorksProps, HowItWorksState> {
  constructor(props: HowItWorksProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">How it works</h1>
            <p className="lead fw-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sed animi eaque?</p>
            <Link className="btn btn-outline-secondary" to="/sign-up">Sign Up</Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </main >);
  }
}

export default HowItWorks;