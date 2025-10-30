import Sports from "./Sports.jsx";

function Student(props) {
  return (
    <div>
      <h2>Student Profile</h2>
      <h2>Student Name:{props.name}</h2>
      <h2>age :{props.age}</h2>
      <Sports player={props.name} age={props.age} />
    </div>
  );
}
export default Student;