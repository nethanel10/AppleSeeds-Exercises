import React from 'react'
import "./App.css"

class App extends React.Component {

  constructor() {
    super();
    this.state = {value: undefined};
  }

  handleChange(e) {
    switch(e.target.name) {
      case "sec":
        this.setState({value: e.target.value})
        break
      case "min":
        this.setState({value: e.target.value * 60})
        break
      case "hour":
        this.setState({value: e.target.value * 3600})
        break
    }
  }

  getValue(name) {
    switch(name) {
      case "sec":
        return this.state.value
      case "min":
        return (this.state.value / 60)
      case "hour":
        return (this.state.value / 3600)
    }
  }
  
  render() {
    return (
      <div className="time">
        <h1>Time Converter</h1>
        <input placeholder='seconds' type="number" name="sec" onChange={(e) => {this.handleChange(e)}} value={this.getValue("sec")} />
        <input placeholder='minutes' type="number" name="min" onChange={(e) => {this.handleChange(e)}} value={this.getValue("min")} />
        <input placeholder='hours' type="number" name="hour" onChange={(e) => {this.handleChange(e)}} value={this.getValue("hour")} />
      </div>
    );
  }
}

export default App