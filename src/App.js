import React, {useState} from 'react';
import "./styles.css";
import { tsPropertySignature } from '@babel/types';

//import TodoForm from "./components/TodoComponents/TodoForm"; 
//import TodoList from "./components/TodoComponents/TodoList"; 

//import Todo from "./components/TodoComponents/Todo"; 

// data [
//   {
//       task: 'Organize Garage',
//       id: 1528817077286,
//       completed: false 
//   },
//   {
//       task: 'Bake Cookies',
//       id: 1528817084358,
//       completed: false   
//   }
// ]; 

// const [data, setDate] = useState({}); 
// useEffect (()=> {
//   axios.get()
//   .then(res => {
//     setData(res.data); 
//   }); 
// }, []); 

// return (
//   <div className = "App">
//     <h1 className = "Header">Todo List: MVP</h1>
//     <div className ="containter">
//       {data.results && data.results.map(data => (
//         <Todo data = {data}
//         />
//       ))}
//     </div>

//   </div>

//   ) 

function App(){

const [text, setText] =useState("");
const [tasks, setTasks] = useState([]); 

console.log(tasks);

let demoTasks = ["wash a car", "use some lotion"];
return (
<div>
  <h2>Todo List: MVP</h2>
  <div>
    

    {tasks.map(t => 

      <p className = {`${t.completed ? "completed" :""}`}
      key={t.id} onClick={() => setTasks(tasks.map(item => {
               if (item.id === t.id){
                 return {
                    ...item, 
                    
                   completed: !item.completed
                 
                   }
                } else {
        
                  return item
        
                }
        
                  
                }))} >{t.task}
      </p>

    )}

  </div>

  <form>
    <label>
      <input type ="text" placeholder ="...todo"
      onChange = {(event)=> setText(event.target.value)} />
    </label>

  </form>
    <div> 
      <button className ="Add" onClick={() => setTasks([...tasks, {task: text, id: Date.now(), completed: false}])} >Add todo</button>
      <button className ="clear" onClick={() => setTasks(tasks.filter(item => !item.completed))} >Clear Completed</button>
    </div>
</div>


); 
}
//class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



//     constructor(){
//       super()
//       this.state ={
//         tasks: data
//       }
//     }

//   toggleItem = (event, itemId) => {
//     event.preventDefault()

//     this.setState({
//       tasks: this.state.tasks.map(item => {
//         if (item.id === itemId){
//           return {
//             ...item, 
            
//             completed: !item.completed
            
//           }
//         } else {

//           return item

//         }

          
//         })
    
//     })

//   }

//   cleartask = (event) => {
//     event.preventDefault()

//     this.setState ({
//       tasks: this.state.tasks.filter(item => {
//         return !item.task

//       })
//     })
//   }

//   addTask = (event, taskName) => {
//     const newTask = {
//       id: Date.now(),
//       name: taskName,
//       task: false
//     }

//     this.setState({
//       tasks: [newTask, ...this.state.tasks]
//     })
//   }

//   render() {
//     return (
//       <div className = "App">
//         <div className ="header">
//         <h2>Todo List: MVP </h2>
//         <TodoForm addTask ={this.addTask} />

//         </div>

//         <div className ="Task-list">
//           {this.state.tasks.map(task => (
//             <task
//             key ={task.id}
//             task ={task}
//             onClick ={(e)=> this.toggleItem(e, task.id)}
//             />

//           ))}

//           <button className = "clear-btn" onClick ={this.cleartask}>
//             clear Completed
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

export default App;
