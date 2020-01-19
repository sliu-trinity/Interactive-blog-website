import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component { 
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className = 'banner-img' src="https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"></img>
        <Topic />
        <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>

      </HomeWrapper>
    )
  }
}

export default Home;