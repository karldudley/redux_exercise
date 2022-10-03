import React from 'react';
import { DogCard } from '../../components';

import { useSelector, useDispatch } from 'react-redux';

import './style.css';

function Doggos(){
    const theDogs = useSelector(state => state.doggos)
    const loading = useSelector(state => state.loading)

    const renderDoggos = theDogs.map(dog => <DogCard key={dog.id} doggo={dog} />)

    return (
        <>
        {
            loading ?
                <h2>Loading . . .</h2>
                : <section aria-label="doggos" id="doggos">{ renderDoggos }</section>
        }
        </>
    );
}

export default Doggos


