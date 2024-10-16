import React from "react";
import { Container, Card } from "react-bootstrap";

const Education = ({ data }) => {
  return (
    <Container style={{ fontSize: "1.2rem" }}>
      <h1 style={{ textDecoration: "underline", color: "#114b5f" }}>Education</h1>
      {data.map(
        ({
          schoolName,
          specialization,
          monthOfPassing,
          yearOfPassing,
          achievements,
        }) => {
          return (
            <Card
              style={{
                width: "80%",
                marginTop: "20px",
                marginBottom: "20px",
                padding: "20px",
                border: "2px solid #005239",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#f0f4f8", // Lighter background color
                color: "#000", // Dark text color for contrast
              }}
            >
              <Card.Header style={{ fontWeight: "bold", fontSize: "1.5rem", backgroundColor: "#005239", color: "#ffffff" }}>
                {schoolName}
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{specialization}</Card.Title>
                <Card.Subtitle className="mb-2" style={{ color: "#000" }}>
                  {monthOfPassing} {yearOfPassing}
                </Card.Subtitle>
                <Card.Text style={{ paddingTop: "5px" }}>
                  <div>&emsp;{achievements}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        }
      )}
    </Container>
  );
};

export default Education;
