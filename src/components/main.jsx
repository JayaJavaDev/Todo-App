import React, { useState } from 'react'
import TodoCard from './TodoCard'
const Main = ({
  todos,
  updateTodo,
  updateTodoStatus,
  deleteTodo
}) => {

  const [filter, setFilter] = useState("All")

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true
    }
    return todo.status === filter
  })

  return (
    <div className='main'>

      <div className='top-bar'>
        <div className='filter-container'>
          <label>Status Filter:</label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
      </div>

      <div className='todo-container'>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              updateTodoStatus={updateTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <div className='welcome-message'>
            <div className='welcome-icon'>✦</div>
            <h2>
              {todos.length === 0
                ? "Welcome to Todo App!"
                : "No Todos Found!"}
            </h2>
            <p>
              {todos.length === 0
                ? "Start your journey. Add your first task today!"
                : "Try changing your status filter."}
            </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Main
