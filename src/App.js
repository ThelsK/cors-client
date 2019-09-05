import React from "react"
import request from "superagent"
import "./App.css"

class App extends React.Component {

  componentDidMount() {
    request("http://localhost:4000/test")
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

export default App