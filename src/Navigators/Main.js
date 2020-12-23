import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IndexExampleContainer from "@/Containers/Example/Index";

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return <IndexExampleContainer />;
};

export default MainNavigator;
