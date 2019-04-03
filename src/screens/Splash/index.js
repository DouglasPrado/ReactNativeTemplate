import React, { Component } from "react";
import { Container, Text } from "./style";
import LottieView from "lottie-react-native";
import Svg, { Circle, Rect } from "react-native-svg";
import SvgUri from "react-native-svg-uri";
export default class SplashScreen extends Component {
  render() {
    return (
      <Container>
        <LottieView
          style={{ marginBottom: 40 }}
          source={require("../../assets/favorite_black.json")}
          autoPlay
        />
        <SvgUri
          width="200"
          height="200"
          source={{
            uri:
              "http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
          }}
        />
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </Container>
    );
  }
}
