import React, { useState } from 'react'
const TodoCard = ({
  todo,
  updateTodo,
  updateTodoStatus,
  deleteTodo
}) => {

  const [isEditing, setIsEditing] = useState(false)

  const [editName, setEditName] = useState(todo.todoName)
  const [editDesc, setEditDesc] = useState(todo.todoDesc)

  const handleUpdate = () => {

    updateTodo(todo.id, editName, editDesc)

    setIsEditing(false)
  }

  const handleCancel = () => {

    setEditName(todo.todoName)
    setEditDesc(todo.todoDesc)

    setIsEditing(false)
  }

  return (
    <div className='todo-card'>

      {isEditing ? (

        <div className='edit-section'>

          <input
            type="text"
            placeholder="Todo Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />

          <textarea
            placeholder="Todo Description"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />

          <div className='btn-container'>

            <button
              className='save-btn'
              onClick={handleUpdate}
            >
              Save
            </button>

            <button
              className='cancel-btn'
              onClick={handleCancel}
            >
              Cancel
            </button>

          </div>

        </div>

      ) : (

        <>

          <div className='card-heading'>

            <span className='card-label'>MY TASK</span>

          </div>

          <h3>
            {todo.todoName || "Untitled Task"}
          </h3>

          <p>
            {todo.todoDesc || "No description added"}
          </p>

          <div className='status-row'>

            <label>Status:</label>

            <select
              className={`status-select ${
                todo.status === "Completed"
                  ? "completed"
                  : "not-completed"
              }`}
              value={todo.status}
              onChange={(e) =>
                updateTodoStatus(e.target.value, todo.id)
              }
            >
              <option value="Not Completed">
                Not Completed
              </option>

              <option value="Completed">
                Completed
              </option>

            </select>

          </div>

          <div className='btn-container'>

            <button
              className='edit-btn'
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className='delete-btn'
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </div>

        </>

      )}

    </div>
  )
}

export default TodoCard
