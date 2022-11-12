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
		setValue('');
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<input
				type='text'
				className='form-control mb-3 mr-sm-2'
				placeholder='Add todo...'
				maxLength={500}
				value={value}
				onChange={(event) => setValue(event.target.value)}
				required
			></input>
			
			<button type='submit' className='btn btn-primary'>
				Add new todo
			</button>
		</form>
	);
};

export default AddTodoForm;