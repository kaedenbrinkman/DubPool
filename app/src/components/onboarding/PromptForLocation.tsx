import { Component } from "react";

interface PromptForLocationProps {
  onCompleted: (first_name: string, last_name: string) => void;
}

interface PromptForLocationState {
  first_name: string;
  last_name: string;
}

class PromptForLocation extends Component<PromptForLocationProps, PromptForLocationState> {
  constructor(props: PromptForLocationProps) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
    };
  }
  render() {
    return (<div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Welcome</h1>
          <p className="lead fw-normal">You're on your way to discovering other commuters near you. Just let us know some details to get started.</p>
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" className="form-control" id="first_name" placeholder="First Name" value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" className="form-control" id="last_name" placeholder="Last Name" value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })} />
        </div>
        <button className="btn btn-primary" onClick={() => this.props.onCompleted(this.state.first_name, this.state.last_name)}>Next</button>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>);
  }
}

export default PromptForLocation;