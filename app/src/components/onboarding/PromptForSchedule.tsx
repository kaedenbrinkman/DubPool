import { Component } from "react";

interface PromptForScheduleProps {
  onCompleted: (schedule: string[][]) => void;
}

interface PromptForScheduleState {
  schedule: string[][];
}

class PromptForSchedule extends Component<PromptForScheduleProps, PromptForScheduleState> {
  constructor(props: PromptForScheduleProps) {
    super(props);
    this.state = {
      schedule: [
        [],
        [],
        [],
        [],
        [],
      ]
    };
  }
  render() {
    return (<div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">What's your schedule?</h1>
          <p className="lead fw-normal">Enter your commuting schedule for the week so we can match you with students with similar schedules.</p>
        </div>
        <button className="btn btn-primary" onClick={() => this.props.onCompleted(this.state.schedule)}>Next</button>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>);
  }
}

export default PromptForSchedule;