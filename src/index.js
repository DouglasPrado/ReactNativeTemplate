import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";
import { setNavigator } from "./services/navigator";
// if (__DEV__) {
import("./config/ReactotronConfig").then(() =>
  console.log("Reactotron Configured")
);
// }
const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#dbdbdb" />
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
