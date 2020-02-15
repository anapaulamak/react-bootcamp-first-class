import React, { Component } from 'react';

export class SubmitButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <button onSubmit={this.props.onSubmit}>{this.props.buttonText}</button>
    )
  }
}