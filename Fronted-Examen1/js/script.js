const API_URL = "https://examen-01-obc.onrender.com/empleados";

const form = document.getElementById("formEmpleado");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const empleado = {
        nombre: document.getElementById("nombre").value,
        puesto: document.getElementById("puesto").value,
        salario: Number(document.getElementById("salario").value),
        fechaIngreso: document.getElementById("fechaIngreso").value
    };

    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(empleado)
    });

    await respuesta.json();

    alert("Empleado guardado");

    form.reset();

    obtenerEmpleados();
});

async function obtenerEmpleados(){

    const respuesta = await fetch(API_URL);

    const empleados = await respuesta.json();

    const tabla = document.getElementById("tablaEmpleados");

    tabla.innerHTML = "";

    empleados.forEach(emp => {

        tabla.innerHTML += `
        <tr>
        <td>${emp.nombre}</td>
        <td>${emp.puesto}</td>
        <td>${emp.salario}</td>
        <td>${emp.fechaIngreso}</td>
        <td>
        <button onclick="eliminarEmpleado('${emp.id}')">Eliminar</button>
        </td>
        </tr>
        `;
    });

}

async function eliminarEmpleado(id){

    await fetch(API_URL + "/" + id,{
        method:"DELETE"
    });

    obtenerEmpleados();
}

obtenerEmpleados();