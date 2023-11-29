const express = require("express");
const infoRouter = express.Router();
const { MongoClient } = require("mongodb");
const { listTasks }  = require("./dbfun");
const { getClient } = require("./db");

infoRouter
.get("/", async (req,res) => {
  const client = getClient();
    try {
        const db = client.db("listaTareas");
        const collection = db.collection("tareas");
        const tasks = await listTasks(collection); 
        res.json(tasks);
      } catch (error) {
        console.error("Error al obtener la lista de tareas:", error);
        res.status(500).send("Error al obtener las tareas.");
      }
})

.get('/completas',  (req,res) => {
    let tareasCompletas = info.filter((item)=> item.isCompleted === true);
    res.json(tareasCompletas);
})

.get('/incompletas', (req,res) => {
    let tareasIncompletas = info.filter((item)=> item.isCompleted === false);
    res.json(tareasIncompletas);
})


.get('/:id', async (req,res) => {
    const taskId = req.params.taskId;
    try {
      const uri = process.env.MONGO_URI;
      const client = new MongoClient(uri);
  
      await client.connect();
      const db = client.db("listaTareas");
      const collection = db.collection("tareas");
  
      const task = await getTaskById(collection, taskId);
      client.close();
  
      if (task) {
        res.json(task);
      } else {
        res.status(404).send("Tarea no encontrada");
      }
    } catch (error) {
      console.error("Error al obtener la tarea:", error);
      res.status(500).send("Error al obtener la tarea.");
    }
})


.use('/', (req,res,next)=> {
    if (req.method === 'GET') {
    res.send('Metodo valido')
    next()        
    } else {
        return res.status(400).send('La solicitud con esta ruta no es valida')
    }
})

module.exports = infoRouter;