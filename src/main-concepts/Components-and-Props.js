// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Sara"/>
//             <Welcome name="Cahal"/>
//             <Welcome name="Edite"/>
//         </div>
//     );
// }

// const person = {
//     name: 'Joan',
//     age: 23
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, your name is {this.props.name} and you are {this.props.age} years old</h1>
//     }
// }

// class Profession extends React.Component {
//     render() {
//         return <h2>Welcome to your {this.props.career} career journey</h2>
//     }
// }

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>Welcome to my first app created with ReactJS</p>
                <button>{this.props.buttonText}</button>
                <p>{this.props.data.author.name} {this.props.data.author.lastName}</p>
                <p>{this.props.data.date}</p>
            </header>
        );
    }
}

const data = {
    author: {
        name: 'Joan',
        lastName: 'Gavelán'
    },
    date: '09/02/2021'
}
// const element = <Welcome name="Joan" age="23"/>
// const career = <Profession career="Front-End Developer"/>
const header = <Header title="React App" buttonText="Discover" data={data}/>


ReactDOM.render(
    header,
    document.getElementById('root')
);

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo user={props.author}/>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
// }


// function Avatar(props) {
//     return (
//         <img className="Avatar"
//         src={props.user.avatarUrl}
//         alt={props.user.name}
//         />
//     );
// }

// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//           <Avatar user={props.user}/>
//           <div className="UserInfo-name">
//             {props.user.name}
//           </div>
//         </div>
//     );  
// }


// const article = {
//     author: {
//         avatarUrl: '/KsdfJSDFje8345.jpg',
//         name: 'Joan'
//     },
//     text: 'This is a sample text',
//     date: '09/02/2021'
// }