import React from 'react'

const HOC  = (Component, data) => {
  console.log(data);
  
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {count: data};
    }

    handleClick = () => {
      this.setState((state) => ({
        count: state.count + 1
      }))
    }
    
    render() {
      return (
        <React.Fragment>
          <Component 
            count={this.state.count} 
            onClick={this.handleClick}/>
        </React.Fragment>
      );
    }
  }
}

export default HOC