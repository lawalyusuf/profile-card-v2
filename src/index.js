import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillSetData = [
  {
    skill: "Javascript",
    level: "Advance",
    color: "yellow",
  },

  {
    skill: "React",
    level: "Intermediate",
    color: "cyan",
  },

  {
    skill: "PHP",
    level: "Advance",
    color: "purple",
  },

  {
    skill: "Laravel",
    level: "Advance",
    color: "red",
  },
  {
    skill: "Codeigniter",
    level: "Advance",
    color: "darkred",
  },
  {
    skill: "Python",
    level: "Intermediate",
    color: "blue",
  },
  {
    skill: "Git/Gitlab",
    level: "Advance",
    color: "lightblue",
  },
  {
    skill: "Docker",
    level: "Advance",
    color: "lightblue",
  },
  {
    skill: "AWS",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "Terraform",
    level: "Intermediate",
    color: "purple",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img classNaame="avatar" src="Yusuf-img-1.jpg" alt="Yusuf-Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Lawal Owolabi Yusuf</h1>
      <article>
        I’m a highly adaptable and self-driven software engineer with a passion
        for technology and people. My expertise spans backend development, cloud
        infrastructure, and frontend integration. I handle the full development
        cycle from local environments to production and am always eager to
        learn, grow, and contribute to building scalable, efficient solutions.
        {/* <a href="https://www.linkedin.com/in/lawal-owolabi-yusuf-04976b143">
          Connect with me on LinkedIn
        </a> */}
      </article>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <h4>Skills</h4>
      <div className="skill-list">
        {skillSetData.map((skill) => (
          <Skills skillSetObject={skill} key={skill.skill} />
        ))}
      </div>
    </div>
  );
}

function Skills({ skillSetObject }) {
  const style = { backgroundColor: skillSetObject.color };
  return (
    <div className="skill" style={style}>
      <span>{skillSetObject.skill}</span>
      <span>
        {skillSetObject.level === "Beginner" && "👶"} 
        {skillSetObject.level === "Intermediate" && "👍"}
        {skillSetObject.level === "Advance" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
