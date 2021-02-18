function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">
        {props.name}
      </th>
    </tr>
  );
}

function ProductRow(props) {
  return (
    <tr>
      <td style={{color: !props.inStock ? 'red' : null}}>
        {props.name}  
      </td> 
      <td>{props.price}</td>
    </tr>
  );
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.props.handleInputsChange(name, value);
  }

  render() {
    return (
      <div>
        <input 
          name="searchText"
          value={this.props.searchText}
          onChange={this.handleChange}
          type="search" 
          placeholder="Search..."/>
        <p>
          <input 
            name="stockOnly"
            type="checkbox"
            checked={this.props.stockOnly}
            onChange={this.handleChange}/>
          <span>Only show products in stock</span>
        </p>
      </div>
    );
  }
}

class ProductsByCategory extends React.Component {
  render() {
    const products = this.props.products;
    const searchText = this.props.searchText;
    const stockOnly = this.props.stockOnly;
    const currentCategory = this.props.category;

    const rows = [];
    let category = null;
      
    products.forEach(product => {
      if(
         product.name.includes(searchText) && 
         product.category === currentCategory && 
         ((stockOnly) ? product.stocked : true)
        ) 
        {
          category = <ProductCategoryRow name={currentCategory}/>;
          rows.push(<ProductRow 
            key={product.id} 
            name={product.name} 
            price={product.price}
            inStock={product.stocked}
            stockOnly={stockOnly}/>);
        } 
    });

    return (
      <tbody>
        {category}
        {rows}
      </tbody>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const searchText = this.props.searchText;
    const stockOnly = this.props.stockOnly;
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductsByCategory
          category="Sporting Goods"
          products={products}
          searchText={searchText}
          stockOnly={stockOnly}
        />
        <ProductsByCategory
          category="Electronics"
          products={products}
          searchText={searchText}
          stockOnly={stockOnly}
        />
      </table>
    ); 
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: '' , stockOnly: false}
    //binding
    this.handleInputsChange = this.handleInputsChange.bind(this);
  }

  handleInputsChange(name, value) {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          stockOnly={this.state.stockOnly}
          handleInputsChange={this.handleInputsChange}/>
        <ProductTable 
          searchText={this.state.searchText}
          stockOnly={this.state.stockOnly}
        />
      </div>
    );
  }
}

const products = [
  {category: "Sporting Goods", id: 1, price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", id: 2, price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", id: 3, price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", id: 4, price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", id: 5, price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", id: 6, price: "$199.99", stocked: true, name: "Nexus 7"}
]; 

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('root')
)