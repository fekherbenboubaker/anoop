import React, { Component } from 'react'
import { BackHandler } from 'react-native';

import CommonGroupButtons from "./CommonGroupButtons";

export default class GallerySub extends Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

      }

      componentWillMount() {
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.handleBackButtonClick,
        );
      }

      componentWillUnmount() {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackButtonClick,
        );
      }

      handleBackButtonClick() {
        this.props.navigation.navigate('Gallery');
        return true;
      }


  render() {
    return (
      <CommonGroupButtons navigation={this.props.navigation}/>
    );
  }
}
