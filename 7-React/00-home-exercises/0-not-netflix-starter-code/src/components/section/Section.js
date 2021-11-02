import React from 'react';
import './Section.css';

class Section extends React.Component {
  render(){
    return (
      <section className="section-component" style={this.props.color ? { border: `5px solid ` + this.props.color } : null}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;