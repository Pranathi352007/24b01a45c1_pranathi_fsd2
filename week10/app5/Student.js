import React, { Component } from "react";
import Course from "./Course";
import "./Student.css";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pradeep",
      course: "MERN Stack",
      count: 0,
      isLoggedIn: false,

      courses: ["React", "Node", "MongoDB"],

      form: {
        name: "",
        gender: "",
        subscribe: false
      }
    };
  }

  // Change Course
  changeCourse = () => {
    this.setState({
      course: "React Development"
    });
  };

  // Counter
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // Toggle login
  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  // Form change
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: type === "checkbox" ? checked : value
      }
    });
  };

  // Form submit
  handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(this.state.form, null, 2));
  };

  render() {
    return (
      <div className="student">

        <h2>Student: {this.state.name}</h2>

        {/* PROPS */}
        <Course courseName={this.state.course} />

        <button onClick={this.changeCourse}>
          Change Course
        </button>

        <button onClick={this.increase}>
          Click Count: {this.state.count}
        </button>

        {/* CONDITIONAL RENDERING */}
        <h3>Conditional Rendering</h3>

        {this.state.isLoggedIn ? (
          <p>Welcome Student</p>
        ) : (
          <p>Please Login</p>
        )}

        <button onClick={this.toggleLogin}>
          Toggle Login
        </button>

        {/* LIST RENDERING */}
        <h3>Course List</h3>

        <ul>
          {this.state.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        {/* REACT FORMS */}
        <h3>Student Form</h3>

        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.form.name}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.form.gender === "Male"}
              onChange={this.handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.form.gender === "Female"}
              onChange={this.handleChange}
            />
            Female
          </label>

          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={this.state.form.subscribe}
              onChange={this.handleChange}
            />
            Subscribe
          </label>

          <br />
          <br />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>
    );
  }
}

export default Student;