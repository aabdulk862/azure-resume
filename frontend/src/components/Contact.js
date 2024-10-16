import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API requests
import { Container, Card } from "react-bootstrap";
import Security from "../img/security.png";
import AWS from "../img/aws.png";
import Azure from "../img/fundamentals.png";

function Contact({ data }) {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    // Fetch the visit count from your Azure Function API
    const fetchVisitCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7071/api/GetResumeCounter"
        );
        setVisitCount(response.data.count); // Assuming the response contains a `count` field
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <Container style={{ fontSize: "1.2rem", marginBottom: "5rem", }}>
      <div className="App">
        <h1 style={{ textDecoration: "underline", color: "#114b5f" }}>
          {data.name}'s Resume
        </h1>
        <p>Page visited {visitCount} times</p> {/* Display the visit count */}
        <Card
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "2px solid #212e3a",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f0f4f8",
            color: "#212e3a",
          }}
        >
          <h3>{data.role}</h3>
          <p>{data.address}</p>
          <p>{data.phone}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              margin: "5px",
            }}
          >
            <p style={{ margin: "5px 0" }}>
              <strong style={{ marginRight: "10px" }}>LinkedIn:</strong>
              <a
                href={data.linkedinId}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0073b1",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s, color 0.3s",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#e6f0fa";
                  e.target.style.color = "#005582";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#0073b1";
                }}
              >
                www.linkedin.com/in/adam-abdulkadir/
              </a>
            </p>
            <p style={{ margin: "5px 0" }}>
              <strong style={{ marginRight: "10px" }}>GitHub:</strong>
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#333",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s, color 0.3s",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f0f0f0";
                  e.target.style.color = "#24292e";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#333";
                }}
              >
                https://github.com/aabdulk862
              </a>
            </p>
            <p style={{ margin: "5px 0" }}>
              <strong style={{ marginRight: "10px" }}>Email:</strong>
              <a
                href={`mailto:${data.email}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0078d4",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s, color 0.3s",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#e1f5fe";
                  e.target.style.color = "#0056a3";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#0078d4";
                }}
              >
                adama1862@outlook.com
              </a>
            </p>
          </div>
          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "#4a4a4a",
              backgroundColor: "#e6f0fa",
              padding: "15px",
              borderRadius: "8px",
              margin: "15px 0",
              lineHeight: "1.6",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {data.roleDescription}
          </p>
          <h3>
            <u>Certifications</u>:
          </h3>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              src={Security}
              alt="Security+"
              style={{ width: "15%", padding: "10px" }}
            />
            <img
              src={AWS}
              alt="AWS Solutions Architect"
              style={{ width: "15%", padding: "10px" }}
            />
            <img
              src={Azure}
              alt="AWS Solutions Architect"
              style={{ width: "15%", padding: "10px" }}
            />
          </div>
        </Card>
      </div>
    </Container>
  );
}

export default Contact;
