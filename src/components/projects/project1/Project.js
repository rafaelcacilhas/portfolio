import imagem from "../../../images/pic01.jpg";


const Project = () => {


return (

    <div>

        <header className='major'>
            <h2><a href="www.google.com">Product 1</a></h2>
            <p>.</p>
        </header>

        <a href="www.google.com" className='image main'>
            <img src={imagem} alt="" />
        </a>
        <ul className="actions special">
            <li><a href="www.google.com" className="button large">Check out the code!</a></li>
        </ul>
    </div>
    )
}

export default Project
