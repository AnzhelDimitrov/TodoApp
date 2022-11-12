import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleComplete({ id: id, completed: !completed }))
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }))
	}
	return (
		<li className={`list-group-item`} style={{backgroundColor: completed ? '#00ff3e59' : 'inherit'}}>
			<div className='d-flex justify-content-between'>
				<span className='todo-text d-flex align-items-center'>
					<input 
						type='checkbox' 
						className='mx-2' 
						checked={completed}
						onChange={handleCompleteClick}
					>
					</input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger mx-2'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;