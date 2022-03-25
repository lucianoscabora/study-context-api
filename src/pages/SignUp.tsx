import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';

export const SignUp = () => {
    const {state, dispatch} = useContext(Context);
    const [nameInput, setNameInput] = useState(state.user.name);
    const [ageInput, setAgeInput] = useState(state.user.age);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: e.target.value
            }
        });
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: parseInt(e.target.value)
            }
        });
    }
          
    return (
        <div>
            <h3>Tela Signup (Tema: {state.theme.status})</h3>
                   <input 
                   type="text"
                   placeholder="Digite um nome"
                   value={state.user.name} 
                   onChange={handleNameChange}
                    />

                   <input 
                   type="text"
                   placeholder="Digite uma idade"
                   value={state.user.age} 
                   onChange={handleAgeChange}
                   />

            <br />
            <Link to="/exibir"> Ir para ShowData </Link>
        </div>
    );
}