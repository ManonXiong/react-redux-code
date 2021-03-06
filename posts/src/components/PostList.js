import React from 'react';
import { connect } from 'react-redux';
// import { fetchPosts } from '../actions';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    };

    //to render a list, separate it from 'render' method
    renderList = () => {
      return this.props.posts.map(post => {
        return(
          <div className="item" key={post.id}>
            <i className="user icon large middle aligned" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
        )
      })
    }
    
    render() {
      console.log(this.props.posts)
      return(
        <div className="ui relaxed dividedd list">
          {this.renderList()}
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

// export default connect(mapStateToProps, { fetchPosts })(PostList); -- this version is dumped when new action creator is used.
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);


//Notes:
//1.If there's no need to get state / data from redux, replace mapStateToProps to null.
