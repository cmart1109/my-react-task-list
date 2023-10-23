import "./Task.css"
export default function Task(props) {


    return (
      <div className="tasks">
        <h2>{props.task.name}</h2>
        <p>{props.task.description}</p>
        <p>Completada: {props.task.completada ? "Si" : "No"}</p>
      </div>
    );
  }