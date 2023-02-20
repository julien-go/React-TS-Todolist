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
		<div className='grid grid-cols-4 gap-4 m-10'>
			{todos.map((todo, id) => {
				return (
					<div key={id} className="bg-amber-100 h-28 border-solid border-2 border-dark-500 flex flex-col justify-center">
						<p className="text-1xl font-bold">{todo.task}</p>
						<div className='flex justify-evenly'>
							<input className='' type='checkbox' checked={todo.status} onChange={() => checkUncheck(id)}/>
							<button onClick={() => removeTodo(id)}>Supprimer</button>
						</div>
						
					</div>
				)
			})}
		</div>
	)
  }
  