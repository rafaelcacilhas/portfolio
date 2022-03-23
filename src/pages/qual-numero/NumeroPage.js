
import '../../assets/css/main.css';
import React            from 'react';
import imagemIntro      from "./img/home-pc.png";

import imagemJogo       from "./img/jogo.png";

const ForumPage = () => {


    return(


        <div id="wrapper" className="fade-in">


                <div id="main">

                    <article className="post featured">
                    <div>

                        <header className='major'>
                            <h2>Qual o número </h2>
                            <p>Pequeno projeto feito com HTML, CSS e Javascript, sem nenhum framework. O objetivo
                                é adivinhar qual número, entre 1 e 300, foi sorteado. O sorteio do número é 
                                requisitado de uma API pública; Caso haja algum erro com a requisição o código do erro 
                                será mostrado de vermelho, como demonstrado nas imagens abaixo.

                                O projeto pode ser visto <a target="blank" href="http://loutish-slave.surge.sh">aqui </a> 
                            </p>
                        </header>

                        <img src={imagemIntro} alt="Imagem do desafio de adivinhar o numero"  className='image main' ></img>

                        <div>

                        <img width="20%" src={imagemJogo}   alt="Imagem tela principal"       className='image main' ></img>


                        </div>

                        <ul className="actions special">
                            <li>
                                <a href="" className="button large">
                                    Código fonte (em breve)
                                </a>
                            </li>
                        </ul>
                    </div>

                    </article>



                </div>



        </div>

        
    )
}


export default ForumPage