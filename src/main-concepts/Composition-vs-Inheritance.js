function MetaData(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <span>{props.author}</span>
    </div>
  )
} 

function BlogPost(props) {
  return (
    <div>
      <MetaData 
        title={props.title}
        author={props.author}
      />
      {props.children}  
    </div>
  );
}

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Latest Articles</h1>
        {/* Blog post */}
        <BlogPost 
          title="Installation"
          author="David Wilson"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, odio nec semper varius, elit nisi tristique magna, sit amet scelerisque erat tortor maximus justo. </p>
        </BlogPost>
        {/* Blog post */}
        <BlogPost 
          title="State & Lifecycle"
          author="Leyla Adams"
        >
          <p>Duis malesuada, diam quis malesuada elementum, mi arcu rhoncus ex, a iaculis orci nunc hendrerit neque. Morbi fringilla, lacus ac porttitor dignissim, magna lorem volutpat dui. </p>
        </BlogPost>
        {/* Blog post */}
        <BlogPost 
          title="Hooks"
          author="Sofía Miller"
        >
          <p>Donec lobortis dui leo, in molestie ex mattis tincidunt. Praesent feugiat lectus tempus faucibus fringilla. Etiam enim lectus, laoreet eu ullamcorper at, pellentesque eget risus.</p>
        </BlogPost>
      </div>
    );
  }
}

ReactDOM.render(
  <Blog />,
  document.getElementById('root')
)

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//       {props.children}
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog 
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!"
//     />
//   );
// }

// class SignUpDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {login: ''};
//     //binding
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSignUp = this.handleSignUp.bind(this);
//   }

//   handleChange(e) {
//     this.setState({login: e.target.value});
//   }

//   handleSignUp() {
//     alert(`Welcome abroad, ${this.state.login}!`)
//   }

//   render() {
//     return (
//       <Dialog title="Mars Exploration Program"
//               message="How we should refer to you?">
//         <input value={this.state.login}
//                 onChange={this.handleChange}/>
//         <button onClick={this.handleSignUp}>
//           Sign Me Up!
//         </button>
//       </Dialog>
//     );
//   }
// }

// ReactDOM.render(
//   <SignUpDialog />,
//   document.getElementById('root')
// )