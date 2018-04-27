import {fetchPosts} from '@actions/actions';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

interface IPostsIndexProps {
  fetchPosts: typeof fetchPosts;
}

class PostsIndex extends Component<IPostsIndexProps> {
  constructor(props: IPostsIndexProps) {
    super(props);
  }

  componentDidMount() {
    console.log('Component Mounted');
    this.props.fetchPosts();
  }

  render() {
    return (
      <ul className='list-group col'>
        Index
      </ul>
    );
  }
}

export const postsIndex = connect(null, { fetchPosts })(PostsIndex);
