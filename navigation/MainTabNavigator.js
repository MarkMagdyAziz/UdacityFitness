import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, Platform } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { purple, white } from "../utils/colors";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddEntry from "../components/AddEntry";
import History from "./../components/History";
const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ tintColor }) => {
                if (route.name === "History") {
                  return (
                    <Ionicons
                      name="ios-bookmarks"
                      size={30}
                      color={tintColor}
                    />
                  );
                } else if (route.name === "AddEntry") {
                  return (
                    <FontAwesome
                      name="plus-square"
                      size={30}
                      color={tintColor}
                    />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === "ios" ? purple : white,
              style: {
                height: 56,
                backgroundColor: Platform.OS === "ios" ? white : purple,
                shadowColor: "rgba(0, 0, 0, 0.24)",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
              },
            }}
          >
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="AddEntry" component={AddEntry} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
};

export default MainTabNavigator;
