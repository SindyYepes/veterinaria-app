// Cargar citas al iniciar
document.addEventListener("DOMContentLoaded", mostrarCitas);

function agendar() {
  const nombre = document.getElementById("nombre").value;
  const mascota = document.getElementById("mascota").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;

  if (!nombre || !mascota || !servicio || !fecha) {
    alert("Completa todos los campos");
    return;
  }

  const nuevaCita = {
    nombre,
    mascota,
    servicio,
    fecha
  };

  let citas = JSON.parse(localStorage.getItem("citas")) || [];
  citas.push(nuevaCita);
  localStorage.setItem("citas", JSON.stringify(citas));

  limpiarFormulario();
  mostrarCitas();
}

function mostrarCitas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const citas = JSON.parse(localStorage.getItem("citas")) || [];

  citas.forEach((cita, index) => {
    const item = document.createElement("li");
    item.textContent = `${cita.nombre} - ${cita.mascota} - ${cita.servicio} - ${cita.fecha}`;

    lista.appendChild(item);
  });
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("mascota").value = "";
  document.getElementById("servicio").value = "";
  document.getElementById("fecha").value = "";
}