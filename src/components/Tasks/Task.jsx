import React, { useState } from "react";
import "./Task.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { useTask } from "./useTask";

export default function Task(props) {
  const { updateTask, deleteTask, fetchData } = useTask();
  const [completada, setCompletada] = useState(props.task.completada);

  const handleCompleteTask = async () => {
    try {
      const newCompletada = !completada;
      setCompletada(newCompletada);
      await updateTask(props.task._id, newCompletada);
    } catch (error) {
      console.error('Error al completar la tarea:', error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTask(props.task._id);
      props.onDeleteTask(props.task._id);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <Box
      align="center"
      display="flex"
      alignItems="center"
      justify="space-between"
      p="4"
      width="80vh"
      as="article"
      maxW="sm"
      borderWidth="1px"
      backgroundColor="white"
      my="2"
      rounded="md"
    >
      <Box flex="1">
        <h2>{props.task.nombre}</h2>
      </Box>

      <Box>
        <Button
          className={`button ${completada ? "complete" : "incomplete"}`}
          onClick={handleCompleteTask}
        >
          {completada ? <CheckIcon /> : <CloseIcon />}
        </Button>

        <Button onClick={handleDeleteTask}>
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
}
