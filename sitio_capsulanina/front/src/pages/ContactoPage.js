//import React from 'react';

import '../styles/estilos_nina.css'
import '../styles/normalize.css'


const ContactoPage = (props) => {
    return (
        <main  className="contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario">
            <p>
                <label for="nombre">Nombre</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="email">Email</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="telefono">Telefono</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="mensaje">Mensaje</label>
                <textarea name=""></textarea>
            </p>
            <div class="contenedor_boton_enviar" ><input class="boton_enviar" type="submit" value="Enviar"/></div>
        </form>
      </div> 
      <div class="datos">
        <h2>También podes contactarme por:</h2>
        <ul>
            <li>Instagram: @nina.goestetica</li>
            <li>Whatsapp: 1156408174</li>
        </ul>
      </div>
    </main>
    );
}

export default ContactoPage;