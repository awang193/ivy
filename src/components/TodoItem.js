import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/TodoItem.css";
import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {
    const id = todo.key;

    const handleToggle = (event) => {
        toggleTodo(id);
    };

    const handleRemove = (event) => {
        removeTodo(id);
    };

    return (
        <li className="todo-item">
            <Row>
                <Col className="sm-8 text-left">
                    <span
                        className={todo.completed && "disabled"}
                        onClick={handleToggle}
                    >
                        {todo.task}
                    </span>
                </Col>
                <Col className="sm-3">
                    <span>
                        {!todo.completed ? (
                            <button type="button" onClick={handleToggle}>
                                ✅
                            </button>
                        ) : (
                            <button type="button" onClick={handleToggle}>
                                🔁
                            </button>
                        )}
                    </span>
                    <span>
                        <button type="button" onClick={handleRemove}>
                            ❌
                        </button>
                    </span>
                </Col>
            </Row>
        </li>
    );
}

export default TodoItem;
