import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { LikeButton, DeleteButton } from '..';

const DogCard = ({ doggo }) => {
    const theDogs = useSelector(state => state.doggos)
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch()

    const { id, img, liked } = doggo

    const handleToggleLike = id => {
        console.log('like dog', id);
        dispatch({ type: "LIKE_DOG", payload: id})
    }

    const handleDelete = id => {
        console.log('delete dog', id);
        dispatch({ type: "DEL_DOG", payload: id})
    }
    
    return (
        <div className="card">
            <img src={img} />
            <LikeButton liked={liked} handleClick={() => handleToggleLike(id)}/>
            <DeleteButton handleClick={() => handleDelete(id)}/>
        </div>

    );
}

export default DogCard;
