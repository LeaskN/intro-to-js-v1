import React from 'react';

class Movie extends React.Component {

  render(){
    return (
      <div className="movie">
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Movie