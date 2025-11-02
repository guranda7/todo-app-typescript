

type Todo = {
  text: string
  isDone: boolean
  id: number
}
import styled from 'styled-components'
import { useState } from 'react'
import css from 'styled-components'

import Todos from '../Todos/Todos'
export default function Main() {
     const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  return (
   <Wrapper>
    <Header>
      <SpanTitle>T O D O</SpanTitle>
      <Image src="/images/icon-moon.svg" alt="" />
    </Header>
    <Todos 
          todos = {todos}
          setTodos = {setTodos}
          inputValue = {inputValue}
          setInputValue = {setInputValue}
   />
    
   </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: "Josefin Sans", sans-serif;;
  width: 37.5rem; 
  height: 100vh;
  margin-top: 10.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-image: url("images/bg-mobile-light.jpg");
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7rem;
  margin-top: 4.8rem;
 
`

const Image = styled.img`
  width: 2rem;
height: 2rem;
opacity: 1;
border-width: 0.1rem;

`

const SpanTitle = styled.div`
  font-size: 2.8rem; 
  font-weight: 700;
  color: white;

`

