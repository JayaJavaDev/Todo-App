import React, { useState } from 'react'
const Header = ({ addTodo }) => {

  const [todoName, setTodoName] = useState("")
  const [todoDesc, setTodoDesc] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    addTodo(todoName, todoDesc)

    setTodoName("")
    setTodoDesc("")
  }

  return (
    <form className='header' onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Todo Name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Todo Description"
        value={todoDesc}
        onChange={(e) => setTodoDesc(e.target.value)}
      />

      <button type="submit" className='add-btn'>
        + Add Todo
      </button>

    </form>
  )
}

export default Header
