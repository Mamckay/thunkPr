import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

function Custom(props) {
    return (<Text>{props.test}</Text>)
}

const mapStateToProps = state => ({
    test: state.test.test
  });

export default connect(mapStateToProps)(Custom);
