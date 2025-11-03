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
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>//ეს მერე გააკეთე
}

import React from 'react'
import styled from 'styled-components'


export default function Todos({todos, setTodos, inputValue, setInputValue}: TPropsTypes) {
    const handleAdd = () => {
    if(!inputValue.trim()) return; 
    setTodos(prevTodos => [...prevTodos, {text: inputValue, isDone: false, id: Math.random()}])
    setInputValue("")
  }
  
  const hadnleDelete = (id: number) => {
    setTodos(prevTodos => [...prevTodos.filter(todo => todo.id !== id)])
  }
  
  const handleCheck = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
  setTodos(prevTodos => [...prevTodos.map(item => item.id === id ? {...item, isDone: event.target.checked} : item)])
  
}

const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd()
    }
  }

const counter = todos.filter((todo) => {
  return !todo.isDone
}).length; 

const handleDeleteCompleted = () => {
  setTodos((prevTodos) => [...prevTodos.filter((todo) => !todo.isDone)] )
}

const handleShowAll = () => {
  setTodos((prevTodos) => [...prevTodos.filter((todo) => {
    return true
  })])
}
const handleShowCompleted = () => {
  setTodos((prevTodos) => [...prevTodos.filter((todo) => todo.isDone)])
}

const handleShowActive = () => {
  setTodos((prevTodos) => [...prevTodos.filter((todo) => !todo.isDone)])
}

  return (
    <TodosContainer>
        <StyledInput 
          type="text" 
          placeholder="Create a new todo…"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      <ListContainer>
        {todos.map((todo) => (
          
            <List key={todo.id} style={{textDecoration: todo.isDone ? "line-through" : "~"}}>
              <CheckBox>
                <input type="checkbox" onChange={(event) => handleCheck(todo.id, event) } />
                {todo.text}
              </CheckBox>
                
               <DeleteIcon src="/images/icon-cross.svg" onClick={() => hadnleDelete(todo.id)}/>
               
            </List>
        ))}
        </ListContainer>

        <TodoFooter>
          <span>{counter} items left</span>
          <div onClick={handleDeleteCompleted}>delete completed</div>
        </TodoFooter>

        <TodoSecondFooter>
          <SecondFooterSpan onClick={handleShowAll}>All</SecondFooterSpan>
          <SecondFooterSpan onClick={handleShowActive}>Active</SecondFooterSpan>
          <SecondFooterSpan onClick={handleShowCompleted}>Completed</SecondFooterSpan>
        </TodoSecondFooter>
      </TodosContainer>
  )
}

const TodosContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;

`

const StyledInput = styled.input`
 width: 32.7rem;
  height: 4.8rem;
  padding-left: 5rem;
  font-size: 1.6rem;
  font-family: "Josefin Sans", sans-serif;  /* font for input text */
  border: 2px solid #ccc;
  border-radius: 0.8rem;
  outline: none;
  color: #333;  /* typed text color */
  text-align: left; /* aligns typed text */
  /* text-align: right; */ /* if you want right alignment */




  /* Placeholder styling */
  ::placeholder {
    color: #aaa;
    font-style: italic;
    font-family: "Josefin Sans", sans-serif;  /* same font as input */
    text-align: left; /* align placeholder text */
    /* text-align: right; */ /* align right */
  }
`

const List = styled.li`
  width: 32.7rem;
  height: 4.8rem;
  border-bottom: 1px solid #E3E4F1 ;
  border-radius: 0.5rem;
  padding: 2rem;
  background-color: white;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
  letter-spacing: -0.17px;
  color: #494C6B;
  display: flex;
  justify-content: space-between;
  align-items: center;


`

const DeleteIcon = styled.img`
  width: 1.2rem,;
  height: 1.2rem;
  opacity: 1;
  align-self: left;
`

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;


`

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none; /* remove bullets */
`

const TodoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32.7rem;
  height: 4.8rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  color: #9495A5;
`
const TodoSecondFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 32.7rem;
  height: 4.8rem;
  padding-left: 1rem;
  font-size: 1.4rem;

 
`

const SecondFooterSpan = styled.span `
  &:hover {
    color: #3A7CFD;
  }

  cursor: pointer;
`