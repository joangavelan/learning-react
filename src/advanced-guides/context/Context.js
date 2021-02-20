import React from 'react';

const Theme = React.createContext('red');

function Logo() {
  return <h3>LOGO</h3>;
}

function Button() {
  return <button>Contact</button>;
}

class Header extends React.Component {
  render() {
    return (
      <Theme.Provider value="orange">
        <header>
          <Logo />
          <Nav />
          <Theme.Consumer>
            {value => {
              return (
                <button style={{color: value}}>Contact</button>
              );
            }}
          </Theme.Consumer>
        </header>   
      </Theme.Provider>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Menu />
      </nav>
    );
  }
}

function Menu() {
  return (
    <Theme.Consumer>
      {value => (
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li style={{color: value}}>Item3</li>
          <li>Item4</li>
        </ul>
      )}
    </Theme.Consumer>
  );
}

export default Header;


// class Menu extends React.Component {
//   //Catch the context
//   static contextType = Theme;

//   render() {
//     return (
//       <ul>
//         <li style={{color: this.context}}>Item1</li>
//         <li>Item2</li>
//         <li>Item3</li>
//         <li>Item4</li>
//       </ul>
//     );
//   }
// }

//Consuming multiple contexts
// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <UserContext.Consumer>
//           {user => (
//             <ProfilePage user={user} theme={theme} />
//           )}
//         </UserContext.Consumer>
//       )}
//     </ThemeContext.Consumer>
//   );
// }


// const ThemeContext = React.createContext('light');

// class App extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Toolbar() {
//   return (
//     <ThemedButton/>
//   );
// }

// class ThemedButton extends React.Component {
//   // Assign a contextType to read the current theme context.
//   static contextType = ThemeContext;

//   render() {
//     return <Button theme={this.context}/>;
//   };
// }

// //passing down components
// function Page(props) {
//   const user = props.user;
//   const content = <Feed user={user} />;
//   const topBar = (
//     <NavigationBar>
//       <Link href={user.permalink}>
//         <Avatar user={user} size={props.avatarSize} />
//       </Link>
//     </NavigationBar>
//   );
//   return (
//     <PageLayout
//       topBar={topBar}
//       content={content}
//     />
//   );
// }