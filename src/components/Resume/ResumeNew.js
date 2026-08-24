import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Naoufal_El_Aghzaoui.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [renderedCount, setRenderedCount] = useState(0);

  const isReady = numPages !== null && renderedCount >= numPages;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setRenderedCount(0);
    setNumPages(numPages);
  };

  const handlePageRenderSuccess = () => {
    setRenderedCount((count) => count + 1);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="resume-viewer">
            {!isReady && (
              <div className="resume-loading-overlay">
                <div className="resume-spinner" />
                <p>Loading resume…</p>
              </div>
            )}

            <div className={isReady ? "resume-pages is-ready" : "resume-pages"}>
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                className="d-flex flex-column justify-content-center"
              >
                {numPages &&
                  Array.from(new Array(numPages), (el, index) => (
                    <div
                      key={`page-container-${index + 1}`}
                      className="pdf-page-wrapper mb-5"
                      style={{
                        marginBottom: '60px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: '#fff',
                      }}
                    >
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        scale={width > 786 ? 1.7 : 0.6}
                        renderTextLayer={true}
                        renderAnnotationLayer={false}
                        onRenderSuccess={handlePageRenderSuccess}
                      />
                    </div>
                  ))}
              </Document>
            </div>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
