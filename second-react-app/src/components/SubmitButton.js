import React, { Component } from 'react';

export class SubmitButton extends Component{
  render(){
    return(
      <button onClick={this.props.onClick}>{this.props.buttonText}</button>
    )
  }
}