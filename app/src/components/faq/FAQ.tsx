import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface FAQProps { }

interface FAQState { }

class FAQ extends Component<FAQProps, FAQState> {
  constructor(props: FAQProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<section className="mt-5">
      <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
      <p className="text-center mb-5">
        Find the answers for the most frequently asked questions below
      </p>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="bi bi-patch-question text-primary pe-2"></i>
            What is DubPool?
          </h6>
          <p>
            DubPool is a carpooling service for students at the University of Washington. We help students find other students who commute at the same time as them, so they can carpool together.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="bi bi-car-front text-primary pe-2"></i>
            How do I use DubPool?
          </h6>
          <p>
            Just log in, enter your commuting schedule, and match with students with a similar commute!
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="bi bi-people text-primary pe-2"></i>
            How do I sign up?
          </h6>
          <p>
            Click the "Login" button in the top right corner of the page, and then sign in with your UW Microsoft account.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="bi bi-shield-check text-primary pe-2"></i>
            How can I be sure that my privacy is ensured?
          </h6>
          <p>
            DubPool is only accessibly to UW students. It is ensured that no one outside of the university can use the application as they do not have a UW ID to log in with.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="bi bi-house text-primary pe-2"></i>
            Will anyone know where I live?
          </h6>
          <p>
            DubHacks does not share your home location unless you choose to host your vehicle. If you choose to host, other students will see your general location with a 0.5 mi radius.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="bi bi-person-lines-fill text-primary pe-2"></i>
            How do I contact the developers?
          </h6>
          <p>
            You can contact the developers at <a href="mailto:info@dubpool.tech">info@dubpool.tech</a>
          </p>
        </div>
      </div>
    </section>);
  }
}

export default FAQ;