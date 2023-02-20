import { useState } from 'react'
import type { TodoType, TodoListType } from './@types/todo'

type Props = {
	todos: TodoListType,
	handleStatus: (id: number) => void,
	removeTodo: (id: number) => void
}

export const List =({todos, handleStatus, removeTodo}: Props)=> {

	const checkUncheck= (id: number) => {
		handleStatus(id)
	}

	return (
		<div>
			{todos.map((todo, id) => {
				return (
					<div key={id} style={{border: 'black 1px solid'}}>
						<p>{todo.task}</p>
						<input type='checkbox' checked={todo.status} onChange={() => checkUncheck(id)}/>
						<button onClick={() => removeTodo(id)}>Supprimer</button>
					</div>
				)
			})}
		</div>
	)
  }
  