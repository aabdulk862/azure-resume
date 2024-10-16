import React from "react";
import { Container, Card } from "react-bootstrap";

const References = ({ data }) => {
  return (
    <Container style={{ fontSize: "1.2rem" }}>
      <h1 style={{ textDecoration: "underline", color: "#114b5f" }}>References</h1>
      {data.map(({ name, description, email, phone }, index) => {
        return (
          <Card 
            key={index} 
            style={{ 
              marginTop: "20px", 
              marginBottom: "20px", 
              padding: "10px", 
              borderColor: "#212e3a", // Dark border color
              backgroundColor: "#f0f4f8", // Light background for readability
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <Card.Title style={{ color: "#114b5f", fontWeight: "bold" }}>{name}</Card.Title>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
              <Card.Text>
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> {phone}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default References;
