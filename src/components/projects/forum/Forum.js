import imagem           from "./img/cel1.png";
import { useNavigate }  from 'react-router-dom';

const Forum = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate('/forum')
    }

    return(

        <div>

            <header >
                <h2><a href="https://github.com/rafaelcacilhas/maryam-landing-page22">Forum </a></h2>
                <p>Este projeto consistiu em fazer um fórum completamente
                    funcional, possibilitanto o cadastro de novos usuários 
                    e a postagem de mensagens em um mural. </p>
            </header>

            <a href="https://github.com/rafaelcacilhas/maryam-landing-page22" className='image fit' >
                <img src={imagem} alt="Imagem do fórum" />
            </a>

            <button onClick={handleClick} className="button large">
                Detalhes
            </button>
        </div>
    )
}


export default Forum