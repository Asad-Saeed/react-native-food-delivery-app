import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import { featured } from "@/constants";
import { FeaturedRowProps, Restaurant, RestaurantCardProps } from "@/types";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";

const Featured: React.FC = () => {
  return (
    <View className="mt-5">
      {[featured, featured, featured]?.map((item, index) => {
        return (
          <FeaturedRow
            key={index}
            title={item?.title}
            restaurants={item?.restaurants}
            description={item?.description}
          />
        );
      })}
    </View>
  );
};

export default Featured;

// FeaturedRow Component
const FeaturedRow: React.FC<FeaturedRowProps> = ({ ...props }) => {
  const { title, description, restaurants } = props;
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            className="font-semibold underline"
            style={{ color: themeColors.text }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants?.map((restaurant: Restaurant, index: number) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

// RestaurantCard Component
const RestaurantCard: React.FC<RestaurantCardProps> = ({ ...props }) => {
  const { item } = props;
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          elevation: 5, // Android shadow
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 3 }, // iOS shadow
        }}
        className="mr-3 bg-white rounded-3xl shadow-lg border border-gray-100"
      >
        <Image source={item?.image} className="w-64 h-36 rounded-t-3xl" />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item?.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../../../assets/images/restaurants/star.jpg")}
              className="h-5 w-5"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item?.rating} </Text>
              <Text className="text-gray-700">
                ({item?.reviews} Reviews) .
                <Text className="font-semibold"> {item?.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin stroke="gray" width="15" height="15" />
            <Text className="text-gray-700 text-xs">
              Nearby . {item?.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
