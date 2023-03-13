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
			<div id='col-left' className='p-2 flex flex-col gap-5'>
				<h2 className='text-2xl bold'>En cours :</h2>
				{todos.filter((e) => e.status === false).map((todo) => {
					return ( 
						<div key={todo.id} id={`${todo.id}`} className="p-5 flex flex-col justify-center hover:shadow-form rounded-md bg-[#D7E7FF] shadow-md hover:bg-[#D7D6FF]">
							<p className="text-1xl font-bold break-words">{todo.task}</p>
							<div className='flex justify-evenly'>
								<input className='' type='checkbox' checked={todo.status} onChange={() => checkUncheck(todo.id)}/>
								<button onClick={() => removeTodo(todo.id)}>Supprimer</button>
							</div>
						</div>
					)
				})}
			</div>

			<div id='col-right' className='p-2 flex flex-col gap-5'>
				<h2 className='text-2xl bold'>Effectué :</h2>
				{todos.filter((e) => e.status === true).map((todo) => {
						return ( 
							<div key={todo.id} id={`${todo.id}`} className="p-5 flex flex-col justify-center hover:shadow-form rounded-md bg-[#D8FFCB] shadow-md hover:bg-[#D8FFDD]">
								<p className="text-1xl font-bold break-words">{todo.task}</p>
								<div className='flex justify-evenly'>
									<input className='' type='checkbox' checked={todo.status} onChange={() => checkUncheck(todo.id)}/>
									<button onClick={() => removeTodo(todo.id)}>Supprimer</button>
								</div>
							</div>
						)
					})}

				</div>
		</div>
	)
  }
  