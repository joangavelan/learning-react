class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <div>
        <h1>Hello, world</h1>
        <FormattedDate date={this.state.date}/> 
    </div>
    );
  }
}

class FormattedDate extends React.Component {
  render() {
    return (
      <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {counter: 1};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => {
//       this.tick();
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     // this.setState({num: this.state.num + 1});
//     this.setState((state, props) => ({
//       counter: state.counter + props.increment
//     }));
//   }

//   render() {
//     return (
//       <h1>{this.state.counter}</h1>
//     );
//   }
// }

// ReactDOM.render(
//   <Counter increment={1}/>,
//   document.getElementById('root')
// )



// function tick() {
//   Clock.setState(this.state + 1, 1000)
// }

// tick();

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()}/>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);