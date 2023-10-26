import Task from "./Task";

export default function TaskList(props) {
   const tasks = props.tareas;
 return(
    <div>
    {tasks.map(task => (
    <Task 
    task={task} 
    onDeleteTask={props.onDeleteTask} 
    />)
    )}
    </div>
 );   
}