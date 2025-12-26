import React from "react";
import { Container, Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Spinner></Spinner>
    </Container>
  );
};
