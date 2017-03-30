import React, { PropTypes } from 'react'

const Todo = ({ onClick, text, completed }) => (
  <li
    style={{textDecoration: completed ? 'line-through' : 'none'}}
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
