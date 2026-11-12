import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Main from './components/main.jsx'
import './App.css'

const App = () => {

  const [todos, setTodos] = useState([])

  // Add Todo
  const addTodo = (name, desc) => {
    const newTodo = {
      id: Date.now(),
      todoName: name,
      todoDesc: desc,
      status: "Not Completed"
    }

    setTodos([...todos, newTodo])
  }

  // Update Todo
  const updateTodo = (id, name, desc) => {
    setTodos(todos.map((todo) =>
      todo.id === id
        ? { ...todo, todoName: name, todoDesc: desc }
        : todo
    ))
  }

  // Update Status
  const updateTodoStatus = (status, id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, status: status } : todo
    ))
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='container'>

      <h1 className='app-title'> The To-Do Suite✧ </h1>

      <Header addTodo={addTodo} />

      <Main
        todos={todos}
        updateTodo={updateTodo}
        updateTodoStatus={updateTodoStatus}
        deleteTodo={deleteTodo}
      />

    </div>
  )
}

export default App
