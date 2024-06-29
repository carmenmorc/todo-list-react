import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My To-Do List</h1>
			<ul>
				<li>
					<input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue}
						onKeyDown={(e) => {if(e.key === "Enter"){setTodos(todos.concat(inputValue)); setInputValue("");}}}
						placeholder="What do you need to do?"
					></input>
				</li>
				{todos.map((todo, index) => (
					<li key={index}>{todo} 
					<button>HOLLAAAAAA</button>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks left</div>
		</div>
	);
};

export default Home;
