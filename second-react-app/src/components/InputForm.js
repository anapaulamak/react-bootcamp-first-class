import React, { Component } from 'react';

export class InputForm extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){ this.props.onChange(e.target.value);}

  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <input
          name={this.props.name}
          value={this.props.inputValue}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}