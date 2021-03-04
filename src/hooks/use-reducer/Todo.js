import React from 'react'
import { ACTIONS } from './Use-Reducer'

const Todo = ({todo, dispatch}) => {
  return (
    <div>
      <span style={{color: todo.completed ? '#AAA' : '#000'}}>{todo.name}</span>
      <button onClick={() => dispatch({type: ACTIONS.TOGGLE_COMPLETED, payload: {id: todo.id}})}>Toggle</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
    </div>
  )
}

export default Todo