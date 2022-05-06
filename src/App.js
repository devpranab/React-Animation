import { Component } from 'react';
import {Transition} from 'react-transition-group';
import './App.css';


class App extends Component{
  state = {
       show: true
  }
  render() {
    // const style = {
    //   //display: this.state.show ? 'block' : 'none',
    //   background: 'black',
    //   color: 'white'
    // }

    //entering
    //entered
    //exiting
    //exited

    return (
      <div className='App'>
        <button onClick={() => !this.setState({show: !this.state.show})}>Toggle</button>

      <Transition in={this.state.show} timeout={2000}>
          {
            //mode => (<p>{mode}</p>)
            mode => (
              <div style={{
                background: 'black',
                color: 'white',
                transition: 'opacity 2s ease-out',
                opacity: mode === 'exited' ? 0 : 1
              }}>
              <h2>I am some text!</h2>
            </div>
            )
          }
      </Transition>
        
      </div>
    );
  }
}

export default App;
