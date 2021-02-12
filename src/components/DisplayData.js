import React, { Component } from 'react'

export default class DisplayData extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.formData.firstName} {this.props.formData.lastName}</h3>
      </div>
    )
  }
}