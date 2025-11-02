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
