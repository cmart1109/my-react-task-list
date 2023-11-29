import { useState, useEffect } from "react"

export function useTask() {
    const [tasks, setTasks] = useState([]);
    const [completada, setCompletada] = useState(false);


    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/tareas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
  
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const addTask = async (newTask) => {
      try {
        const response = await fetch("http://localhost:8000/editar/agregar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        });
  
        if (!response.ok) {
          throw new Error("Error al agregar la tarea");
        }
  
        await fetchData();
      } catch (error) {
        console.error(error);
      }
    };
  
    const deleteTask = async (taskId) => {
      try {
        const response = await fetch(`http://localhost:8000/editar/eliminar/${taskId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          await fetchData();
        } else {
          throw new Error('Error al eliminar la tarea');
        }
      } catch (error) {
        console.error('Error al eliminar la tarea:', error);
      }
    };

      //===========================
      const updateTask = async (taskId, completada) => {
        try {
          console.log(`Comenzando actualización de tarea con ID ${taskId}`);
          const response = await fetch(`http://localhost:8000/editar/completar/${taskId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completada }), 
          });
      
          if (response.ok) {
            console.log('Tarea actualizada con éxito');
            await fetchData(); 
          } else {
            console.error('Error al completar la tarea. Estado de la respuesta:', response.status, response.statusText);
            throw new Error('Error al Completar la tarea');
          }
        } catch (error) {
          console.error('Error al completar la tarea:', error);
        }
      };
      
      


      return { tasks, addTask, deleteTask, updateTask, fetchData }
    }
