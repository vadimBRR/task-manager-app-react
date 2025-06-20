import { useTodo } from '../../store/todoStore'
import Task from './Task'

const CardList = () => {
  const {todos} = useTodo();
  
  
	return (
		<div className='space-y-3'>
			{todos.map(item => (
				<Task {...item} key={item.id} />
			))}
		</div>
	)
}

export default CardList
