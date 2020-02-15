import React, { Component } from 'react';

export class InputForm extends Component{
  render(){
    return(
      <div>
        <p>{this.props.inputLabelText}</p>
        <input value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}