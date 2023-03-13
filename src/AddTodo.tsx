import { useState } from 'react'

type Props = {
	addTodo: (arg: string) => void
}

export const AddTodo =({addTodo}: Props)=> {

	const [newTodo, setNewTodo] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setNewTodo(e.target.value)
	  }
  
	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(newTodo !== ''){
			addTodo(newTodo)
	  		setNewTodo('')
		}
	  	
	  }

	return (
		<form className="w-full px-3 flex flex-col items-center gap-4 p-10" onSubmit={submit} >
			<div className="w-1/2">
				<label htmlFor='task' className='text-3xl mb-4 block text-base font-medium text-[#07074D]'>Nouvelle Tâche</label>
				<input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type='text' name='task' onChange={handleChange} value={newTodo}/>
			</div>
		  
		  <input className="w-1/2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type='submit' value={'Submit'} />
		</form>
	)
  }
  