

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
    const [isDark, setIsDark] = useState<boolean>(false)
    
    
  return (
   <Wrapper isDark={isDark}>
    <Header>
      <SpanTitle>T O D O</SpanTitle>
      <Image onClick={() => setIsDark(!isDark)} src= {isDark ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}  alt="" />
    </Header>
    <Todos 
          todos = {todos}
          setTodos = {setTodos}
          inputValue = {inputValue}
          setInputValue = {setInputValue}
          isDark = {isDark}
          setIsDark = {setIsDark}
   />
    
   </Wrapper>
  )
}

const Wrapper = styled.div<{isDark: boolean}>`
  font-family: "Josefin Sans", sans-serif;;
  width: 37.5rem; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-image: ${({ isDark }) => 
    isDark 
  ?
  'url("images/bg-mobile-light.jpg")'
  :'url("images/bg-mobile-dark.jpg")'};
  background-color: ${({ isDark }) => 
    isDark 
    ? "#F8F8FF"
    : "black"
  };
  background-repeat: no-repeat;
  background-size: contain;

`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20rem;
  margin-top: 4.8rem;
 
`

const Image = styled.img`
  width: 2rem;
height: 2rem;
opacity: 1;
border-width: 0.1rem;
cursor: pointer;

`

const SpanTitle = styled.div`
  font-size: 2.8rem; 
  font-weight: 700;
  color: white;

`

