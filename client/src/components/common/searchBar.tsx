import { View, Text, TextInput } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";

const SearchBar: React.FC = () => {
  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <Icon.Search stroke="gray" width="25" height="25" />
        <TextInput className="flex-1 ml-2" placeholder="Restaurant" />
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          <Icon.MapPin stroke="gray" width="25" height="25" />
          <Text className="text-gray-600">New York</Text>
        </View>
      </View>
      <View
        className="p-3 rounded-full"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <Icon.Sliders stroke="gray" width="25" height="25" />
      </View>
    </View>
  );
};

export default SearchBar;
