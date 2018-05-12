import * as _ from 'lodash';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { fetchPosts } from '@actions/actions';
import { IState } from '@interfaces';

interface IPostsIndexProps {
  state: IState;
  fetchPosts: typeof fetchPosts;
}

class PostsIndex extends Component<IPostsIndexProps> {
  constructor(props: IPostsIndexProps) {
    super(props);

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props.state);
  }

  renderPosts() {
    return _.map(this.props.state.posts, post => {
      return (
        <li key={post.id} className='list-group-item'>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='d-flex flex-row-reverse'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add A Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: IState) {
  return { state };
}

export const postsIndex = connect(mapStateToProps, { fetchPosts })(PostsIndex);
