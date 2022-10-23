import { Component } from "react";
import PromptForLocation from "./PromptForLocation";
import PromptForName from "./PromptForName";

interface OnboardingProps { }

interface OnboardingState {
  first_name: string;
  last_name: string;
  location: string;
}

class Onboarding extends Component<OnboardingProps, OnboardingState> {
  constructor(props: OnboardingProps) {
    super(props);
    this.state = {
      first_name: localStorage.getItem("first_name") || "",
      last_name: localStorage.getItem("last_name") || "",
      location: localStorage.getItem("location") || "",
    };
  }
  render() {
    // STEP 1: Ask for name
    if (!this.state.first_name || !this.state.last_name) {
      return (
        <PromptForName onCompleted={(first_name, last_name) => {
          localStorage.setItem("first_name", first_name);
          localStorage.setItem("last_name", last_name);
          this.setState({ first_name, last_name });
        }} />
      );
    }
    // STEP 2: Ask for location
    if (!localStorage.getItem("location")) {
      return (
        <PromptForLocation onCompleted={(location) => {
          localStorage.setItem("location", location);
          this.setState({ location });
        }} />
      );
    }
    // set onboardingComplete and refresh page
    localStorage.setItem("onboardingComplete", "true");
    window.location.href = "/";
  }
}

export default Onboarding;