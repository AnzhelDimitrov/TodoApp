import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTasks = () => {
	const completedTodos = useSelector((state) => 
		state.todos.filter((todo) => 
		todo.completed === true)
	);

	return (
		<h4 className='mt-3'>
			Completed tasks: {completedTodos.length} 
		</h4>
	)
};

export default CompletedTasks;