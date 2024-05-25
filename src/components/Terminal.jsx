import React from "react";
import { ReactTerminal } from "react-terminal";

const Terminal = () => {
  const commands = {
    help: () => (
      <span className="text-base fira">
        Available commands:
        <br />- <b>skills</b>: See a list of my technical skills and expertise.
        <br />- <b>projects</b>: Get an overview of some of my key projects.
        <br />- <b>contact</b>: Find out how to get in touch with me.
        <br />- <b>education</b>: View my educational background.
        <br />- <b>experience</b>: Learn about my professional experience.
        <br />- <b>interests</b>: Discover my interests and hobbies outside of
        work.
        <br />
      </span>
    ),
    skills: () => (
      <span className="text-base fira">
        My technical skills include:
        <br />
        - Programming Languages: JavaScript, Python, Java, C++
        <br />
        - Frameworks: React, Node.js, Express, Django
        <br />
        - Tools: Git, Docker, Jenkins, AWS
        <br />
        - Databases: MongoDB, MySQL, PostgreSQL
        <br />
        - Others: Agile methodologies, Test-driven development
        <br />
      </span>
    ),
    projects: () => (
      <span className="text-base fira">
        Here are some of my key projects:
        <br />
        1. <b>Project A</b>: Description of Project A with key technologies
        used.
        <br />
        2. <b>Project B</b>: Description of Project B with key technologies
        used.
        <br />
        3. <b>Project C</b>: Description of Project C with key technologies
        used.
        <br />
        For more details, visit my{" "}
        <a href="https://github.com/yourusername">GitHub</a>.<br />
      </span>
    ),
    contact: () => (
      <span className="text-base fira">
        You can reach me at:
        <br />
        - Email: your.email@example.com
        <br />- LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/yourprofile">
          Your LinkedIn Profile
        </a>
        <br />- GitHub:{" "}
        <a href="https://github.com/yourusername">Your GitHub Profile</a>
        <br />
      </span>
    ),
    education: () => (
      <span className="text-base fira">
        My educational background:
        <br />
        - B.Sc. in Computer Science, University Name
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
        - Playing chess and other strategic games
        <br />
        - Volunteering for tech education initiatives
        <br />
        - Reading books on technology and innovation
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
