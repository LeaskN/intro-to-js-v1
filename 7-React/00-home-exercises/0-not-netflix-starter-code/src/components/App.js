import React from 'react';
import '../App.css';
import { getPopularMovies } from '../tmdbRequests';
import Section from './section/Section';
import MovieList from './MovieList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    getPopularMovies()
      .then(res => {
        this.setState({ movies: res.results})
      })
  }

  render(){
    return (
        <div className="app-container">
          <header>
            Not-Netflix
          </header>
          <main>
            <nav>Nav</nav>
            <Section color="teal">
              <MovieList movies={this.state.movies} />
            </Section>
            <aside>Aside</aside>
          </main>
          <footer>
            Produced By Tefe
          </footer>
        </div>
      );
    }
}

export default App;
