import React,{ Component } from "react";
export  default class App extends Component{
constructor(props){
    super(props);
    this.state={
        todos:[
            { name: "CSS", completed: true },
            { name: "JavaScript", completed: true },
            { name: "Learn React", completed: false },
            { name: "Learn mongoDB", completed: false },
            { name: "Learn Node JS", completed: false },   
        ]
    }
}
handleChange(i){
    const newList = this.state.todos.map((item, index) => {
        if(index === i) return {...item, completed: !this.state.todos[index].completed}
        else return item
    })
    this.setState({todos: newList})
}

render(){
    return <div>{this.state.todos.map((item,index)=>{
return <div style={{textDecoration: item.completed ? "line-through" : "none"}} key={index} onClick={() => {this.handleChange(index)}}>
{item.name} {item.completed ? "v" : "x"}
</div>
    })}
    </div>
       
    

    
}
}

