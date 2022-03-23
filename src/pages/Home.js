import '../assets/css/main.css';
import React    from 'react';

import Comida 	from '../components/projects/comida/Comida';
import Banco 	from '../components/projects/banco/Banco';
import Forum 	from '../components/projects/forum/Forum';
import Numero 	from '../components/projects/qual-numero/Numero';



const Home = () => {

    return(
    <div>

		<div id="wrapper" className="fade-in">
			<div id="main">

			    <article className="post featured">
                    <Comida  />
				</article>

				<section className="posts">
                    <article>
                            <Numero />
                    </article>

					<article>
						<Forum />
					</article>

					<article>
						<Banco />
					</article>
				</section>

			</div>
        </div>

    </div>
    )

}

export default Home