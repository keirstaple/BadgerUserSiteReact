import React from 'react';


const Loading = (props) => {
  return(
    <div id="loading-div" className="animated pulse infinite">
      <h3 id="loading-content">
        <img id="loading-image"  src={require('../img/badgey.png')} alt="badger logo"/>
          Loading...
      </h3>
    </div>

  )
}




export default Loading;
