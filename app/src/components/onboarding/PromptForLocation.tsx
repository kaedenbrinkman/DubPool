import { Component } from "react";

interface PromptForLocationProps {
  onCompleted: (address: string) => void;
}

interface PromptForLocationState {
  address: string;
}

class PromptForLocation extends Component<PromptForLocationProps, PromptForLocationState> {
  constructor(props: PromptForLocationProps) {
    super(props);
    this.state = {
      address: "",
    };
  }
  render() {
    return (<div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Hi, {localStorage.getItem("first_name")}</h1>
          <p className="lead fw-normal">Let us know where you'll be commuting from. This address won't be visible to others.</p>
          <p>If you choose to host your car, your general location will be visible to other students with a 0.5 mi radius.</p>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Address" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
        </div>
        <button className="btn btn-primary" onClick={() => this.props.onCompleted(this.state.address)}>Next</button>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>);
  }
}

export default PromptForLocation;