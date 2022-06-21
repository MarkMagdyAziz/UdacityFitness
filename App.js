import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

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
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
