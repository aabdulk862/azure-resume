import React from "react";
import { Container, Table } from "react-bootstrap";

const Skills = ({ data }) => {
  return (
    <Container style={{ fontSize: "1.1rem", marginBottom: "5rem" }}>
      <h1 style={{ textDecoration: "underline", color: "#114b5f", marginBottom: "1rem" }}>
        Skills
      </h1>
      <Table 
        striped 
        bordered 
        hover 
        style={{
          borderColor: "#212e3a",
          backgroundColor: "#f0f4f8", // Light background for contrast
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#114b5f", color: "#ffffff" }}>
            <th>Skill</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ skillname, yearsOfExperience }, index) => (
            <tr 
              key={index}
              style={{
                transition: "background-color 0.3s",
                cursor: "pointer", // Changes cursor to pointer on hover
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6f0fa")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <td>{skillname}</td>
              <td>{yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Skills;
