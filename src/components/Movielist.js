import React, {Component} from 'react'
import Movie from './Movie'


class MovieList extends Component {

	render(){
		return (
			<div id="movie-list-item">
				<h2> Movie list:</h2>
				<Movie title="Titanic" year={1997} description="An plans la acest film!" />
				<Movie title="A beautifull mind" year={2004} description="Best movie ever" />
			</div>
		)
	} 
}

export default MovieList