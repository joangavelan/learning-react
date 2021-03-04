import { useState, useReducer } from 'react'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_COMPLETED: 'toggle-completed',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_COMPLETED:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO: 
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return {id: Date.now(), name: name, completed: false}
}

const Todos = () => {
  
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
 

  function handleSubmit(e) {
    e.preventDefault();
    if(!name) return;
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}    
    </div>
  )
}

export default Todos


// import { useReducer} from 'react'

// const ACTIONS = {
// }

// function reducer(state, action) {
//   switch(action.type) {
//     case ACTIONS.INCREMENT:
//       return {count: state.count + 1}
//     case ACTIONS.DECREMENT:
//       return {count: state.count - 1}
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, {count: 0});

//   function increment() {
//     dispatch({type: ACTIONS.INCREMENT});
//   }

//   function decrement() {
//     dispatch({type: ACTIONS.DECREMENT})
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span style={{margin: '5px'}}>{state.count}</span>
//       <button onClick={increment}>+</button>
//     </>
//   );
// }

// export default Counter; 