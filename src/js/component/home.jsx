import React, { useState } from "react";

const Home = () => {
	const people = [
		{ id: 1, name: "Peter", age: 32, country: "MX" },
		{ id: 2, name: "Maria", age: 15, country: "CR" },
		{ id: 3, name: "Paula", age: 53, country: "CO" },
		{ id: 4, name: "Cristina", age: 48, country: "CR" },
		{ id: 5, name: "James", age: 14, country: "PE" },
		{ id: 6, name: "Clara", age: 19, country: "CO" },
		{ id: 7, name: "Stuart", age: 29, country: "CR" },
		{ id: 8, name: "Miriam", age: 11, country: "UY" },
	];

	const [gente, setGente] = useState(people);

	const myFunc = () => {
		let newGente = gente.filter(
			(item) => item.country === "CO"
		); /*newGente es un 
		arreglo que almacena todos los objetos con country CO de gente*/
		setGente(newGente);
	};

	return (
		<div>
			<h1 className="text-center mt-5">Hola</h1>
			{gente.map((item, index) => (
				<div key={index}>
					<p>{`${item.name} es de ${item.country}`}</p>
				</div>
			))}
			<button onClick={() => myFunc()}>Solo los de CO</button>
		</div>
	);
};

export default Home;
