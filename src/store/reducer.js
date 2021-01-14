import * as actionType from './actions'

const initialState = {
    posts: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.CREATE_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post,
                ],
            };
        case actionType.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id),
            }
        case actionType.LOAD_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        default:
            return state;
    }
}

export default reducer;