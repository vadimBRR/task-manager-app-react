// import { useActionsTodo } from '@/store/todoStore'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/16/solid'
import { useTodo } from '../../store/todoStore'
import { useState } from 'react'

const Task = ({
	id,
	content,
	completed,
}: {
	id: string
	content: string
	completed: boolean
}) => {
	const { toggleCompleted, removeTodo, updateTodo } = useTodo()

	const [isEditing, setIsEditing] = useState(false)
	const [editedText, setEditedText] = useState(content)
	const handleSave = () => {
		if (editedText.trim() && editedText !== content) {
			updateTodo(id, editedText)
		}
		setIsEditing(false)
	}

	return (
		<div
			className={`p-4 border border-white/20 flex flex-row items-center rounded-md bg-input gap-4 shadow drop-shadow-2xl transition transform ease-in-out duration-300 scale-100 hover:scale-102 hover:border-indigo-300/20 hover:brightness-110 relative ${
				completed &&
				'brightness-60 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:w-[98%] after:border after:border-white/30 hover:after:hidden '
			}`}
		>
			{completed && <div className=''></div>}
			<input
				id={id}
				type='checkbox'
				checked={completed}
				onChange={() => toggleCompleted(id)}
				className='h-6 w-7 appearance-none rounded-md border duration-200 border-white/30 relative checked:bg-indigo-300/20 checked:border-transparent hover:border-indigo-300/20 checked:after:content-[""] checked:after:w-4 checked:after:h-4 checked:after:bg-white checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2  checked:after:rounded-md checked:after:opacity-10 checked:after:block checked:after:border checked:after:border-indigo-300 '
			/>

			{isEditing ? (
				<input
					className='w-full text-2xl outline-none bg-transparent border-b border-indigo-500/50'
					value={editedText}
					onChange={e => setEditedText(e.target.value)}
					onBlur={handleSave}
					onKeyDown={e => {
						if (e.key === 'Enter') handleSave()
						if (e.key === 'Escape') {
							setIsEditing(false)
							setEditedText(content)
						}
					}}
					autoFocus
				></input>
			) : (
				<label
					htmlFor={id}
					className='block w-full text-2xl cursor-pointer '
					onDoubleClick={() => setIsEditing(true)}
				>
					{content}
				</label>
			)}

			<div className='flex flex-row gap-1'>
				<div
					className=' group border rounded-md duration-100 ease-in-out border-white/20 p-2 cursor-pointer hover:border-indigo-500/20'
					onClick={() => setIsEditing(true)}
				>
					<PencilSquareIcon className='size-7 duration-100  group-hover:text-indigo-500' />
				</div>

				<div
					className=' group border rounded-md duration-100 ease-in-out border-white/20 p-2 cursor-pointer hover:border-red-500/20'
					onClick={() => removeTodo(id)}
				>
					<TrashIcon className='size-7 duration-100  group-hover:text-red-400' />
				</div>
			</div>
		</div>
	)
}

export default Task
