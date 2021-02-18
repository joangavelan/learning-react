function Lightbulb(props) {
  if(!props.isOn) {
  return <i className="fas fa-lightbulb"></i>;
  }
  return <i className="far fa-lightbulb"></i>;
}

class Lighting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: false};
    //binding
    this.switch = this.switch.bind(this);
  }

  switch() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    return (
      <div>
        <Lightbulb isOn={this.state.isOn}/>
        <button onClick={this.switch}>
          {this.state.isOn ? 'Turn off' : 'Turn on'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Lighting />,
  document.getElementById('root')
)

// function WarningBanner(props) {
//   if(!props.warn) {
//     return null;
//   }
//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     //binding
//     this.toggleWarning = this.toggleWarning.bind(this);
//   }

//   toggleWarning() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning}/>
//         <button onClick={this.toggleWarning}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )

// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout</button>;
// }

// //Login logic
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isLoggedIn: false};
//     //binding
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     // let button;
//     // if(isLoggedIn) {
//     //   button = <LogoutButton onClick={this.handleLogoutClick}/>;
//     // } else {
//     //   button = <LoginButton onClick={this.handleLoginClick}/>;
//     // }

//     return (
//       <div>
//         <Greeting isLoggedIn={this.state.isLoggedIn}/>
//         {/* {button} */}
//         {isLoggedIn
//           ? <LogoutButton onClick={this.handleLogoutClick}/>
//           : <LoginButton onClick={this.handleLoginClick}/>
//         }
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// )

// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isLoggedIn: false};
//     this.changeLog = this.changeLog.bind(this);
//   }

//   changeLog() {
//     this.setState(state => ({
//       isLoggedIn: !state.isLoggedIn
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <Greeting isLoggedIn={this.state.isLoggedIn}/>
//         <button onClick={this.changeLog}>
//           {this.state.isLoggedIn ? 'Logout' : 'Login'}
//         </button>
//       </div>      
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// )


// const messages = ['React', 'Re: React', 'Re:Re: React'];

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       {unreadMessages.length > 0 && //here the && percent would be read as "then render this..." (if evaluated to true)
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//       }
//     </div>  
//   );
// }

// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// )