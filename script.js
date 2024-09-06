document.addEventListener('DOMContentLoaded', function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project';
                projectElement.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Erreur:', error));
});
