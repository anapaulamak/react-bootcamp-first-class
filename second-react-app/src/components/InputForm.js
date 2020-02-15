import React, { Component } from 'react';

export class InputForm extends Component{
  render(){
    return(
      <div>
        <label>{this.props.inputLabel}</label>
        <input value={this.props.inputLabel}></input>
      </div>
    )
  }
}