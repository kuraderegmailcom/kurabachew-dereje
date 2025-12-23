import "../styles/skills.css";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import mongoIcon from "../assets/mongodb.png";

function Skills() {
  const skills = [
    { name: "HTML", icon: htmlIcon, },
    { name: "CSS", icon: cssIcon,  },
    { name: "JavaScript", icon: jsIcon, },
    { name: "React", icon: reactIcon,  },
    { name: "Node.js", icon: nodeIcon,  },
    { name: "MongoDB", icon: mongoIcon, }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p>Click a skill to view my verified certificate</p>
      </div>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />
            <span className="view-cert">{skill.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Skills;
