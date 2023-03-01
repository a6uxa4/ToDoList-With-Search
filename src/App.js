import { useState } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState([])
	const [value, setValue] = useState('')
	const [valueSearch, setValueSearch] = useState('')

	function handleClick() {
		if (!value.trim()) return null
		setData([...data, { title: value, id: Math.random().toString() }])
		setValue('')
	}

	const filteredTodos = data.filter((todo) =>
		todo.title.toLowerCase().includes(valueSearch.toLowerCase()),
	)

	function handleDelete(id) {
		setData(data.filter((item) => item.id !== id))
	}
	return (
		<div className='Container'>
			<input
				className='InputSearch'
				type='search'
				onChange={(e) => setValueSearch(e.target.value)}
			/>
			<div className='Header'>
				<input
					className='InputAdd'
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button className='ButtonAdd' onClick={() => handleClick()}>
					Add
				</button>
			</div>
			<div>
				{filteredTodos.map((item) => {
					return (
						<div key={item.id} className='List'>
							<span>{item.title}</span>
							<button
								onClick={() => handleDelete(item.id)}
								className='DeleteButton'>
								Delete
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default App
