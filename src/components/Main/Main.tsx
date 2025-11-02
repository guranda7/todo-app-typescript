type Todo = {
  text: string
  isDone: boolean
  id: number
}

import { useState } from 'react'

import Todos from '../Todos/Todos'
export default function Main() {
     const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  return (
   <div>
    
    <Todos 
          todos = {todos}
          setTodos = {setTodos}
          inputValue = {inputValue}
          setInputValue = {setInputValue}
   />
    
   </div>
  )
}

