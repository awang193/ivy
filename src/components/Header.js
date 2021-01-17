import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Header({ addTodo }) {
    const [todoPending, setTodoPending] = useState("");

    const handleChange = (event) => {
        setTodoPending(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(todoPending);

        let stripped = todoPending.trim();

        if (stripped) {
            addTodo(todoPending);
            setTodoPending("");
        }
    };

    return (
        <Container fluid className="todo-header p-3">
            <Col align="center">
                <p className="h1 text-center">Ivy 🌱</p>
                <form onSubmit={handleSubmit} className="todo-input">
                    <input
                        value={todoPending}
                        onChange={handleChange}
                        placeholder="What will you do today?"
                    />
                    <button
                        type="button"
                        className="button"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </form>
            </Col>
        </Container>
    );
}

export default Header;
