import React from 'react';
import {executeTest} from '../store/actions/test';
import {Button, Text} from 'react-native';
import {connect} from 'react-redux';

export default class UserInput extends React.Component {

  state = {
    tea:'good'
  }

  teaHandler = () => {
    this.setState(prevState => ({
      tea: 'bad'
    }));
  }

  render(){ 
    return (<React.Fragment><Button title={'Click Here'} onClick={() => this.props.dispatch(executeTest)}></Button>
    <Text>{this.state.tea}</Text></React.Fragment>)  
  }
}


// const mapStateToProps = state => ({
//   test: state.test.test
// });


// export default connect(mapStateToProps)(UserInput);

