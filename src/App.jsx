import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Creamos 2 estados
  // Uno para el input [age]
  // Otro para el error [error]
  const [age, setAge] = useState("");
  const [error, setError] = useState("")

  // Creamos una función
  // que setea y valida ambos estados
  const handleChange = (e) => {
    setAge(e.target.value);
    if (age < 18) setError("Debes ser mayor de 18");
    else if (age >= 18) setError(null);
  };

  // Creamos un formulario con el input
  return (
    <div>
      <div className="cont">
        <form>
          <div>
            <div className="error__cont">
              <label>Edad: </label>
              {/* Si hay un error, lo mostramos */}
              <p> {error} </p>
            </div>
            <input
              type="text"
              // Le pasamos la función que creamos antes
              // en 3 distintos eventos
              // onChange - onKeyUp - onBlur
              onChange={(e) => handleChange(e)}
              onKeyUp={(e) => handleChange(e)}
              onBlur={(e) => handleChange(e)}
              autoComplete="off"
            />
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default App;
