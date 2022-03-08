import jsonplaceholder from "../apis/jsonplaceholder";

const fetchPosts = () => {
    return async (dispatch) => {
        const { data } = await jsonplaceholder.get("/posts");
        dispatch({
          type: "FETCH_POSTS",
          payload: data,
        });
    }
};

export default fetchPosts;
