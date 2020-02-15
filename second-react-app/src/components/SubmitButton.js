import React, { Component } from 'react';

export class SubmitButton extends Component{
  render(){
    return(
      <button onSubmit={this.props.onSubmit}>{this.props.buttonText}</button>
    )
  }
}