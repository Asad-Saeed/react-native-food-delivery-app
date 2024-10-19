import { SafeAreaView, Platform, StatusBar, ScrollView } from "react-native";
import React from "react";
import Categories from "@/components/home/categories";
import SearchBar from "@/components/common/searchBar";
import Featured from "@/components/home/featured";

const HomeScreen: React.FC = () => {
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

      {/* Search bar */}
      <SearchBar />

      {/* Main content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <Featured />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
