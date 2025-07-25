import { useEffect, useRef, useState } from 'react'
import { useTodo, type FilterType } from '../../store/todoStore'

const DropdownFilter = () => {
	const filterOptions: FilterType[] = ['all', 'active', 'completed']
	const { filter, setFilter } = useTodo()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	const toggleFilter = (option: FilterType) => {
		if (option !== filter && option) {
			setFilter(option)
		}
		setIsOpen(false)
	}

	useEffect(() => {
		const closeOnClickOutside = (e: MouseEvent) => {
			if (!dropdownRef.current?.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', closeOnClickOutside)

		return () => {
			document.removeEventListener('mousedown', closeOnClickOutside)
		}
	}, [])

	return (
		<div className='fixed top-3 right-4 text-left z-20' ref={dropdownRef}>
			<button
				className='bg-indigo-600 px-4 py-2 rounded-md inline-flex cursor-pointer outline-none'
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={e => {
					if (isOpen && e.key === 'Escape') setIsOpen(false)
				}}
				aria-expanded={isOpen}
				aria-haspopup='true'
			>
				{filter.charAt(0).toUpperCase() + filter.slice(1)}{' '}
				<div
					className={`pl-1 ${
						isOpen ? 'rotate-180' : 'rotate-0'
					} duration-300 transition-transform `}
				>
					{' '}
					▼
				</div>
			</button>

			{isOpen && (
				<div className='relative'>
					<ul
						className='absolute right-0 top-2 bg-white py-2 w-36  text-right rounded-xl ring-1 ring-black/10'
						role='menu'
					>
						{filterOptions.map(item => (
							<li
								role='menuitem'
								key={item}
								className={`${
									filter === item
										? 'bg-indigo-100 text-indigo-700'
										: 'text-gray-700 hover:bg-indigo-50'
								}  px-3 py-2 text-sm cursor-pointer`}
								onClick={() => toggleFilter(item)}
							>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default DropdownFilter
