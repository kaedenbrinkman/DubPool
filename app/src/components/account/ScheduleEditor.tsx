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
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

export default ScheduleEditor;