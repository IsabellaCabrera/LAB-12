const agregarPersonaje = (nombre, imagen) => {
    const contenedor = document.getElementById("personajes");
  
    const personaje = document.createElement("div");
    personaje.innerHTML = `
    <div class="personaje">
      <h5 class="personaje__nombre">${nombre}</h5>
      <img class="personaje__imagen" src="${imagen}" />
    </div>`;
  
    contenedor.appendChild(personaje);
  };
  
  const render = async () => {
    const response = await fetch('personajes.json');
      const { personajes } = await response.json();
      for (const { name, image } of personajes) {
        agregarPersonaje(name, image);
    }
  };
  
  document.addEventListener("DOMContentLoaded", render);