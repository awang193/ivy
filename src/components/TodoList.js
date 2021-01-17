import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
        <Container fluid className="todo-list-container p-0">
            <Container className="todo-list box-shadow p-5">
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
            </Container>
        </Container>
    );
}

export default TodoList;
