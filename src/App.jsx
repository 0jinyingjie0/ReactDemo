import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>
//           it is {new Date().toLocaleTimeString()}
//         </h2>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:new Date(),
      isToggleOn:true,
    }
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount(){
    this.timerId=setInterval(
      ()=>this.tick(),1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    this.setState({
      data:new Date()
    })
  }
  handleClick(){
    this.setState(state=>({
      isToggleOn:!state.isToggleOn
    }))
  }
  render(){
    return (
      <div>
        <h2>
          it is {this.state.data.toLocaleTimeString()}
        </h2>

        <button onClick={this.handleClick}>
          {this.state.isToggleOn?'ON':'OFF'}
        </button>
      </div>
    )
  }
}

export default App;
