import React from 'react'
import './Projects.css'
import Buttons from '../components/Buttons'

class Projects extends React.Component {
  render() {
    return (
      <div>
      <h1>Proyectos</h1>
      <div class="projects">
        
        <div className="mockup1">
          <img src='https://firmbee.com/freebies/files/201509/screenshots/iphone-926890_1443513337663.png' className="mockupsleft"></img>
          <h3>Migra.me!</h3>
          <p>Migra.me es una aplicación web destinada a usuarios mayores de edad, que sean o no inmigrantes, ya que la misma se basa en la ayuda que se le puede dar a esa minoría desde cualquier ámbito. El enfoque hacia inmigrantes, es poder buscar información de interés sobre trámites en el país al que llegan, datos de alojamiento, arriendo, trabajo, cultural, etc. </p>
          <Buttons name='Demo' btnClass= 'btn'/>
				  <Buttons name='Repositorio' btnClass= 'btn'/>
        </div>

        <div className="mockup2">
            <img src='https://firmbee.com/freebies/files/201509/screenshots/iphone-926890_1443513337663.png' className="mockupsrigth"></img>
            <h3>Migra.me!</h3>
            <p>Migra.me es una aplicación web destinada a usuarios mayores de edad, que sean o no inmigrantes, ya que la misma se basa en la ayuda que se le puede dar a esa minoría desde cualquier ámbito. El enfoque hacia inmigrantes, es poder buscar información de interés sobre trámites en el país al que llegan, datos de alojamiento, arriendo, trabajo, cultural, etc. </p>
            <Buttons name='Demo' btnClass= 'btn'/>
				    <Buttons name='Repositorio' btnClass= 'btn'/>
        </div>

        <div className="mockup1">
          <img src='https://firmbee.com/freebies/files/201509/screenshots/iphone-926890_1443513337663.png' className="mockupsleft"></img>
          <h3>Migra.me!</h3>
          <p>Migra.me es una aplicación web destinada a usuarios mayores de edad, que sean o no inmigrantes, ya que la misma se basa en la ayuda que se le puede dar a esa minoría desde cualquier ámbito. El enfoque hacia inmigrantes, es poder buscar información de interés sobre trámites en el país al que llegan, datos de alojamiento, arriendo, trabajo, cultural, etc. </p>
          <Buttons name='Demo' btnClass='btn'/>
				  <Buttons name='Repositorio' btnClass='btn'/>
        </div>

     </div>
     </div>
    )
  }
}

export default Projects;