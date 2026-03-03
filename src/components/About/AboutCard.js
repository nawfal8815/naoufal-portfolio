import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Naoufal El Aghzaoui</span>{" "}
            from <span className="purple">Tangier, Morocco</span>.
            <br />
            I’m currently a student of{" "}
            <span className="purple">Informatics</span> at{" "}
            <span className="purple">KVK, Lithuania</span>.
            <br />I hold a Technician Specialist Diploma in{" "}
            <span className="purple">Software Development</span> from{" "}
            <span className="purple">Ciel Institute</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Handball 🤾🏻‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading  📈
            </li>
          </ul>

          <p style={{ color: "rgba(20, 255, 236, 0.6)" }}>
            "I always know less..."{" "}
          </p>
          <footer className="blockquote-footer">Naoufal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
