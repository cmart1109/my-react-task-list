import React from "react";
import TaskList from "../Tasks/TaskList";
import TaskNew from "../Tasks/TaskNew";
import { useTask } from "../Tasks/useTask"

export function List () {
    const {tasks, addTask, deleteTask} = useTask();
    console.log(tasks);

    return (
    <div>
        <p>Es hora de revisar las tareas que tenemos</p>
        <TaskList tareas={tasks} onDeleteTask={deleteTask}/>
        <TaskNew onAddTask={addTask} />
    </div>
    )
      }
      
      
      