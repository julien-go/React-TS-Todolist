import { useState } from 'react'
import { AddTodo } from './AddTodo'
import { List } from './List'
import type { TodoType, TodoListType } from './@types/todo'

function App() {

  const [todos, setTodos] = useState<TodoListType>([])

  const addTodo = (newTodo: string) => {
    setTodos([...todos, {task: newTodo, status: false}])
  }
  
  return (
        <div className="App">
          <AddTodo addTodo={addTodo}></AddTodo>
          <List todos={todos}></List>
        </div>
    
  )
}

export default App
