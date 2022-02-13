
import {Typography} from '@material-ui/core/';
import Card from '../components/Card';
import Item from '../components/Item';



const Detalhes = ({product,children}) => {
 
    return(
        <Typography ariant="h1" component="div"> {product.name}</Typography>
        
        
    )
}

export default Detalhes;