import React, { Component } from 'react';
import Timeline from './TimeFeed';

export default class Feed extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Timeline day={0} navigation={this.props.navigation}/>
    )
  }
}
Feed.navigationOptions = {
  header: null,
};