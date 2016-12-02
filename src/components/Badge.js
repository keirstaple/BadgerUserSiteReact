import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Badge extends Component{
  constructor() {
    super();
    this.state = {
      badge: '',
    }
  }
  componentDidMount() {
    this.setState({
      badge: this.props.params.pushId,
    })
  }
  render() {
    const imageStyle = {
      height: 'auto',
      width: 'auto',
      maxWidth: '200px',
      maxHeight: '200px',
    }

    return(
      <div>
        <h1>{this.props.badges.name}</h1>
        <img style={imageStyle} src={this.props.badges.imageUrl}></img>
        <h3>{this.props.badges.description}</h3>
      </div>

    );
  }
}

export default Badge;
