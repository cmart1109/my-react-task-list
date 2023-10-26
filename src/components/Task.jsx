  import { useEffect, useState } from "react";
  import "./Task.css"
  export default function Task(props) {

  const [complete, setComplete] = useState(false);

  const changeTask = () => {
    setComplete(!complete)
  }

  useEffect(() => {
    console.log("cambio en la asignación de la tarea");
  }, [complete]);


      return (
        <div className="tasks">
          <h2>{props.task.name}</h2>
          <p>{props.task.description}</p>
          <p>Completada: {complete ? "Si" : "No"}</p>
          <button onClick={changeTask}>Completar</button>
          <button onClick={() => props.onDeleteTask(props.task.name)}>Eliminar</button>
        </div>
      );
    }