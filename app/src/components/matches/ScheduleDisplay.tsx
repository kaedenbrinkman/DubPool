import { Component } from "react";

interface ScheduleEditorProps {
  schedule: string[][];
}

interface ScheduleEditorState { }

class ScheduleEditor extends Component<ScheduleEditorProps, ScheduleEditorState> {
  constructor(props: ScheduleEditorProps) {
    super(props);
    this.state = {};
  }
  render() {
    const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return <div style={{ maxWidth: "300px", margin: "auto" }}>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Leave Home</th>
            <th scope="col">Return Home</th>
          </tr>
        </thead>
        <tbody>
          {DAYS_OF_WEEK.map((day, i) => {
            return (<tr key={i}>
              <th scope="row">{day}</th>
              <td>{this.props.schedule[i][0]}</td>
              <td>{this.props.schedule[i][1]}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>;
  }
}

export default ScheduleEditor;