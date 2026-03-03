import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import eclipse from "../../Assets/TechIcons/eclipse.png";
import netbeans from "../../Assets/TechIcons/netbeans.png";
import Linux from "../../Assets/TechIcons/linux.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={eclipse} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Eclipse</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={netbeans} alt="netbeans" className="tech-icon-images" />
        <div className="tech-icons-text">NetBeans</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
