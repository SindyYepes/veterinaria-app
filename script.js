document.addEventListener("DOMContentLoaded", mostrarCitas);

function agendar() {
  const nombre = document.getElementById("nombre").value;
  const mascota = document.getElementById("mascota").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;

  if (!nombre || !mascota || !servicio || !fecha) {
    alert("⚠️ Completa todos los campos");
    return;
  }

  const nuevaCita = { nombre, mascota, servicio, fecha };

  let citas = JSON.parse(localStorage.getItem("citas")) || [];
  citas.push(nuevaCita);

  localStorage.setItem("citas", JSON.stringify(citas));

  limpiarFormulario();
  mostrarCitas();

  alert("✅ Cita registrada con éxito");
}

function mostrarCitas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  let citas = JSON.parse(localStorage.getItem("citas")) || [];

  citas.forEach((cita, index) => {
    const item = document.createElement("li");

    item.innerHTML = `
      ${cita.nombre} - ${cita.mascota} - ${cita.servicio} - ${cita.fecha}
      <button class="delete-btn" onclick="eliminarCita(${index})">✖</button>
    `;

    lista.appendChild(item);
  });
}

function eliminarCita(index) {
  let citas = JSON.parse(localStorage.getItem("citas")) || [];

  citas.splice(index, 1);
  localStorage.setItem("citas", JSON.stringify(citas));

  mostrarCitas();
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("mascota").value = "";
  document.getElementById("servicio").value = "";
  document.getElementById("fecha").value = "";
}