import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "@/constants";
import { Category } from "@/types";

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | undefined>();

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories?.map((category: Category, index: number) => {
          const isActive = category?.id === activeCategory;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const textClass = isActive
            ? "text-gray-800 font-semibold"
            : "text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={`p-1 rounded-full shadow ${btnClass}`}
                onPress={() => setActiveCategory(category?.id)}
              >
                <Image source={category?.image} className="h-12 w-12" />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass} mt-1`}>
                {category?.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
