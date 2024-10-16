import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Projects = ({ data }) => {
  return (
    <Container style={{ fontSize: "1.2rem", marginBottom: "5rem", }}>
      <h1 style={{ textDecoration: "underline", color: "#114b5f" }}>Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.map(({ id, image, title, link, demo }) => {
          return (
            <Col key={id}>
              <Card 
                style={{ 
                  marginTop: "20px", 
                  padding: "5px", 
                  border: "3px solid #212e3a", 
                  borderRadius: "1.5rem", 
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  height: "100%",  
                  backgroundColor: "#f0f4f8",  // Lighter background color
                  color: "#212e3a"  // Dark text color for contrast
                }}>
                <Card.Img 
                  variant="top" 
                  src={image} 
                  alt={title} 
                  style={{ 
                    borderRadius: "1.5rem", 
                    height: "200px", 
                    objectFit: "cover" 
                  }} 
                />
                <div style={{ 
                  borderTop: "2px solid #114b5f",  // Color for the border
                  margin: "10px 0" 
                }} />
                <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Card.Title style={{ marginTop: "10px" }}>{title}</Card.Title>
                  <Card.Text>
                    <strong>Source Code:</strong>{" "}
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ color: "#114b5f", textDecoration: "none" }}
                    >
                      GitHub
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <strong>Demo:</strong>{" "}
                    <a 
                      href={demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ color: "#114b5f", textDecoration: "none" }}
                    >
                      Live Demo
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
