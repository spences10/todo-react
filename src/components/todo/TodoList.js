import React from 'react'
import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types'

// pass in props of todo as a spread object

export const TodoList = (props) => {
  return (
  <div className="todo-app">
    <ul> 
      {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}         
    </ul>
  </div>
  
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
} 

