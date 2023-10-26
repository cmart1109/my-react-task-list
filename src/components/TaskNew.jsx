import React, { useState } from "react";
import "./TaskNew.css"

export default function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    completada: false,
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleAddTask = () => {
    if (newTask.name.trim() !== "") {
      onAddTask(newTask); 
      setNewTask({
        name: "",
        description: "",
        completada: false,
      });
    }
  };

  return (
    <div className="add">
      <h3>Añadir Nueva Tarea</h3>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddTask}>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}