import React, { Component } from 'react'
import Presentation from './Presentation'
import Projects from './Projects'
import Footer from '../components/Footer'
import AboutMe from './AboutMe'
import Contact from './Contact'
import './Home.css';

class Home extends Component {

render() {
	return (
		<div className="home">
			<Presentation />
			<Projects />
			<AboutMe />
			<Contact />
			<Footer />
	</div>	
	)
}}

export default Home;