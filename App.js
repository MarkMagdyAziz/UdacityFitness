import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import AddEntry from "./components/AddEntry";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import History from "./components/History";
import Constants from "expo-constants";
import { purple } from "./utils/colors";
import MainTabNavigator from "./navigation/MainTabNavigator";

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount() {
    console.log("Before");
    //debugger;
    console.log("after");
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainTabNavigator />
        </View>
      </Provider>
    );
  }
}
