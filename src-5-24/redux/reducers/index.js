import { combineReducers } from 'redux'

let comments = {
  1: ['hello1', 'world1'],
  2: ['hello2', 'world2']
}

function commentReducer(state= comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {...state, [action.postId]: [...state[action.postId], action.comment] }
    default:
      return state
  }
}

const posts = {
  1:  { title: 'redux-hello', likes: 3 },
  2:  { title: 'redux-baby', likes: 6 }
}


function postReducer(state = posts, action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        [action.postId]: {...state[action.postId], likes: state[action.postId].likes + 1}
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  comments: commentReducer,
  posts: postReducer
})


export default rootReducer
