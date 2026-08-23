import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";

function ProjectCard({ title, image, status, description, tags, liveLink, repoLink, liveLabel }) {
  return (
    <Card className="project-card-v2">
      <div className="project-card-media">
        {image ? (
          <>
            <div className="project-browser-bar">
              <span className="project-browser-dot" style={{ background: "#ff5f56" }} />
              <span className="project-browser-dot" style={{ background: "#ffbd2e" }} />
              <span className="project-browser-dot" style={{ background: "#27c93f" }} />
              {liveLabel && <span className="project-browser-url">{liveLabel}</span>}
            </div>
            <img src={image} alt={`${title} screenshot`} className="project-card-img" />
          </>
        ) : (
          <div className="project-card-placeholder">
            <VscTools size={42} />
            <span>Redesign in progress</span>
          </div>
        )}
        <span className={`project-status-badge ${status === "live" ? "is-live" : "is-progress"}`}>
          {status === "live" ? "Live" : "In Progress"}
        </span>
      </div>

      <Card.Body className="project-card-v2-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="project-tags">
          {tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          {liveLink && (
            <Button variant="primary" href={liveLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp;Visit Live
            </Button>
          )}
          {repoLink && (
            <Button
              variant="primary"
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              style={liveLink ? { marginLeft: "10px" } : undefined}
            >
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
