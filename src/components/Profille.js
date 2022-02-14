import { Typography } from '@material-ui/core';
import React from 'react';

const Profille = ({servant,children}) => { 

    return(
        <div>
            <h1>{servant.name_product}</h1>

            <img>{servant.image}</img>

            <p>{servant.description}</p>

            <Typography>
            {children}
            </Typography>
        </div>
    )

}

export default Profille;