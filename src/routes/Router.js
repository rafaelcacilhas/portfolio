import React             from "react";
import { HashRouter }    from "react-router-dom";
import { Routes }        from "react-router-dom";
import { Route }         from "react-router-dom";

import Header            from "../components/header/Header";
import Footer            from "../components/footer/Footer";

import Home              from "../pages/Home";
import BancoPage         from "../pages/banco/BancoPage";
import ComidaPage        from "../pages/comida/ComidaPage";
import ForumPage         from "../pages/forum/ForumPage";
import NumeroPage        from "../pages/qual-numero/NumeroPage";

const Router = () => {

    return(
        <HashRouter>

            <Routes>

                <Route path='/'         element={<div> <Header /> <Home/> <Footer /> </div> }/>

                <Route path='/banco'    element={<div> <Header /> <BancoPage/> <Footer /> </div> }/>

                <Route path='/comida'   element={<div> <Header /> <ComidaPage/> <Footer /> </div> }/>

                <Route path='/forum'    element={<div> <Header /> <ForumPage/> <Footer /> </div> }/>

                <Route path='/numero'    element={<div> <Header /> <NumeroPage/> <Footer /> </div> }/>
            </Routes>

        </HashRouter>
    )

}

export default Router



/*

    <HashRouter>

        <Routes>

            <Route path='/'         element={<div> <Header /> <Home/> <Footer /> </div> }/>

            <Route path='/banco'    element={<div> <Header /> <BancoPage/> <Footer /> </div> }/>

            <Route path='/comida'   element={<div> <Header /> <ComidaPage/> <Footer /> </div> }/>

            <Route path='/forum'    element={<div> <Header /> <ForumPage/> <Footer /> </div> }/>

            <Route path='/numero'    element={<div> <Header /> <NumeroPage/> <Footer /> </div> }/>
        </Routes>

    </HashRouter>

    */