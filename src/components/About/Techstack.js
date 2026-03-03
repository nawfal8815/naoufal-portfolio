import React from "react";
import { Col, Row } from "react-bootstrap";

// Your provided icon imports
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import CSharp from "../../Assets/TechIcons/c-sharp.png";
import C from "../../Assets/TechIcons/c.svg";
import Express from "../../Assets/TechIcons/Express-js.png";
import MySQL from "../../Assets/TechIcons/mysql.svg";
import SQLServer from "../../Assets/TechIcons/icons8-sql-server.svg";
import SQLite from "../../Assets/TechIcons/icons8-sqlite-50.png";
import Bash from "../../Assets/TechIcons/icons8-bash.svg";
import JavaFX from "../../Assets/TechIcons/JavaFX.png";
import Agile from "../../Assets/TechIcons/icons8-agile-32.png";
import ElectronJS from "../../Assets/TechIcons/electronjs.svg";
import Puppet from "../../Assets/TechIcons/puppeteer.png";
import Blender from "../../Assets/TechIcons/blender.svg";
import GCloud from "../../Assets/TechIcons/gcloud.png";

function Techstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" className="tech-icon-images" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSharp} alt="C#" className="tech-icon-images" />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" className="tech-icon-images" />
        <div className="tech-icons-text">C</div>
      </Col>

      {/* Frontend / Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" className="tech-icon-images" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ElectronJS} alt="Electron.js" className="tech-icon-images" />
        <div className="tech-icons-text">Electron.js</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Express} alt="Express" className="tech-icon-images" />
        <div className="tech-icons-text">Express</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" className="tech-icon-images" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLServer} alt="SQL Server" className="tech-icon-images" />
        <div className="tech-icons-text">SQL Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLite} alt="SQLite" className="tech-icon-images" />
        <div className="tech-icons-text">SQLite</div>
      </Col>

      {/* Tools & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Bash} alt="Bash" className="tech-icon-images" />
        <div className="tech-icons-text">Bash</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GCloud} alt="Google Cloud" className="tech-icon-images" />
        <div className="tech-icons-text">Google Cloud</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      {/* Specialized */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={JavaFX} alt="JavaFX" className="tech-icon-images" />
        <div className="tech-icons-text">JavaFX</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Puppet} alt="Puppeteer" className="tech-icon-images" />
        <div className="tech-icons-text">Puppeteer</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Blender} alt="Blender" className="tech-icon-images" />
        <div className="tech-icons-text">Blender</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Agile} alt="Agile" className="tech-icon-images" />
        <div className="tech-icons-text">Agile</div>
      </Col>
    </Row>
  );
}

export default Techstack;