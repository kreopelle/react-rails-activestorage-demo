export default function reducer(state = {posts: []}, action){
  switch(action.type){
    case 'ADD_POST':
      return {...state, posts: [...state.posts, action.post]}

    case 'GET_POSTS':
      return {...state, posts: action.posts }

    default:
      return state;
  }
}
