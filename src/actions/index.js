import axios from 'axios';

export const fetchDogs = () => {

    return async (dispatch) => {
        try {
            const { data } = await axios.get("https://dog.ceo/api/breeds/image/random/12");
            const dogList = data.message.map((url, i) => ({ id: i, img: url, liked: false}))
            dispatch({
                type: 'LOADING',
                payload: dogList
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }

}

// export const likeDog = () => {
//     return { type: "LIKE_DOG" }
// }
  
// export const loading = () => {
//     return { type: "LOADING" }
// }
  