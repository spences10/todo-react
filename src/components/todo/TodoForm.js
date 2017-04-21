import React from 'react'

// stateless functional component

export const TodoForm = (props) => (          
  <form>
    <input type="text" 
      onChange={props.handleInputChange} 
      value={props.currentTodo}/> 
  </form>)