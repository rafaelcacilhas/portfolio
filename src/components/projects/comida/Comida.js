import imagem           from "./img/intro.png";
import { useNavigate }  from 'react-router-dom';




const Comida = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate('/comida')
    }

    return(

        <div>

            <header className='major'>
                <h2>Rappi4 </h2>
                <p>Este projeto consistiu em fazer um aplicativo de 
                    entrega de comida completamente funcional. Trabalhamos 
                    em uma equipe com cinco pessoas e tivemos cinco dias úteis para 
                    a conclusão.  </p>
            </header>

            <a href="https://github.com/rafaelcacilhas/maryam-labe-food4" className='image main' >
                <img src={imagem} alt="Imagem do site Rappi4" />
            </a>

            <button onClick={handleClick} className="button large">
                        Detalhes
            </button>
        </div>
    )
}


export default Comida