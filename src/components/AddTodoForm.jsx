import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch()
	
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addTodo({
				title: value,
			})
		)
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				maxLength={120}
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Add new todo
			</button>
		</form>
	);
};

export default AddTodoForm;