import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { Doggos } from './containers';

import { useDispatch } from 'react-redux';
import { fetchDogs } from './actions'

import './styles/app.css';

function App(){
    
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(fetchDogs());
        
    }

    return (
        <>
        <h1>These Doggos endorse Redux</h1>
        <h3 onClick={handleClick}
            aria-label="refresh" 
            id="refresh"
        >    
            fetch! <FontAwesomeIcon icon={faBone} />
        </h3>
        <Doggos />
        </>
    )
}

export default App;
