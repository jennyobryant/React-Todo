import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"; 
import TodoList from "./components/TodoComponents/TodoList"; 

import Todo from "./components/TodoComponents/Todo"; 

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super()
      this.state ={
        tasks: data
      }
    }

  toggleItem = (event, itemId) => {
    event.preventDefault()

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId){
          return {
            ...item, 
            
            task: !item.task
            
          }
        } else {

          return item

        }

          
        })
    
    })

  }

  cleartask = (event) => {
    event.preventDefault()

    this.setState ({
      tasks: this.state.tasks.filter(item => {
        return !item.task

      })
    })
  }

  addTask = (event, taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      task: false
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }

  render() {
    return (
      <div className = "App">
        <div className ="header">
        <h2>Todo List: MVP </h2>
        <TodoForm addTask ={this.addTask} />

        </div>

        <div className ="Task-list">
          {this.state.tasks.map(task => (
            <task
            key ={task.id}
            task ={task}
            onClick ={(e)=> this.toggleItem(e, task.id)}
            />

          ))}

          <button className = "clear-btn" onClick ={this.cleartask}>
            clear Completed
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
