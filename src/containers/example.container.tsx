import { selectFoo } from '@actions/actions';
import { IState } from '@interfaces';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface IStateFromProps {
  foo: string;
}

interface IDispatchFromProps {
  selectFoo: typeof selectFoo;
}

interface IExampleContainerProps {
  foo: string;
  selectFoo: typeof selectFoo;
}

class ExampleContainer extends Component<IExampleContainerProps> {
  constructor(props: IExampleContainerProps) {
    super(props);
  }

  render() {
    return (
      <ul className='list-group col'>
        {this.props.foo}
      </ul>
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    foo: state.foo
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ selectFoo }, dispatch);
}

export default connect<IStateFromProps, IDispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(ExampleContainer);
