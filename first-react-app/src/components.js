import React, { Component } from 'react';
import { products } from './mock';

export class FilterableProductTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      isChecked: false,
    }
  }
  render(){
    console.log('prods', products)
    return(
      <div>
        <SearchBar />
        <ProductTable products={products}/>
      </div>
    )
  }
}

export class SearchBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="Seach..."></input>
        <p>
          <input type="checkbox"></input>
          Only show products in stock
        </p>
      </div>
    )
  }
}

const ProductRow = (props) => {
  const product = props.product
  return(
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const ProductCategoryRow = (props) => {
  const product = props.product
  return(
    <tr>
      <th colSpan='2'>{product.category}</th>
    </tr>
  )
}

export class ProductTable extends Component{
  render(){
    const rows = [];
    var lastCategory = null;

    this.props.products.forEach(product => { 
      if(product.category !== lastCategory) {
        rows.push(<ProductCategoryRow product={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow product={product} key={product.name}/>)
      lastCategory = product.category;
    })

    return(
      <table>
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
}

