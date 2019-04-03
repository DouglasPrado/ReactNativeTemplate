import React from "react";
import { createAppContainer } from "react-navigation";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import SplashScreen from "./screens/Splash";

const MainNavigator = FluidNavigator(
  {
    Splash: {
      screen: SplashScreen
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const Routes = createAppContainer(MainNavigator);

export default Routes;
