import React from 'react';
import { CardList } from './components/cardlist/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends React.Component {
	
  	constructor(){
    	super();

    	this.state = {
    		monsters: [],
			searchField: '', 
		};	
    }
		
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ monsters: users }));
	}

	handleChange = e => {
		this.setState({ searchField: e.target.value})
	};

	render(){
		const { monsters, searchField} = this.state; 

		const filteredMonsters = monsters.filter( monster => 
			monster.name.toLowerCase().includes(searchField.toLowerCase())
			);

			return (
			<div className='App'>
				<h1> Kitty Rolodex</h1>
				
				<SearchBox 
					placeholder= 'search kitties'
					handleChange= { this.handleChange}
				/>
				<CardList 
					monsters = {filteredMonsters} 
				/>   
    		</div>
  		);
	}
}
 
export default App;
