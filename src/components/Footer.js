import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <Container fluid className="todo-footer p-3">
            <Col align="center">
                <p>Made with React⚛</p>
            </Col>
        </Container>
    );
}

export default Footer;
