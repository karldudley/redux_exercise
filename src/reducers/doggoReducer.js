const initialState = {
    doggos: [{id: 1, img: '', liked: false}, {id: 2, img: '', liked: false}],
    loading: true,
    error: false
  };
  
  const doggoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIKE_DOG":
        const dogToLike = state.doggos.find(d => d.id === action.payload)
        const likeIdx = state.doggos.indexOf(dogToLike)
        const updatedDoggosLike = [ 
          ...state.doggos.slice(0, likeIdx),
          { ...dogToLike, liked: !dogToLike.liked },
          ...state.doggos.slice(likeIdx+1)
        ]
        return { ...state, doggos: updatedDoggosLike };
      case "DEL_DOG":
          const dogToDel = state.doggos.find(d => d.id === action.payload)
          const delIdx = state.doggos.indexOf(dogToDel)
          const updatedDoggos = [ 
            ...state.doggos.slice(0, delIdx),
            ...state.doggos.slice(delIdx+1)
          ]
          return { ...state, doggos: updatedDoggos };
      case "LOADING":
          return { ...state, doggos: action.payload, loading: false }
      case 'SET_ERROR':
          return {...state, error: action.payload }
      default:
        return state;
    }
  }
  
  export default doggoReducer;
