function Header(props) {
  return <header>Header</header>;
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  {id: 3, title: 'State & Lifecycle', content: 'This page introduces the concept of state and lifecycle.'},
  {id: 4, title: 'Hooks', content: 'They let you use state and other React features without writing a class.'},
  {id: 5, title: 'Create a React App', content: 'Use an integrated toolchain for the best user and developer experience.'}
];

function Sidebar(props) {
  const posts = props.posts;
  const postItems = posts.map(post => 
    <li key={post.id}>{post.title}</li>  
  );

  return (
    <aside>
      <h2>Sidebar</h2>
      <ul>
        {postItems}
      </ul>
    </aside>
  );
}

function Main(props) {
  const posts = props.posts;
  const postItems = posts.map(post => 
    <li key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </li>
  );

  return (
    <main>
      <h2>Last Articles</h2>
      <ul>
        {postItems}
      </ul>
    </main>
  );
}

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <Header />
        <div className="content">
          <Sidebar posts={this.props.posts}/>
          <Main posts={this.props.posts}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
)

// const doubled = numbers.map(num => num * 2);
// const listItems = numbers.map(number =>
//   <li>{number}</li>
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => 
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberList numbers={numbers}/>,
//   document.getElementById('root')
// )