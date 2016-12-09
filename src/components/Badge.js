import React, {Component} from 'react';

class Badge extends Component{
  constructor() {
    super();
    // this.state = {
    //   currentBadge: this.props.currentBadge,
    // }
  }
  render() {
    const imageStyle = {
      height: 'auto',
      width: 'auto',
      maxWidth: '200px',
      maxHeight: '200px',
    }
    
    const localStorageRef = localStorage.getItem('badge');
    const ourBadge = JSON.parse(localStorageRef);

    return(
      <div>
        <h1>{ourBadge.name}</h1>
        <img style={imageStyle} src={ourBadge.imageUrl}></img>
        <h3>{ourBadge.description}</h3>
      </div>

    );
  }
}

export default Badge;
