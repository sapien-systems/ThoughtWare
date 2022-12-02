/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Box, Button, Flex, Provider, VStack } from "@react-native-material/core";
import { ScrollView, View } from "react-native";
import Logo from "./components/logo/logo";
import Subject from "./components/subject/subject";
import Gradient from "./components/gradient/gradient";
import Toolbar from "./components/toolbar/toolbar";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ErrorToast } from "react-native-toast-message";

const toastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      text2Style={{fontSize: 14, color: "#ff4f4f"}}
      />
  )
}

export default function App() {
  return (
    <Provider>
      <>
        <Logo></Logo>
        <View style={{ backgroundColor: "black", flex:2, justifyContent: 'center', alignItems:'center'}}>
          <Subject></Subject>
        </View>
        <View style={{ backgroundColor: "black", flex:6, justifyContent: 'center', alignItems:'center' }} >
          <Gradient></Gradient>
        </View>
        <View style={{ backgroundColor: "black", flex:2 }}>
          <Toolbar></Toolbar>
        </View>
        <Toast config={toastConfig}/>
      </>    
    </Provider>
  )
}
