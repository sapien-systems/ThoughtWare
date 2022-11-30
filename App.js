/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Box, Button, Flex, VStack } from "@react-native-material/core";
import { ScrollView, View } from "react-native";
import Logo from "./components/logo/logo";
import Subject from "./components/subject/subject";
import Gradient from "./components/gradient/gradient";

export default function App() {
  return (
    <>
      <Logo></Logo>
      <View style={{ backgroundColor: "#ffff00", flex:2, justifyContent: 'center', alignItems:'center'  }}>
        <Subject></Subject>
      </View>
      <View style={{ backgroundColor: "#ff00ff", flex:6, justifyContent: 'center', alignItems:'center' }} >
        <Gradient></Gradient>
      </View>
      <View style={{ backgroundColor: "#00ffff", flex:2 }}>

      </View>
    </>    
  )
}
