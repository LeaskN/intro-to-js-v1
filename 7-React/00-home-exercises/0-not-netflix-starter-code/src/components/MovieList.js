import React from 'react';
import Movie from './Movie';
import './MovieList.css';

class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scroll: 0,
      scrolling: false,
      maxScroll: 0,
      listLength: 0
    }
    this.listEl = React.createRef();
  }

  componentDidUpdate(prevProps){
    if(prevProps.movies !== this.props.movies){
      this.setState({ 
        maxScroll: this.listEl.current.scrollWidth,  
        listLength: this.props.movies.length
      });
    }
  }

  renderMovieList(){
    return this.props.movies.map(movie => (
      <Movie key={movie.id} title={movie.title} />
    ))
  }

  handleClick = (e) => {
    // Total in viewport - .movie-list width / .movie width 
    let totalInView = Math.floor(800 / 200);

    const { scroll, maxScroll, scrolling } = this.state;
    const { className } = e.target;
    const speed = maxScroll * .25;
    
    if(className === "left-arrow" && scroll < 0 && !scrolling){
      this.setState({ scroll: this.state.scroll + speed, scrolling: true });
      setTimeout(() => this.setState({ scrolling: false}), 1000);
    } else if(className === "right-arrow" && scroll > -(maxScroll)+speed && !scrolling){
      this.setState({ scroll: this.state.scroll - speed, scrolling: true });
      setTimeout(() => this.setState({ scrolling: false}), 1000);
    }
  }

  render(){
    return (
      <div className="movie-list-container">
        <div 
          onClick={this.handleClick} 
          className="left-arrow"
        >
          <span>{'<--'}</span>
        </div>
        <div 
          onClick={this.handleClick} 
          className="right-arrow"
        >
          <span>{'-->'}</span>
        </div>
        <div 
          ref={this.listEl} 
          style={{transform: `translateX(${this.state.scroll}px)`}} 
          className="movie-list"
        >
          { this.renderMovieList() }
        </div>
      </div>
    )
  }
}

export default MovieList;