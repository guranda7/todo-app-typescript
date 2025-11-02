type Todo = {
  text: string
  isDone: boolean
  id: number
}

import { useState } from 'react'
import './App.css'
import Todos from './components/Todos/Todos'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  console.log(inputValue)

  

  return (
    <>
      <Todos 
      todos = {todos}
      setTodos = {setTodos}
      inputValue = {inputValue}
      setInputValue = {setInputValue}

      />
    </>
  )
}

export default App
