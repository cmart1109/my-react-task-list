const express = require("express");
const app = express
const editInfoRouter = express.Router();
const { createTask, deleteTask, listTasks, updateTask, getTask }  = require("./dbfun")
const { MongoClient } = require("mongodb");
const cors = require("cors");
const { getClient } = require("./db");

editInfoRouter

.get("/",(req,res)=> {
    res.json(info)
})

// Middleware para verificar que las solicitudes no esten vacias
.use('/agregar',  (req, res, next) => {
    if (req.method === 'POST') {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send('El cuerpo de la solicitud esta vacio.');
        }
    }
    next();
})



// Middleware para verificar JSON validos
.use('/agregar', (req, res, next) => {
    if (req.method === 'POST') {
        if (typeof req.body === 'object' && req.body !== null) {
            next(); 
        } else {
            return res.status(400).send('El body de la solicitud no es válido.');
        }
    } else {
        next();
    }
})

.post('/agregar', (req,res) => {
    const nuevaTarea = req.body;
    if (!nuevaTarea) {
        res.send({message:"El cuerpo de la solicitud no es valido"})
     }  else {
        createTask(nuevaTarea);
        console.log(nuevaTarea);
        res.json({
            status: 200,
            data: nuevaTarea,
            message: "tarea agregada con exito",

        })
    }
})

.delete('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    deleteTask(id);
    res.json("La tarea fue eliminada con exito")
})


// Middleware para verificar JSON validos
.use('/completar/:id', (req, res, next) => {
    if (req.method === 'PUT') {
        if (typeof req.body === 'object' && req.body !== null) {
            next(); 
        } else {
            return res.status(400).send('El body de la solicitud no es válido.');
        }
    } else {
        next();
    }
})

.put('/completar/:id', async (req, res) => {
    const taskId = req.params.id;
    const { completada } = req.body;
    const client = getClient();
    try {
      const db = client.db("listaTareas");
      const collection = db.collection("tareas");
      console.log("ID de tarea a actualizar:", taskId);
      const result = await updateTask(collection, taskId, completada);
  
      if (result && result.modifiedCount > 0) {
        res.json({ message: "Tarea actualizada con éxito" });
      } else {
        res.status(404).send("Tarea no encontrada");
        console.log("Resultado de la actualización:", result);
      }
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      res.status(500).send("Error al actualizar la tarea.");
    }
  })

module.exports = editInfoRouter;