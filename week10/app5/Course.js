import React from "react";

class Course extends React.Component {
  render() {
    return (
      <h3>
        Course: {this.props.courseName}
      </h3>
    );
  }
}

export default Course;