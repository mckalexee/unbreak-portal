import * as React from 'react';
import { Component } from 'react';
// import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm,  } from 'redux-form';


// import { fetchPosts } from '@actions/actions';
// import { IState } from '@interfaces';



// interface IPostsNewProps {
//   state: IState;
//   fetchPosts: typeof fetchPosts;
// }

class PostsNew extends Component<InjectedFormProps<{}, {}>> {
  renderField(field: any) {
    const error = (field.meta.invalid && field.meta.touched) ? 'is-invalid' : '';
    const classes = `${error} form-control`;

    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className={classes}
          type='text'
          {...field.input}
        />
        <div className='invalid-feedback'>
          Required.
        </div>
      </div>
    );
  }

  onSubmit(values: any) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name='title'
          label='Title'
          component={this.renderField}
        />
        <Field
          name='categories'
          label='Cagetories'
          component={this.renderField}
        />
        <Field
          name='content'
          label='Post Content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

function validate(values: {[key: string]: any}) {
  const errors = {};

  const requiredFields = ['title', 'categories', 'content'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field} required.`;
    }
  });
  return errors;
}

export const postsNew = reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);

// export const postsNew = connect(mapStateToProps, { fetchPosts })(PostsNew);
