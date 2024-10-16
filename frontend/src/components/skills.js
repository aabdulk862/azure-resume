import React from "react";
import { Container, Table } from "react-bootstrap";

const Skills = ({ data }) => {
  return (
    <Container style={{ fontSize: "1.1rem", marginBottom: "5rem", }}>
      <h1 style={{ textDecoration: "underline", color: "#114b5f" }}>Skills</h1>
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
          {data.map(({ skillname, yearsOfExperience }, index) => {
            return (
              <tr key={index}>
                <td>{skillname}</td>
                <td>{yearsOfExperience}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Skills;
