class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    // this.clicked = this.clicked.bind(this);
  }

  // clicked() {
  //   console.log('you clicked this');
  // }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn   
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)

// class Num extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {number: 0};
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }

//   increment() {
//     this.setState(state => ({
//       number: state.number + 1 
//     }));
//   }

//   decrement() {
//     this.setState(state => ({
//       number: state.number - 1
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.number}</h1>
//         <button onClick={this.increment}>&#8679;</button>
//         <button onClick={this.decrement}>&#8681;</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Num />,
//   document.getElementById('root')
// )


// function ActionClick() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('you clicked this link')
//   }

//   return (
//     <a href="#" onClick={handleClick}>Click</a>
//   );
// }

// ReactDOM.render(
//   <ActionClick />,
//   document.getElementById('root')
// )


// //understanding the bind method
// const c1 = {
//   x: 5,
//   y: 10
// };

// const c2 = {
//   x: 75,
//   y: 235
// };


// function printCordinates() {
//   console.log(this.x + ' ' + this.y);
// }

// const printC1Cords = printCordinates.bind(c1);
// const printC2Cords = printCordinates.bind(c2);

// printC1Cords();
// printC2Cords();

// function greeting() {
//   console.log(`Hello there!, your name is ${this.name} and your favorite food is ${this.favFood}. I'm able to know this thanks to the power of the bind() function`);
// }

// const p1 = {
//   name: 'Joan',
//   favFood: 'ceviche'
// }

// const p2 = {
//   name: 'Angel',
//   favFood: 'lomo saltado'
// }

// const greetJoan = greeting.bind(p1);
// const greetAngel = greeting.bind(p2);


// greetJoan();
// greetAngel();