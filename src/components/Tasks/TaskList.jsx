import Task from "./Task";
import "./TaskList.css"

export default function TaskList(props) {
   const tasks = Array.isArray(props.tareas) ? props.tareas : [];


 return(
    <div className="task"> 
    {tasks?.map((task, index) => (
    <Task 
    key={index}
    task={task} 
    onDeleteTask={props.onDeleteTask} 
    />)
    )}
    </div>
 );   
}