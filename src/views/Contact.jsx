import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    render(){
        return(
            <div className="contact">
                <form>
                <h1>Contacto</h1>
                    <input placeholder="Nombre"></input>
                    <input placeholder="Mail"></input>
                    <input placeholder="Escribe aquí"></input>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default Contact;