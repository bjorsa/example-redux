import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchPosts from "../actions/fetchPosts";
import clearPosts from "../actions/clearPosts";

const App = (props) => {
  const renderedPosts = () => {
    return props.posts.map((post) => {
      return (
        <React.Fragment key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={props.fetchPosts}>Go</button>
      <button onClick={props.clearPosts}>Clear</button>
      {renderedPosts()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, clearPosts })(App);
