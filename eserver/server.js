//======================== LISTA DE TAREAS DE EXPRESS =================================================

// Variables requeridas====================
const express = require("express");
const app = express();
const port = 8000;
const infoRouter = require('./list-view.router')
const editInfoRouter = require('./list-edit.router')
const cors = require('cors');
const env = require("dotenv").config()
const uri = process.env.MONGO_URI;
const { connectToMongoAtlas } = require("./db")

//===============================================
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


// Validacion de las rutas que se mandan
app.use((req, res, next) => {
    const metodosValidos = ['GET', 'POST', 'PUT', 'DELETE'];
    if (metodosValidos.includes(req.method)) {
        next();
    } else {
        res.status(405).send('Método no permitido');
    }
});

//uso de dos routers para poder acceder a distintas listas de tareas
app.use("/tareas", infoRouter);
app.use("/editar", editInfoRouter);



app.get('/', (req,res) => {
    res.json("Bienvenido a tu lista de tareas")
    console.log("Ahora estas en la pagina de inicio de la aplicacion");
})

app.get('/aboutus', (req,res) => {
    res.json("En esta pagina vas a ver la informacion del creador de la pagina")

})


connectToMongoAtlas()


    app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
})
