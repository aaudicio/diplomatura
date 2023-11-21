//import React from 'react';

import '../styles/estilos_nina.css'

import '../styles/normalize.css'

const HomePage = (props) => {
    return (
        <main className="holder"> 
            <div className="homeimg">
                <img src="images/uñas apaisada.jpeg" alt="logo nina" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>bienvenidos</h2>
                    <p className="parrafo_bienvenido">Como sea que hayas llegado, te recibo con los brazos abiertos!</p>
                    <p className="parrafo_bienvenido">Esta capsula fue armada con mucho esfuerzo y amor y quiero que la disfruten tanto como yo.</p>
                    <p className="parrafo_bienvenido">En mi estética van a encontrar un lugar cómodo, donde se van a poder dedicar tiempo a ustedes.</p>  
                    <p className="parrafo_bienvenido">Vernos y sentirnos bien depende de nosotros! </p>         
                    <div className="ninago"><img src="images/nina2 sin fondo.png" width="150" alt="Capsula Nina2"/></div>
                </div>
                    
            </div>

        </main>
        
    );
}

export default HomePage;