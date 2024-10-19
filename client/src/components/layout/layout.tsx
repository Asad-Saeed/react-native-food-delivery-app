import React from "react";
import { View, SafeAreaView, StatusBar, Platform } from "react-native";
import { LayoutWrapperProps } from "@/types";

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default LayoutWrapper;
