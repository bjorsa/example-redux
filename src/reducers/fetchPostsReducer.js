export const fetchPostsReducer = (posts = [], action) => {
    console.log({posts, action});
    if (action.type === 'CLEAR_POSTS') {
        return [];
    }
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }
    return posts;
};