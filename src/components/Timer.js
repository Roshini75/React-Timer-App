import React from 'react';
import './Timer.css'
class Timer extends React.Component {
    constructor(props) {
      super(props);
      console.log("timer prop"+ this.props.id);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div class="textAlign">
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }

  export default Timer;
  
