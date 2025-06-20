import { useState } from 'react'
import { useTodo } from '../../store/todoStore'

const NewTask = () => {
	const { addTodo } = useTodo()
	const [value, setValue] = useState('')

	const handleAddTodo = (e: React.FormEvent) => {
		e.preventDefault()
		if (value.trim()) {
			addTodo(value)
			setValue('')
		}
	}

	return (
		<form
			onSubmit={e => handleAddTodo(e)}
			className='grid grid-cols-[1fr_200px] rounded-xl overflow-hidden'
		>
			<input
				className='w-full p-4 outline-none bg-input border border-white/15 rounded-xl shadow text-xl rounded-r-none flex-1 focus:border-indigo-300/50 duration-100'
				placeholder='Kill someone'
				value={value}
				onChange={e => setValue(e.currentTarget.value)}
			></input>
			<button
				type='submit'
				className=' bg-indigo-600 text-xl duration-300 cursor-pointer scale-100 hover:scale-103 hover:bg-indigo-500'
			>
				Add Task
			</button>
		</form>
	)
}

export default NewTask
