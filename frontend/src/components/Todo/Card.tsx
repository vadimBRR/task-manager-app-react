import { useTodo, type TodoTypes } from '../../store/todoStore'

const Card = ({ id, content, completed }: TodoTypes) => {
	console.log(completed)
	const { toggleCompleted, deleteTodo } = useTodo()
	return (
		<div className='bg-white w-1/2 p-3 py-3 border border-gray-800 rounded-xl flex justify-between items-center'>
			<div className='flex gap-4 w-full'>
				<input
					type={'checkbox'}
					checked={completed}
					id={id}
					onChange={() => toggleCompleted(id)}
					className='appearance-none w-6 h-6 rounded-md border cursor-pointer relative after:content-[""] after:absolute after:block after:h-4 after:w-4 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm   checked:after:bg-indigo-700 checked:border-indigo-700 not-checked:hover:after:bg-indigo-700/50 transition duration-300'
				/>
				<label htmlFor={id} className='text-xl text-black  w-full'>
					{content}
				</label>
			</div>
			<div
				onClick={() => deleteTodo(id)}
				className=' relative w-5 h-5 after:absolute after:block after:w-[1px] after:h-4 after:bg-black after:rounded-xl after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2  after:rotate-45
        
        before:absolute before:block before:w-[1px] before:h-4 before:bg-black before:rounded-xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2  before:-rotate-45 '
			></div>
		</div>
	)
}

export default Card
