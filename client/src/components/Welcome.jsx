import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt="Robot" />
    </Container>
  );
};

const Container = styled.div``;

export default Welcome;
