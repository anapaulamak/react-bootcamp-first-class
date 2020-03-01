import React, { Component } from 'react';

export class SubmitButton extends Component{
  render(){
    return(
      <input type='submit' value={this.props.buttonText}/>
    )
  }
}