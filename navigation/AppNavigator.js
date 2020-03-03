import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen"
import ClipScreen from "../screens/ClipScreen"
import { FontAwesome } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      header: null,
    }
  },
  Article: {
    //ArticleはonPressの処理で使うkey
    screen: ArticleScreen,
  },
})

const ClipStack = createStackNavigator({
  Clip: {
    screen: ClipScreen,
    navigationOptions:{
      title: "お気に入り",
    }
  },
  Article: {
    //ArticleはonPressの処理で使うkey
    screen: ArticleScreen,
    navigationOptions:{
      title: "実験",
    }
  },
})

const AppNavigator = createBottomTabNavigator({
  Home : {
    screen : HomeStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>{
        return <FontAwesome name="home" color={tintColor} size={24} />
      },
    },
  },

  Clip : {
    screen : ClipStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>{
        return <FontAwesome name="bookmark" color={tintColor} size={24} />
      },
    },
  },
});

export default createAppContainer(AppNavigator)