import imagem           from "./img/cel1.png";
import { useNavigate }  from 'react-router-dom';

const Numero = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate('/numero')
    }

    return(

        <div>

            <header >
                <h2><a href="https://github.com/rafaelcacilhas/maryam-landing-page22">Qual o número? </a></h2>
                <p> Pequeno projeto que consiste em um jogo de adivinhar qual o número entre 1 e 300 foi 
                    sorteado aleatoriamente.  </p>
            </header>

            <a href="https://github.com/rafaelcacilhas/maryam-landing-page22" className='image fit' >
                <img src={imagem} alt="Imagem do desafio Adivinhe o número" />
            </a>

            <button onClick={handleClick} className="button large">
                Detalhes
            </button>
        </div>
    )
}


export default Numero