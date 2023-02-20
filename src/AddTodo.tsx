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
		<form onSubmit={submit}>
		  <input type='text' name='task' onChange={handleChange} value={newTodo}/>
		  <input type='submit' value={'Submit'}/>
		</form>
	)
  }
  