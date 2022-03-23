import '../../assets/css/main.css';
import React    from 'react';
import imagemIntro   from "./img/intro.png";

const ForumPage = () => {


    return(


        <div id="wrapper" className="fade-in">


                <div id="main">

                    <article className="post featured">
                    <div>

                        <header className='major'>
                            <h2>Forum </h2>
                            <p>Este projeto consistiu em criar um fórum completamente funcional 
                                e foi feito individualmente em cinco dias, entre 04/10 a 08/10. 
                                Os usuários podem se cadastrar, criar novos posts e responder 
                                posts de outros usuários, além de classificar os posts positivamente
                                e negativamente. Infelizmente sobrou pouco tempo para a estilização 
                                do projeto.
                            </p>
                        </header>

                        <img src={imagemIntro} alt="Imagem do site LabEddit"  className='image main' ></img>


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