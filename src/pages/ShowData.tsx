import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {Context} from '../contexts/Context'

export const ShowData = () => {
    const {state, dispatch} = useContext(Context);

    return (
        <div>
             <h3>Tela Show Data</h3>

         
         
            MEU NOME É: {state.user.name}<br/>
            EU TENHO: {state.user.age} anos.
      

            <br />
            <Link to="/"> Voltar para Signup </Link> 
        </div>
    );
}