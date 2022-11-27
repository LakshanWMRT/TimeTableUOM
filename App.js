/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { View,StyleSheet,Text, Button, TouchableOpacity, Image, SafeAreaView,} from "react-native";
import { Icon } from "@rneui/themed";

import WelcomeScreen from "./Components/WelcomeScreen";
import TimeTablePage from "./Components/TimeTablePage";
import TimeTablePhoto from './Components/TimeTablePhoto';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


function App () {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: {
          color: "#F4F5F7",
          fontWeight: "bold",
          fontFamily: "roboto",
          fontSize: 20
        },
        headerTintColor: 'red',

        headerStyle: {
          backgroundColor: 'black',

        }
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome to UOM Timetable' }} />
        <Stack.Screen name="TimeTablePage" component={TimeTablePage} options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Icon name="list" size={25} color="red" />
            </View>
          ),
          title: "Comming Up"
        }} />
        <Stack.Screen name="TimeTablePhoto" component={TimeTablePhoto} options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Icon name="list" size={25} color="red"/>
            </View>
          ),
          title: "Time Table"
        }} />
      </Stack.Navigator>
                
    </NavigationContainer>
  );
};

export default App;
