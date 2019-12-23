import React, { Component } from 'react'
import MyName from '../components/MyName'
import ScrambleText from '../components/ScrambleText'
import './Presentation.css';

class Presentation extends Component {
render() {
	return (
	<div className="presentation">
			<MyName />
			<ScrambleText />
	</div>	
	)
}}

export default Presentation;