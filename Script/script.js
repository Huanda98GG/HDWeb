const projects = [
    {
      title: "Project One",
      description: "A brief description of the project.",
      technologies: "React, Node.js, MongoDB",
      role: "Frontend Developer",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project Two",
      description: "Another cool project.",
      technologies: "Vue, Firebase",
      role: "Fullstack Developer",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project Three",
      description: "A unique project idea.",
      technologies: "Angular, Express, PostgreSQL",
      role: "Backend Developer",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("projects-container");
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.className = "col-md-4";
      projectCard.innerHTML = `
        <div class="card">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <p class="text-muted">Technologies: ${project.technologies}</p>
            <a href="${project.link}" target="_blank" class="btn btn-outline-primary">View Project</a>
          </div>
        </div>
      `;
      projectContainer.appendChild(projectCard);
    });
  });
  function enviar() {
    let nombre = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("message").value.trim();
    let mensajeAlerta = document.getElementById("formMessage");

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeAlerta.textContent = "⚠️ Por favor, completa todos los campos.";
        mensajeAlerta.style.color = "red";
        return;
    }

    alert("Se ha enviado el correo correctamente.");
    document.getElementById("contactForm").reset();
    mensajeAlerta.textContent = "";
}
  