import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import Categories from "@/components/home/categories";
import SearchBar from "@/components/common/searchBar";

const HomeSceen: React.FC = () => {
  return (
    <SafeAreaView
      className={`${Platform.OS === "android" ? "p-10" : "p-0"} bg-white`}
    >
      <StatusBar barStyle="dark-content" />
      {/* Search bar */}
      <SearchBar />
      {/* Main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Categories */}
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSceen;
