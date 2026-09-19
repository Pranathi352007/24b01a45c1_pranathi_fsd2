import "./Course.css";

function Course(props) {
  return (
    <div className="course">
      <h3>Course: {props.courseName}</h3>
    </div>
  );
}

export default Course;