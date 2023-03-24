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
						<div key={todo.id} id={`${todo.id}`} className="p-5 flex justify-center items-center hover:shadow-form rounded-md bg-[#D7E7FF] shadow-md hover:bg-[#D7D6FF]">
							<div className='w-1/2 flex justify-evenly items-center'>
								<p className="text-1xl font-bold break-words">{todo.task}</p>
							</div>
							<div className='w-1/2 flex justify-evenly items-center'>
								<input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' type='checkbox' checked={todo.status} onChange={() => checkUncheck(todo.id)}/>
								<button className="rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"onClick={() => removeTodo(todo.id)}>Supprimer</button>
							</div>
						</div>
					)
				})}
			</div>

			<div id='col-right' className='p-2 flex flex-col gap-5'>
				<h2 className='text-2xl bold'>Effectué :</h2>
				{todos.filter((e) => e.status === true).map((todo) => {
						return ( 
							<div key={todo.id} id={`${todo.id}`} className="p-5 flex justify-center items-center hover:shadow-form rounded-md bg-[#D8FFCB] shadow-md hover:bg-[#D8FFDD]">
								
								<div className='w-1/2 flex justify-evenly items-center'>
									<p className="text-1xl font-bold break-words">{todo.task}</p>
								</div>
								<div className='w-1/2 flex justify-evenly items-center'>
									<input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' type='checkbox' checked={todo.status} onChange={() => checkUncheck(todo.id)}/>
									<button className="rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"onClick={() => removeTodo(todo.id)}>Supprimer</button>
								</div>
							</div>
						)
					})}

				</div>
		</div>
	)
  }
  