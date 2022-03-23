import imagem           from "./img/cel.png";
import { useNavigate }  from 'react-router-dom';

const Banco = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate('/banco')
    }

    return(

        <div>

            <header >
                <h2>
                    <a href="https://github.com/rafaelcacilhas/Landing-Page---F4Bank">
                        F4Bank 
                    </a>
                </h2>

                <p>Este projeto rápido, de apenas uma tarde, consistiu em 
                    fazer uma landing page para um banco ficcional. 
                </p>
            </header>

            <a href="https://github.com/rafaelcacilhas/Landing-Page---F4Bank" className='image fit' >
                <img src={imagem} alt="Imagem do site Rappi4" />
            </a>

            <ul className="actions special">
                <li>
                    <button onClick={handleClick} className="button large">
                        Detalhes
                    </button>
                </li>
            </ul>
            
        </div>
    )
}


export default Banco