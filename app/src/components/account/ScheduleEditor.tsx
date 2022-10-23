import { Component } from "react";

interface ScheduleEditorProps { }

interface ScheduleEditorState {
  schedule: string[][];
}

class ScheduleEditor extends Component<ScheduleEditorProps, ScheduleEditorState> {
  constructor(props: ScheduleEditorProps) {
    super(props);
    this.state = {
      schedule: localStorage.getItem("schedule") ? JSON.parse(localStorage.getItem("schedule")!) : [
        ["07:00", "17:00"],
        ["07:00", "17:00"],
        ["07:00", "17:00"],
        ["07:00", "17:00"],
        ["07:00", "17:00"],
      ]
    };
  }
  render() {
    return <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Leave Home</th>
            <th scope="col">Return Home</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Monday</th>
            <td><input type="time" className="form-control" value={this.state.schedule[0][0]} onChange={e => {
              this.setState({
                schedule: [
                  [e.target.value, this.state.schedule[0][1]],
                  this.state.schedule[1],
                  this.state.schedule[2],
                  this.state.schedule[3],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td><input type="time" className="form-control" value={this.state.schedule[0][1]} onChange={e => {
              this.setState({
                schedule: [
                  [this.state.schedule[0][0], e.target.value],
                  this.state.schedule[1],
                  this.state.schedule[2],
                  this.state.schedule[3],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="hasClassMonday" checked={!!this.state.schedule[0][0]} onChange={(e) => {
                  this.setState({
                    schedule: [
                      [e.target.checked ? "07:00" : "", e.target.checked ? "17:00" : ""],
                      this.state.schedule[1],
                      this.state.schedule[2],
                      this.state.schedule[3],
                      this.state.schedule[4],
                    ]
                  }, () => {
                    localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
                  });
                }} />
                <label className="form-check-label" htmlFor="hasClassMonday">I have class</label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Tuesday</th>
            <td><input type="time" className="form-control" value={this.state.schedule[1][0]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  [e.target.value, this.state.schedule[1][1]],
                  this.state.schedule[2],
                  this.state.schedule[3],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td><input type="time" className="form-control" value={this.state.schedule[1][1]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  [this.state.schedule[1][0], e.target.value],
                  this.state.schedule[2],
                  this.state.schedule[3],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="hasClassTuesday" checked={!!this.state.schedule[1][0]} onChange={(e) => {
                  this.setState({
                    schedule: [
                      this.state.schedule[0],
                      [e.target.checked ? "07:00" : "", e.target.checked ? "17:00" : ""],
                      this.state.schedule[2],
                      this.state.schedule[3],
                      this.state.schedule[4],
                    ]
                  }, () => {
                    localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
                  });
                }} />
                <label className="form-check-label" htmlFor="hasClassTuesday">I have class</label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Wednesday</th>

            <td><input type="time" className="form-control" value={this.state.schedule[2][0]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  this.state.schedule[1],
                  [e.target.value, this.state.schedule[2][1]],
                  this.state.schedule[3],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td><input type="time" className="form-control" value={this.state.schedule[2][1]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  this.state.schedule[1],
                  [this.state.schedule[2][0], e.target.value],
                  this.state.schedule[3],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="hasClassWednesday" checked={!!this.state.schedule[2][0]} onChange={(e) => {
                  this.setState({
                    schedule: [
                      this.state.schedule[0],
                      this.state.schedule[1],
                      [e.target.checked ? "07:00" : "", e.target.checked ? "17:00" : ""],
                      this.state.schedule[3],
                      this.state.schedule[4],
                    ]
                  }, () => {
                    localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
                  });
                }} />
                <label className="form-check-label" htmlFor="hasClassWednesday">I have class</label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Thursday</th>
            <td><input type="time" className="form-control" value={this.state.schedule[3][0]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  this.state.schedule[1],
                  this.state.schedule[2],
                  [e.target.value, this.state.schedule[3][1]],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td><input type="time" className="form-control" value={this.state.schedule[3][1]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  this.state.schedule[1],
                  this.state.schedule[2],
                  [this.state.schedule[3][0], e.target.value],
                  this.state.schedule[4],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="hasClassThursday" checked={!!this.state.schedule[3][0]} onChange={(e) => {
                  this.setState({
                    schedule: [
                      this.state.schedule[0],
                      this.state.schedule[1],
                      this.state.schedule[2],
                      [e.target.checked ? "07:00" : "", e.target.checked ? "17:00" : ""],
                      this.state.schedule[4],
                    ]
                  }, () => {
                    localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
                  });
                }} />
                <label className="form-check-label" htmlFor="hasClassThursday">I have class</label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Friday</th>
            <td><input type="time" className="form-control" value={this.state.schedule[4][0]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  this.state.schedule[1],
                  this.state.schedule[2],
                  this.state.schedule[3],
                  [e.target.value, this.state.schedule[4][1]],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td><input type="time" className="form-control" value={this.state.schedule[4][1]} onChange={e => {
              this.setState({
                schedule: [
                  this.state.schedule[0],
                  this.state.schedule[1],
                  this.state.schedule[2],
                  this.state.schedule[3],
                  [this.state.schedule[4][0], e.target.value],
                ]
              }, () => {
                localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
              });
            }} /></td>
            <td>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="hasClassFriday" checked={!!this.state.schedule[4][0]} onChange={(e) => {
                  this.setState({
                    schedule: [
                      this.state.schedule[0],
                      this.state.schedule[1],
                      this.state.schedule[2],
                      this.state.schedule[3],
                      [e.target.checked ? "07:00" : "", e.target.checked ? "17:00" : ""],
                    ]
                  }, () => {
                    localStorage.setItem("schedule", JSON.stringify(this.state.schedule));
                  });
                }} />
                <label className="form-check-label" htmlFor="hasClassFriday">I have class</label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

export default ScheduleEditor;