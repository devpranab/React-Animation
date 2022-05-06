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

    const animateTime = {
      enter: 100,
      exit: 500
    }

    return (
      <div className='App'>
        <button onClick={() => !this.setState({show: !this.state.show})}>Toggle</button>

      <Transition in={this.state.show} timeout={animateTime} mountOnEnter unmountOnExit onEnter={() => console.log('onEnter')} onEntering={() => console.log('onEntering')} onEntereed={() => console.log('onEntered')} onExit={() => console.log('onExit')} onExited={() => console.log('onExited')} onExiting={() => console.log('onExiting')}>
          {
            //mode => (<p>{mode}</p>)
            mode => (
              <div style={{
                background: 'black',
                color: 'white',
                transition: 'opacity 1s ease-out',
                opacity: mode === 'exited' || mode === 'entering' ? 0 : 1
              }}>
              <h2>I am some text!</h2>
            </div>
            )
          }
      </Transition>

      <h2>I am outside transition!</h2>
        
      </div>
    );
  }
}

export default App;
