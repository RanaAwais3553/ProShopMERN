import { Col, Container, Row } from "react-bootstrap";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">CopyRight &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
