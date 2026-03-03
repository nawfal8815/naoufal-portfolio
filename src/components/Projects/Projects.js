import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tradingbot from "../../Assets/Projects/tradingbot.png";
import cookassistant from "../../Assets/Projects/cookassistant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradingbot}
              isBlog={false}
              title="Trading Bot"
              description="Designed and implemented an automated trading system for EUR/USD pair using
                          MERN stack and Puppeteer, reducing manual market analysis
                          workload by 80% through scheduled scraping and strategy-based
                          execution logic."
              ghLink="https://github.com/nawfal8815/naoufal-trading-bot"
              // demoLink="https://tradingbot-demo.com/"
            />
          </Col>

         
          B
          Repositorie: cook-assistant


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookassistant}
              isBlog={false}
              title="Cook Assistant"
              description="uilt client-facing interactive cooking assistant; Integrated real-time 3D rendering (Blender/CC4), voice recognition, and AI-driven response logic within a MERN-based web application."
              ghLink="https://github.com/nawfal8815/cook-assistant"
              // demoLink="https://cookassistant-demo.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
