import { Component } from "react";
import Course from "./Course";
import "./Student.css";

class Student extends Component {
  constructor(props) {
    super(props);

    // STATE → dynamic data
    this.state = {
      name: "Pranathi",
      course: "MERN Stack",
      count: 0
    };
  }

  // EVENT → change course
  changeCourse = () => {
    this.setState({
      course: "React Development"
    });
  };

  // EVENT → counter example
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="student">
        <h2>Student: {this.state.name}</h2>

        {/* Passing state as props */}
        <Course courseName={this.state.course} />

        {/* Event button */}
        <button onClick={this.changeCourse}>
          Change Course
        </button>

        <button onClick={this.increase}>
          Click Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default Student;