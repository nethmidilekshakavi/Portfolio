// Function to load the project content based on the clicked item
function loadProject(project) {
    const projectContainer = document.getElementById("project-container");

    switch (project) {
        case 'all':
            projectContainer.innerHTML = `
     
            <h3>All Projects</h3>
            <p>Here are all the projects I have worked on including web design, standalone applications, and AI games.</p>
          
            <h4 class="project-link">
                <a href="https://github.com/nethmidilekshakavi/connect-four-game-assignment.git" target="_blank">
                    https://github.com/nethmidilekshakavi/connect-four-game-assignment.git [AI GAME]
                </a>
                <br> <br>
                 <a href="https://github.com/nethmidilekshakavi/Final-Project-Layerd.git" target="_blank">
                    https://github.com/nethmidilekshakavi/Final-Project-Layerd.git [Layered Final Project]
                </a>
                <br><br>
                 <a href="https://github.com/nethmidilekshakavi/Hibernate.git" target="_blank">
                    https://github.com/nethmidilekshakavi/Hibernate.git [Hibernate]
                </a>
               
                
            </h4>          
        `;
            break;

case 'standalone':
            projectContainer.innerHTML = `
                <h3>Stand Alone Projects</h3>
                <p>This section contains my stand-alone applications including tools and utilities I have built.</p>
                
                <h4 class="project-link">
                  <a href="https://github.com/nethmidilekshakavi/Final-Project-Layerd.git" target="_blank">
                    https://github.com/nethmidilekshakavi/Final-Project-Layerd.git [Layered Final Project]
                </a>
                <br><br>
                
                  <a href="https://github.com/nethmidilekshakavi/Hibernate.git" target="_blank">
                    https://github.com/nethmidilekshakavi/Hibernate.git [Hibernate]
                </a>
                
                </h4>
            `;
            break;
        case 'webdesign':
            projectContainer.innerHTML = `
                <h3>Web Design Projects</h3>
                <p>Explore my web design projects where I focus on creating engaging and responsive websites.</p>
            `;
            break;
        case 'aigames':
            projectContainer.innerHTML = `
                <h3>AI Games Projects</h3>
                <p>AI-based games I have developed to demonstrate my skills in artificial intelligence and game development.</p>
               
                <h4 class="project-link">
                  <a href="https://github.com/nethmidilekshakavi/connect-four-game-assignment.git" target="_blank">
                    https://github.com/nethmidilekshakavi/connect-four-game-assignment.git [AI GAME]
                </a>
                </h4>
            `;
            break;
        default:
            projectContainer.innerHTML = "<p>Select a project from the menu to view details.</p>";
    }
}
