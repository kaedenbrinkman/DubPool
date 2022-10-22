import { Component } from "react";

interface OnboardingProps { }

interface OnboardingState { }

class Onboarding extends Component<OnboardingProps, OnboardingState> {
  constructor(props: OnboardingProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>Onboarding</div>);
  }
}

export default Onboarding;