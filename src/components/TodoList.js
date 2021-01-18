import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
        <Container fluid className="todo-list-container p-5">
            <Col xs={10} md={8} lg={5} className="todo-list p-2">
                {todos.length === 0 ? (
                    <div>
                        <p>Nothing here yet... Add some todos! 🍃</p>
                    </div>
                ) : (
                    <ul>
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.key}
                                todo={todo}
                                toggleTodo={toggleTodo}
                                removeTodo={removeTodo}
                            />
                        ))}
                    </ul>
                )}
            </Col>
        </Container>
    );
}

export default TodoList;
