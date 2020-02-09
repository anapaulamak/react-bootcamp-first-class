import React, { Component } from 'react';
import { PRODUCTS } from './mock';
import './components.styled.css';

export class FilterableProductTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(filterText){
    this.setState({
      filterText: filterText
    })
  }

  handleCheck(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render(){
    return(
      <div className="Container">
        <h1>Products List</h1>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChange={this.handleChange}
          onCheck={this.handleCheck}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          />
      </div>
    )
  }
}

export class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(e){ this.props.onChange(e.target.value); }
  handleCheck(e){ this.props.onCheck(e.target.checked); }

  render(){
    
    return(
      <form className="SearchBar">
        <input
          className="InputSearch"
          type="text"
          placeholder="Seach..."
          value={this.props.filterText}
          onChange={this.handleChange}/>
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleCheck}/>
          Only show products in stock
        </p>
      </form>
    )
  }
}

const ProductTable = (props) =>{
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if(product.name.indexOf(filterText) === -1){
      return;
    }
    if(inStockOnly && !product.stocked){
      return;
    }
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          product={product}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return(
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const ProductRow = (props) => {
  const product = props.product;
  return(
    <tr className="ProductRow">
      {!product.stocked ? 
        <td style={{color: '#fd7979'}}>{product.name}</td> :
        <td>{product.name}</td>
      }
      <td>{product.price}</td>
    </tr>
  )
}

const ProductCategoryRow = (props) => {
  const product = props.product;
  return(
    <tr className="ProductCategoryRow">
      <th colSpan='2'>{product.category}</th>
    </tr>
  )
}

