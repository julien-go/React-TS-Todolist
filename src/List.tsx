import { useState } from 'react'
import type { TodoType, TodoListType } from './@types/todo'

type Props = {
	todos: TodoListType
}

export const List =({todos}: Props)=> {

	return (
		<div>
			{todos.map((todo, id) => {
				return (
					<p>{todo.task}</p>
				)
			})}
		</div>
	)
  }
  