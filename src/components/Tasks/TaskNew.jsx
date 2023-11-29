import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";
import "./TaskNew.css";

export default function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState({
    nombre: "",
    completada: false,
  });


  

  const [error, setError] = useState({ name: "" });
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const nameValue = event.target.value;

    if (!nameValue) {
      setError({ nombre: "El nombre de la tarea no puede estar vacío" });
      setButtonDisabled(true);
    } else if (nameValue.length < 3) {
      setError({
        nombre: "El nombre de la tarea debe tener al menos 3 caracteres",
      });
      setButtonDisabled(true);
    } else {
      setError({ nombre: "" });
      setButtonDisabled(false);
    }

    setNewTask({
      ...newTask,
      nombre: nameValue,
    });
  };

  const handleAddTask = () => {
    if (!isButtonDisabled) {
      onAddTask(newTask);
      setNewTask({
        nombre: "",
        completada: false,
      });
      setButtonDisabled(true);
      // window.location.reload();
    }
  };

  return (
    <Box spacing={4} justifyContent="center" textAlign="center">
      <h2 mb={4}>Añadir Nueva Tarea</h2>
      <Input
        bg="white"
        placeholder="Ir de Compras"
        size="sm"
        width="50vh"
        type="text"
        name="name"
        value={newTask.name}
        onChange={handleInputChange}
        isInvalid={!!error.name}
      />
      <Box color="red.500" fontSize="sm" mt={1}>
        {error.name}
      </Box>
      <Button
        className="button"
        onClick={handleAddTask}
        disabled={isButtonDisabled}
        mt={4}
      >
        Agregar
      </Button>
    </Box>
  );
}
