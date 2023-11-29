const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
let client

async function connectToMongoAtlas() {
  try {
    client = new MongoClient(uri);
    await client.connect({ connectTimeoutMS: 5000 });
    console.log("Conexión exitosa a MongoDB Atlas");
    
  } catch (error) {
    console.log("Error al conectar a MongoDB Atlas:", error);
    throw error
  }
}

function getClient() {
  return client;
}

module.exports = {
  connectToMongoAtlas,
  getClient: () => client,
};
