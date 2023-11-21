//import React from 'react';

const QuienSoyPage = (props) => {
    return (
        <div>
            <main>
                <h2 className="yoYaniNina"> <i class="fa-regular fa-heart" style="color: #530e2c;"></i> Soy... Yani... Nina...</h2>
                <div className="infoyFoto">
                    <div class="fotoYani">
                        <img src="/images/Yani.jpeg" width="170" alt="Yani" />
                    </div>
                    <div className="breveInfo">
                        <p>
                            Todos me conocen como Yani, Nina... y me dedico a esto hace muchos
                            años.
                        </p>
                        <p>
                            Tengo dos hijos que son la energía de mi vida que me impulsan a
                            superarme día a día.
                        </p>
                        <p>
                            Trato de darles a mis clientes el mejor servicio, lo mejor de mi.. y
                            soy fiel creyente que si lo haces todo con amor, nada puede salir
                            mal.
                        </p>
                        <p>En este espacio van a poder ver de que trata mi capsula, espero que les guste y saquen turno rapido que se llenaaa! </p>
                    </div>
                    <div className="fotolocal">
                        <img src="/images/local_frente.jpeg" width="170" alt="Yani" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default QuienSoyPage;