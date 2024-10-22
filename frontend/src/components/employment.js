import React from "react";
import { Container, Card } from "react-bootstrap";

const Employment = ({ data }) => {
  return (
    <Container style={{ fontSize: "1.2rem", marginBottom: "5rem", }}>
      <h1 style={{ textDecoration: "underline", color: "#114b5f" }}>Employment</h1>
      {data.map(
        ({
          companyName,
          role,
          summary,
          monthOfStarting,
          yearOfStarting,
          monthOfLeaving,
          yearOfLeaving,
          achievements,
          presentEmployer,
        }) => {
          return (
            <Card
              style={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
                padding: "20px",
                border: "2px solid #212e3a",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#f0f4f8", // Lighter background color
                color: "#212e3a", // Dark text color for contrast
              }}
            >
              <Card.Body>
                <b>{companyName}</b>
                <Card.Title>{role}</Card.Title>
                <Card.Subtitle style={{ fontStyle: "italic", marginBottom: "10px" }}>
                  {monthOfStarting} {yearOfStarting} - {presentEmployer ? "Present" : `${monthOfLeaving} ${yearOfLeaving}`}
                </Card.Subtitle>
                <Card.Text style={{ paddingTop: "5px" }}>
                  <div>&emsp;{summary}</div>
                  {/* <div style={{ marginTop: "10px" }}><strong>Achievements:</strong> {achievements}</div> */}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        }
      )}
    </Container>
  );
};

export default Employment;
