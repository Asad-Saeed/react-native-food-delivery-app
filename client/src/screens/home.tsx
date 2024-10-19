import { ScrollView } from "react-native";
import React from "react";
import Categories from "@/components/home/categories";
import SearchBar from "@/components/common/searchBar";
import Featured from "@/components/home/featured";
import LayoutWrapper from "@/components/layout/layout";

const HomeScreen: React.FC = () => {
  return (
    <LayoutWrapper>
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
    </LayoutWrapper>
  );
};

export default HomeScreen;
