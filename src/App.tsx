import { useState, useEffect} from 'react'
import { AddTodo } from './AddTodo'
import { List } from './List'
import type { TodoType, TodoListType } from './@types/todo'
import './index.css'

function App() {

  const [todos, setTodos] = useState<TodoListType>([])

  const addTodo = (newTodo: string) => {
    setTodos([...todos, {task: newTodo, status: false}])
  }
  const removeTodo = (id: number) => {
    setTodos(todos.filter((element, index) => index !== id))
  }

  const handleStatus = (id: number) => {
    const newArray = todos.map((element, i) => {
      if(id === i){
        return {...element, status: !element.status}
      } else {
        return element
      }
    })
    setTodos(newArray)
  }

  useEffect(()=> {
    console.log(todos)
  })
  
  return (
        <div className="App mr-10 ml-10">
          <h1>Todolist React Typescript</h1>
          <AddTodo addTodo={addTodo}/>
          <List todos={todos} handleStatus={handleStatus} removeTodo={removeTodo}/>
        </div>
    
  )
}

export default App
