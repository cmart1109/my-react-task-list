const env = require("dotenv").config();
const { getClient } = require("./db");
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;

// =================== CRUD Functions ===========================================================//

async function createTask(nuevaTarea) {
  const client = getClient();
  try {
    const db = client.db("listaTareas");
    const collection = db.collection("tareas");
    await collection.insertOne(nuevaTarea);
  } catch (error) {
    console.log(error);
    throw error;
  } 
}

async function deleteTask(id) {
  const client = getClient();
  try {
    const db = client.db("listaTareas");
    const collection = db.collection("tareas");
    await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.log(error);
  } 
}

async function listTasks() {
  const client = getClient();
  try {
    const db = client.db("listaTareas");
    const collection = db.collection("tareas");
    const tasks = await collection.find({}).toArray();
    return tasks;
  } catch (error) {
    console.error("Error al consultar las tareas:", error);
    throw error;
  }}

  async function updateTask(collection, taskId, completada) {
    const client = getClient();
    try {
      const db = client.db("listaTareas");
      const result = await collection.updateOne(
        { _id: new ObjectId(taskId) },
        { $set: { completada } }
      );
  
      if (result && result.modifiedCount > 0) {
        const updatedTask = await collection.findOne({ _id: new ObjectId(taskId) });
        return updatedTask;
      } else {
        console.log("No se encontró la tarea para actualizar o no se modificó ningún documento");
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
  

async function getTask(collection, taskId) {
  try {
    const task = await collection.findOne({ _id: new ObjectId(taskId) });
    return task;
  } catch (error) {
    console.error(`Error al obtener la tarea con ID ${taskId}:`, error);
    throw error;
  }
}

// =============================================================================================//
//  =============================================================================================//

module.exports = { createTask, deleteTask, listTasks, updateTask, getTask };
