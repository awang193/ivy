import "../styles/App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import moment from "moment";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
    const [currMaxKey, setCurrMaxKey] = useState(1);
    const [currDate, setCurrDate] = useState(moment().format("MM-DD-YYYY"));
    const [todos, setTodos] = useState([]);
    const [todosCompletedToday, setTodosCompletedToday] = useState(0);

    const addTodo = (task) => {
        setCurrDate(moment().format("MM-DD-YYYY"));

        if (todos.length === 6) {
            alert("Your todos are limited to 6 at a time.");
        } else {
            setTodos([
                ...todos,
                {
                    key: currMaxKey,
                    task: task,
                    completed: false,
                    date: currDate,
                },
            ]);
            setCurrMaxKey(currMaxKey + 1);
        }
    };

    const removeTodo = (todoID) => {
        setTodos(todos.filter((todo) => todo.key !== todoID));
    };

    const toggleTodo = (todoID) => {
        let toggled = todos.map((todo) => {
            if (todo.key === todoID) {
                if (!todo.completed && todo.date === currDate)
                    setTodosCompletedToday(todosCompletedToday + 1);
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
        setTodos(toggled);
    };

    return (
        <Container fluid className="p-0" align="center">
            <Header addTodo={addTodo} />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
            <Footer />
        </Container>
    );
}

export default App;
