import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Contact = ({ contacts, currentUser }) => {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentUserImage, setCurrentUserImage] = useState("");
  const [currentSelected, setCurrentSelected] = useState("");

  return <div>Contact</div>;
};

export default Contact;
