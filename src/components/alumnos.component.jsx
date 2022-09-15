import React from "react";
import { useState } from "react";
import AlumnoListado from "./alumnos.listado.component";

const Alumnos = () => {
  const [nombre, setNombren] = useState("");
  const [nombres, setNombres] = useState([]);
  const handleChange = ({ target }) => {
    setNombren(target.value);
  };
  const guardar = (e) => {
    e.preventDefault();
    try {
      if (nombre == "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El nombre no puede estar en blanco",
          timer: 1500,
        });
        return;
      }
      
      setNombren("");
      nombres.push(nombre);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "se agrego el usuario " + nombre,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "error comunicate con el admin",
          });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-2">
          <div className="col-md-6">
            <h1 className="display-2">Lista de usuarios</h1>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-6">
            <h1 className="text-center mb-5">Registro</h1>
            <form onSubmit={guardar} className="form-group">
              <input
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                value={nombre}
                className="form-control"
              />
              <button className="btn btn-secondary w-100 mt-2" type="submit">
                Guardar
              </button>
            </form>
          </div>
          <div className="col-md-6 text-center">
            <AlumnoListado listaA={nombres}></AlumnoListado>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumnos;
