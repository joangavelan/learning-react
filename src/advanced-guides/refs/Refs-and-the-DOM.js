import React from 'react'

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

export default AutoFocusTextInput;


// class RefsDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.focusOnFirstInput = this.focusOnFirstInput.bind(this);
//     // callback ref
//     this.cbRef = null;
//     this.setCbRef = elem => this.cbRef = elem; //caveat, it will get called twice during updates
//   }

//   componentDidMount() {
//     // this.inputRef.current.focus();
//     if(this.cbRef) this.cbRef.focus();
//   }

//   focusOnFirstInput() {
//     this.inputRef.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input 
//           ref={this.inputRef}
//           type="text"/>
//         <input 
//           ref={this.setCbRef}
//           type="text"/>
//         <button 
//           onClick={this.focusOnFirstInput}>
//           Click
//         </button> 
//       </div>
//     )
//   }
// }

// export default RefsDemo