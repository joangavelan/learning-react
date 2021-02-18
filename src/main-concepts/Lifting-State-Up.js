function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleTempChange(e.target.value, this.props.scale);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter a temperature in {this.props.scale}</legend>
        <input
          value={this.props.temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'Celsius'};
    //binding
    this.handleTempChange = this.handleTempChange.bind(this);
  }

  handleTempChange(temperature, scale) {
    this.setState({temperature, scale});
  }

  render() {
    const scale = this.state.scale; 
    const temperature = this.state.temperature;
    const celsius = scale === 'Fahrenheit' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'Celsius' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="Celsius"
          temperature={celsius}
          handleTempChange={this.handleTempChange}
        />
        <TemperatureInput
          scale="Fahrenheit"
          temperature={fahrenheit}
          handleTempChange={this.handleTempChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)