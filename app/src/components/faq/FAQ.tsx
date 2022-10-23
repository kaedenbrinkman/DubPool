import { Component } from "react";

interface FAQProps { }

interface FAQState { }

class FAQ extends Component<FAQProps, FAQState> {
  constructor(props: FAQProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
      <h1 className="text-pink">FAQ</h1>
      <p>Below are answers to commonly asked questions</p>
      <h2 className="text-pink">What is DubPool?</h2>
      <p></p>
      <h2 className="text-pink">How do I use DubPool?</h2>
      <p></p>
      <h2 className="text-pink">How do I sign up?</h2>
      <p></p>
      <h2 className="text-pink">How can I be sure that my privacy is ensured?</h2>
      <p>DubPool is only accessibly to UW students. It is ensured that no one outside of the university can use the application as they do not have a UW ID to log in with.</p>
      <h2 className="text-pink">Will anyone know where I live?</h2>
      <p>
        Only if you tell them directly. DubPool will give a general location away from your address so that the person driving and anyone else nearby will never know where you exactly live.
      </p>
      <p>
        Additionally, if any problems or issues arise, the user is always capable of canceling the ride and potentially reporting the student.
      </p>
      <h2 className="text-pink">How do I contact the developers?</h2>
      <p></p>
    </div>);
  }
}

export default FAQ;