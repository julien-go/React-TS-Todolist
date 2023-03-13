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
		<div id='list' className='grid grid-cols-2 gap-3 p-10'>
			{todos.map((todo, id) => {
				return (
					<div key={id} className="p-5 flex flex-col justify-center hover:shadow-form rounded-md bg-[#D7E7FF] shadow-md hover:bg-[#D7D6FF] ${}">
						<p className="text-1xl font-bold break-words">{todo.task}</p>
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
  