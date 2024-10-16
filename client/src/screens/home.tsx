import { Text, SafeAreaView, Platform } from "react-native";
import React from "react";

const HomeSceen: React.FC = () => {
  return (
    <SafeAreaView className={`${Platform.OS === "android" ? "m-10" : "m-0"}`}>
      <Text>HomeSceen</Text>
    </SafeAreaView>
  );
};

export default HomeSceen;
