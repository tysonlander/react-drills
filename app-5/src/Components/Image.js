import React, {Component} from 'react';

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.pageNotFound} alt="404 error you can't find this image"/>

      </div>
    )
  }
}