import { useState } from 'react'
import { useTodo } from './store/todoStore'
import Card from './components/Todo/Card'
import NewTask from './components/Todo/NewTask'

function App() {
	const [text, setText] = useState('')
	const { todos, addTodo } = useTodo()

	const handleSendForm = () => {
		if (text.trim()) {
			addTodo(text)
			setText('')
		} else {
		}
	}

	return (
		<div className='max-w-3xl mx-auto space-y-5 py-10'>
			{/* <h1>Hello</h1> */}
			<div className='flex flex-col items-center justify-center space-y-4'>
				<h1 className='text-5xl text-poppins font-bold'>Manage your tasks</h1>
				<h3 className='text-xl font-light'>
					Keep track of your to-do list efficiently.
				</h3>
			</div>

			<NewTask />

			<div className='space-y-3'>
			{todos.map(item => (
				<Card {...item} key={item.id} />
			))}
		</div>
		</div>
	)
}

export default App
