import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
//  import Detalhes from './Pages/Detalhes';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
             {/* <Route
                path="/Detalhes"
                element={<Detalhes />}
            />  */}
        </Routes>
    )
}

export default MainRoutes;
