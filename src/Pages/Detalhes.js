import React from 'react';
import Profille from '../components/Profille'
import { useSelector } from 'react-redux';
 


const Detalhes = () => {
    const servant = useSelector( state => state.products)
    const artoria = servant[0];

    return(
        <div>
            <Profille key={artoria.id_product}
                    servant={artoria}
                    ></Profille>
        </div>
        
        
    )
}

export default Detalhes;