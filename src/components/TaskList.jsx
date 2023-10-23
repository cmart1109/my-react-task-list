import Task from "./Task";

export default function TaskList(props) {
   const tasks = props.tareas;
 return(
    <div>
    {tasks.map(task => (
    <Task key={task.id} task={task}/>)
    )}
    </div>
 );   
}