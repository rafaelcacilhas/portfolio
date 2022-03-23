import '../../assets/css/main.css';
import React        from 'react';
import imagemCel    from "./img/celular.png";
import imagemPC     from "./img/pc.png";

const BancoPage = () => {



    return(


        <div id="wrapper" className="fade-in">


                <div id="main">

                    <article className="post featured">
                    <div>

                        <header className='major'>
                            <h2>Landing Page - F4Bank </h2>
                            <p>Este projeto foi feito dia 3 de setembro e durou apenas um dia. Foi feito
                            com o objetivo de testar os princípios básicos de HTML e CSS e para tal foi 
                            feito a landing page responsiva de um banco ficcional. Na figuras abaixo é
                            possível ver como ficou o resultado para celular  e para computador; logo abaixo
                            temos um botão para o github do projeto, onde é possível ver o código-fonte.
                            </p>
                        </header>

                        <img src={imagemCel} alt="Imagem do site Rappi4"  className='image main' ></img>




                        <img src={imagemPC} alt="Imagem do site Rappi4"  className='image main' ></img>
                        <ul className="actions special">
                            <li>
                                <a href="https://github.com/rafaelcacilhas/maryam-labe-food4" className="button large">
                                    Código fonte
                                </a>
                            </li>
                        </ul>
                    </div>

                    </article>



                </div>



        </div>

        
    )
}


export default BancoPage