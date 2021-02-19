import React from 'react';

const listItemColor = React.createContext('red');

function Logo() {
  return <h3>LOGO</h3>;
}

function Button() {
  return <button>Contact</button>;
}

class Header extends React.Component {
  render() {
    return (
      <listItemColor.Provider value="blue">
        <header>
          <Logo />
          <Nav />
          <Button />
        </header>   
      </listItemColor.Provider>
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

class Menu extends React.Component {
  static contextType = listItemColor;

  render() {
    return (
      <ul>
        <li style={{color: this.context}}>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
      </ul>
    );
  }
}


export default Header




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