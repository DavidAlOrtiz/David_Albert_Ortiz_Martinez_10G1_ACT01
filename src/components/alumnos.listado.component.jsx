import React from "react";

const AlumnoListado = ({ listaA }) => {
  return (
    <>
      <h1 className="mb-5" >Usuarios</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        {listaA.map((nombre, index) => (
          <>
            <tbody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{nombre}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </>
  );
};

export default AlumnoListado;
