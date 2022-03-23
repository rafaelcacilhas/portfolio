import '../../assets/css/main.css';
import React    from 'react';
import imagemIntro   from "./img/intro.png";
import imagemUser   from "./img/usuario.png";

const ComidaPage = () => {


    return(


        <div id="wrapper" className="fade-in">


                <div id="main">

                    <article className="post featured">
                    <div>

                        <header className='major'>
                            <h2>Rappi4 </h2>
                            <p>Este projeto foi feito em cinco dias úteis (01/11 até 05/11) e foi feito por uma
                            equipe de cinco pessoas. À partir de um design pronto, feito no Figma, construímos
                            todas as funcionalidades de um app de entregas: o usuário pode fazer um cadastro, 
                            visitar as diferentes lanchonetes, adicionar itens ao carrinho alterar as suas 
                            informações pessoais. Abaixo estão as imagens do app e o botão para o código-fonte
                            no Git-hub.
                            </p>
                        </header>

                        <img src={imagemIntro} alt="Imagem do site Rappi4"  className='image main' ></img>

                        <img src={imagemUser} alt="Imagem do site Rappi4"  className='image main' ></img>

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


export default ComidaPage