import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export class InputForm extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){ this.props.onChange(e.target.name, e.target.value); }

  render(){
    return(
      <div>
        <p>{this.props.label}</p>
        <InputMask
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          mask={this.props.mask}
        />
      </div>
    )
  }
}