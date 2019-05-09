import React, { useState } from 'react';

const TasksContext = React.createContext();

const TasksConsumer = TasksContext.Consumer;

class TasksProvider extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			tasks: [],
			addTask: this.addTask
		}
	}
   
	addTask = task => {
		let newtask = {...task};
		this.setState(pstate => ({
			tasks: [ ...pstate.tasks, task ] 
		}));  
	};
 	

	render() { 
		return (
				<TasksContext.Provider value={this.state}>
					{this.props.children}
				</TasksContext.Provider> 
			);
	}
}



export { 
			TasksContext, 
			TasksProvider, 
			TasksConsumer
		};