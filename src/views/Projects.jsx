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
          <img src='https://i.ibb.co/b1nt3k3/todolist.png' className="mockupsright"></img>
          <h3>To do list</h3>
          <p>To do list, es una checklist de tareas minimalista, creada para mantener tu mente y tus responsabilidades en orden.

Las tecnologías utilizadas en este proyecto fue React, Redux, Bootstrap.</p>
          <Buttons name='Demo' btnClass= 'btn-0'/>
				  <Buttons name='Repositorio' btnClass= 'btn-0'/>
        </div>

        <div className="mockup2">
            <img src='https://i.ibb.co/YkLMm6L/migramemockup.png' className="mockupsleft"></img>
            <h3>Migra.me!</h3>
            <p>Migra.me es una red social creada con la finalidad de generar una comunidad de inmigrantes en Chile donde puedan comunicarse, compartir y ayudarse entre ellos. 

Las tecnologías utilizadas en este proyecto, fueron; Javascript, HTML5, CSS, Git y GitHub. </p>
            <Buttons name='Demo' btnClass= 'btn-0'/>
				    <Buttons name='Repositorio' btnClass= 'btn-0'/>
        </div>

        <div className="mockup3">
          <img src='https://i.ibb.co/sv8RW3C/wikipoke.png' className="mockupsright"></img>
          <h3>Wiki Pokémon</h3>
          <p>Wiki pokémon es una aplicación de escritorio para todos los nostálgicos que juegan Pokémon GO, en la cual podrás filtrar a los pokemones por tipo, nombre y kilómetros recorridos para la eclosión de huevos.

Esta fue mi primera aplicación con data, a través de una API.</p>
          <Buttons name='Demo' btnClass='btn-0'/>
				  <Buttons name='Repositorio' btnClass='btn-0'/>
        </div>

     </div>
     </div>
    )
  }
}

export default Projects;