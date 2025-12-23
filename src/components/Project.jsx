import "../styles/project.css";

function Project() {
  const projects = [ // Changed from 'project' to 'projects' to match the .map()
    {
      title: "Student Attendance Management System",
      link: "https://github.com/kuraderegmailcom/student-attendance-managment-system"
    },
    {
      title: "Task Manager",
      link: "https://github.com/kuraderegmailcom/task-manager"
    },
    {
      title: "Calculator",
      link: "https://github.com/kuraderegmailcom/Calculator"
    },
    {
      title: "Login Form",
      link: "https://github.com/kuraderegmailcom/LOGIN-FORM"
    }
  ];

  return (
    <section id="project" className="project">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((item, index) => (
          <div key={index} className="project-card">
            <h3>{item.title}</h3>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;