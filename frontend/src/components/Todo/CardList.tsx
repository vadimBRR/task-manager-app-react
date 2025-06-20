import { useEffect, useState } from 'react'
import { useTodo } from '../../store/todoStore'
import Task from './Task'

const CardList = () => {
	const { todos, filter } = useTodo()

	const filteredTodos = filter === 'all'
  ? todos
  : todos.filter(todo =>
      filter === 'completed' ? todo.completed : !todo.completed
    )
	return (
		<div className='space-y-3'>
			{filteredTodos.map(item => (
				<Task {...item} key={item.id} />
			))}
		</div>
	)
}

export default CardList
