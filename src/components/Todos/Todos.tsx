type Todo = {
  text: string
  isDone: boolean
  id: number
}

type TPropsTypes = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    inputValue: string
    setInputValue : React.Dispatch<React.SetStateAction<string>>
}

import React from 'react'

export default function Todos({todos, setTodos, inputValue, setInputValue}: TPropsTypes) {
    const handleAdd = () => {
    setTodos(prevTodos => [...prevTodos, {text: inputValue, isDone: false, id: Math.random()}])
    setInputValue("")
  }
  
  const hadnleDelete = (id: number) => {
    setTodos(prevTodos => [...prevTodos.filter(todo => todo.id !== id)])
  }
  const handleCheck = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
  setTodos(prevTodos => [...prevTodos.map(item => item.id === id ? {...item, isDone: event.target.checked} : item)])
}
  return (
    <div>
        <input 
          type="text" 
          placeholder="Enter Todo..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
        {todos.map((todo) => (
          <ul>
            <li key={todo.id} style={{textDecoration: todo.isDone ? "line-through" : "~"}}>
                <input type="checkbox" onChange={(event) => handleCheck(todo.id, event) } />
                {todo.text}
                <button onClick={() => hadnleDelete(todo.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
  )
}
