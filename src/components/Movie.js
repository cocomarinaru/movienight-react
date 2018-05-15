import React, {Component} from 'react'
import './movie.css'

class Movie extends Component {

	render(){
		return (
			<div className="movie-item">
				<h3>{this.props.title} - ({this.props.year})</h3>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

export default Movie