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

import React, { useState } from 'react'
import styled from 'styled-components'


export default function Todos({todos, setTodos, inputValue, setInputValue, isDark, setIsDark}: TPropsTypes) {
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

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

const filteredTodos = todos.filter(todo => {
  if(filter === "active") return !todo.isDone;
  if(filter === "completed") return todo.isDone;
  return true; 
})
  return (
    <TodosContainer>
        <StyledInput isDark={isDark}
          type="text" 
          placeholder="Create a new todo…"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}

        />
      <ListContainer>
        {filteredTodos.map((todo) => (
          
            <List isDark={isDark} key={todo.id} style={{textDecoration: todo.isDone ? "line-through" : "~"}}>
              <CheckBox>
                <input type="checkbox" onChange={(event) => handleCheck(todo.id, event) } />
                {todo.text}
              </CheckBox>
                
               <DeleteIcon src="/images/icon-cross.svg" onClick={() => hadnleDelete(todo.id)}/>
               
            </List>
        ))}
        </ListContainer>
      {todos.length > 0 && (
        <TodoFooter isDark = {isDark}>
          <span>{counter} items left</span>
          <div onClick={handleDeleteCompleted}>delete completed</div>
        </TodoFooter>
      )}
        <TodoSecondFooter isDark={isDark}>
          <SecondFooterSpan isDark={isDark} onClick={() => setFilter("all")}>All</SecondFooterSpan>
          <SecondFooterSpan isDark={isDark} onClick={() => setFilter("active")}>Active</SecondFooterSpan>
          <SecondFooterSpan isDark={isDark} onClick={() => setFilter("completed")}>Completed</SecondFooterSpan>
        </TodoSecondFooter>
      </TodosContainer>
  )
}

const TodosContainer = styled.div`
 display: flex;
 flex-direction: column;

`

const StyledInput = styled.input<{isDark: boolean}>`
 width: 32.7rem;
  height: 4.8rem;
  padding-left: 5rem;
  font-size: 1.6rem;
  font-family: "Josefin Sans", sans-serif; 
  border: none;
  border-radius: 0.8rem;
  outline: none;
  color: ${({ isDark}) => 
    !isDark 
  ? "#767992"
  : "#333"
  
  } ;  
  text-align: left;
  background-color: ${({ isDark}) => 
    isDark 
    ? "white"
    : "#25273D"
  };





  /* Placeholder styling */
  ::placeholder {
    color: #aaa;
    font-style: italic;
    font-family: "Josefin Sans", sans-serif;  /* same font as input */
    text-align: left; /* align placeholder text */
    /* text-align: right; */ /* align right */
  }
`

const List = styled.li<{isDark: boolean}>`
  width: 32.7rem;
  height: 4.8rem;
  border-bottom: 1px solid ${({ isDark }) => !isDark ? "#383947" : "#E3E4F1"};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 2rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
  letter-spacing: -0.17px;
  color: #494C6B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isDark }) => 
    !isDark 
  ? "#25273D"
  : "white"
  };


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
  gap: 1rem;


`

const ListContainer = styled.ul`
  margin-top: 2rem;
  padding: 0;
  list-style: none; /* remove bullets */
`

const TodoFooter = styled.div<{isDark: boolean}>`
   width: 32.7rem;
  height: 4.8rem;
  background-color: ${({ isDark}) => 
    !isDark 
  ? "#25273D"
  : "white"
  };
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  width: 32.7rem;
  height: 4.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: ${({ isDark }) => 
    !isDark 
    ? "#5B5E7E"
    : "#9495A5"
  } ;
  cursor: pointer;
`
const TodoSecondFooter = styled.div<{isDark: boolean}>`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 32.7rem;
  height: 4.8rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  margin-top: 2rem;
  background-color: ${({ isDark }) => 
   !isDark 
   ? "#25273D"
   : "white"
  };
 

 
`

const SecondFooterSpan = styled.span<{isDark: boolean}> `
  
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 100%;
  letter-spacing: -0.19px;
  color: ${({ isDark }) => 
  !isDark 
  ? "#5B5E7E"
  : "#9495A5"
  };

  &:hover {
    color: #3A7CFD;
  }

  cursor: pointer;
`