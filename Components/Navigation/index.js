import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Login from "../Login";
import Main from "../HomePage";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Main: { screen: Main }
});

export default AppNavigator;
