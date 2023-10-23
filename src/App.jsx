import "./App.css"
import TaskList from "./components/TaskList";
import Header from "./components/Header";


const TASKS =  [ 
  {
    id: 101,
    name: "Pasear al Perro",
    description:"Tenemos que llevar al perro para que se de una caminada",
    completada: false
  },
  {
    id: 102,
    name: "Sacar la Basura",
    description:"Si se acumula se nos van a formar gusanos",
    completada: true
  },
  {
    id: 103,
    name: "Pintar la Casa",
    description:"Tal vez no sea dentro de poco, pero es algo que tenemos pendiente",
    completada: false
  }
]


export default function App() {
  return(
    <div>
      <Header />
      <h2>LISTA DE TAREAS</h2>
      <p>Es hora de revisar las tareas que tenemos</p>
        <TaskList tareas={ TASKS }/>
    </div>
  )
}
