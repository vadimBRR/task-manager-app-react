import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TodoTypes = {
	id: string
	content: string
	completed: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

interface TodoState {
	todos: TodoTypes[]
	filter: FilterType
	setFilter: (filter: FilterType) => void
	addTodo: (text: string) => void
	toggleCompleted: (id: string) => void
	removeTodo: (id: string) => void
	updateTodo: (id: string, editedText: string) => void
}

const useTodoStore = create<TodoState>()(
	persist(
		(set, get) => ({
			todos: [{ id: '1749144331786', content: 'Item1', completed: false }],
			filter: 'all',
			setFilter: (filter: FilterType) => set({ filter }),

			addTodo: (text: string) =>
				set(old => ({
					todos: [
						{ id: crypto.randomUUID(), content: text, completed: false },
						...old.todos,
					],
				})),
			toggleCompleted: (id: string) =>
				set(old => ({
					todos: old.todos.map(todo =>
						todo.id === id ? { ...todo, completed: !todo.completed } : todo
					),
				})),

			removeTodo: (id: string) =>
				set(old => ({
					todos: old.todos.filter(todo => todo.id !== id),
				})),
			updateTodo: (id: string, editedText: string) =>
				set(old => ({
					todos: old.todos.map(todo =>
						todo.id === id ? { ...todo, content: editedText } : todo
					),
				})),
		}),
		{ name: 'todo-storage' }
	)
)

export const useTodos = () => useTodoStore(state => state.todos)
export const useTodo = () => useTodoStore(state => state)
