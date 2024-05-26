import React from "react";
import { FaGithub } from "react-icons/fa";
import { ReactTerminal } from "react-terminal";

const Terminal = ({ handleSkills, handleContacts }) => {
  const commands = {
    help: () => (
      <span className="text-base fira">
        Available commands:
        <br />- <b>skills</b>: See a list of my technical skills and expertise.
        <br />- <b>projects</b>: Get an overview of some of my key projects.
        <br />- <b>contact</b>: Find out how to get in touch with me.
        <br />- <b>education</b>: View my educational background.
        {/* <br />- <b>experience</b>: Learn about my professional experience. */}
        <br />- <b>interests</b>: Discover my interests and hobbies outside of
        work.
        <br />
      </span>
    ),
    skills: () => (
      handleSkills(true),
      setTimeout(() => {
        handleSkills(false);
      }, 15000),
      (
        <span className="text-base fira">
          My technical skills include:
          <br />
          - Programming Languages: JavaScript, C++, C, Java, Python
          <br />
          - Frameworks | linrary's: React, Node.js, Express, TensorFlow, Redux
          <br />
          - Tools: Git, AWS - [RDS,S3,EC2,Lambda,IAM]
          <br />
          - Databases: MongoDB, MySQL
          <br />
          - Others: Agile methodologies, Test-driven development
          <br />
        </span>
      )
    ),
    projects: () => (
      <span className="text-base fira">
        Here are some of my key projects:
        <br />
        1. <b>BazzarBee-[E-commerce platform]</b>
        <br />
        2. <b>RNSIT DOCS</b>
        <br />
        3. <b>Chronicle-[Blog-website]</b>
        <br />
        For more details,
        <br /> Explore side bar or visit my{" "}
        <a href="https://github.com/Priyanshu885588" target="_blank">
          GitHub
        </a>
        .<br />
      </span>
    ),
    contact: () => (
      handleContacts(),
      (
        <span className="text-base fira">
          You can reach me at:
          <a href="mailto:priyanshumandani978@gmail.com"> gmail</a>
          <br />- LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/priyanshu-mandani-835553309/"
            target="_blank"
          >
            click here
          </a>
          <br />- GitHub:{" "}
          <a href="https://github.com/Priyanshu885588" target="_blank">
            click here
          </a>
          <br />- Instagram:{" "}
          <a href="https://www.instagram.com/priyanshu__11/" target="_blank">
            click here
          </a>
          <br />
          inte{" "}
        </span>
      )
    ),
    education: () => (
      <span className="text-base fira">
        My educational background:
        <br />
        - B.E in Computer Science & Engineering, RNSIT
        <br />
        - Relevant coursework: Data Structures, Algorithms, Software
        Engineering, Machine Learning
        <br />
      </span>
    ),
    experience: () => (
      <span className="text-base fira">
        My professional experience includes:
        <br />
        - Software Engineer at Company A (Year - Year): Brief description of
        role and achievements.
        <br />
        - Intern at Company B (Year - Year): Brief description of role and
        achievements.
        <br />
      </span>
    ),
    interests: () => (
      <span className="text-base fira">
        Outside of work, I enjoy:
        <br />
        - Traveling and exploring new cultures
        <br />
        - Volunteering for tech education initiatives
        <br />
        - Reading books on technology and innovation
        <br />
        - Participating in contests and hackathons
        <br />
      </span>
    ),
  };

  const welcomeMessage = (
    <span className="fira">
      Priyanshu here, driven by a passion for developing innovative solutions
      that create a meaningful and positive impact.
      <br />
      Let's discuss your unique ideas! <br />
      Type "help" for all available commands. <br />
      <br />
    </span>
  );

  const prompt = (
    <span className="fira text-yellow-700">Priyanshu's portfolio@</span>
  );
  return (
    <ReactTerminal
      className="my-terminal font-mono" // Add custom CSS class for styling
      prompt={prompt}
      rows={10} // Adjust the number of visible rows
      commands={commands}
      themes={{
        "my-custom-theme": {
          themeBGColor: "#ffffff00",
          themeToolbarColor: "#ffffff00",
          themeColor: "#c1c1c1e1",
          themePromptColor: "#c1c1c1e1",
        },
      }}
      theme={"my-custom-theme"}
      welcomeMessage={welcomeMessage}
      showControlButtons={false}
      showControlBar={false}
      style={{ whiteSpace: "pre-wrap" }}
    />
  );
};

export default Terminal;
