import React from 'react'

function TodoItem({ todo, deleteTodo }) {
  // Fonction pour appeler deleteTodo quand on clique sur le bouton "Delete"
  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem