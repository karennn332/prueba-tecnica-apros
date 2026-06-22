import { useState } from "react";
import "./App.css";

const tareasIniciales = [
  { id: 1, texto: "Revisar diseño responsive", completada: false },
  { id: 2, texto: "Validar formulario de contacto", completada: false },
  { id: 3, texto: "Actualizar contenido del sitio web", completada: true }
];

export default function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [input, setInput] = useState("");

  const agregarTarea = () => {
    if (input.trim() === "") return;

    const nueva = {
      id: Date.now(),
      texto: input,
      completada: false
    };

    setTareas([...tareas, nueva]);
    setInput("");
  };

  const toggleTarea = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(actualizadas);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;

  return (
    <div className="container">

      <h1>To Do List</h1>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <div className="stats">
        <p>Total: {total}</p>
        <p>Completadas: {completadas}</p>
      </div>

      <ul className="list">
        {tareas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? "done" : ""}>

            <span onClick={() => toggleTarea(tarea.id)}>
              {tarea.texto}
            </span>

            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}