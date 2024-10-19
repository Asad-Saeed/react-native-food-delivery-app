import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Dish, RootStackParamList } from "@/types";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";
import Dishes from "@/components/restaurant/dishes";
import CartIcon from "@/components/restaurant/cartIcon";
import NoDataPlaceholder from "@/components/common/noData";
import LayoutWrapper from "@/components/layout/layout";

const RestaurantScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Restaurant">>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { item } = route.params;

  // Check if item exists
  if (!item) {
    return <NoDataPlaceholder message="No Data Available" />;
  }

  return (
    <LayoutWrapper>
      {/* Cart Icon */}
      <CartIcon />

      <ScrollView>
        <View className="relative">
          {/* Render image if available */}
          {item?.image ? (
            <Image source={item.image} className="w-full h-72" />
          ) : (
            <View className="w-full h-72 bg-gray-300 flex items-center justify-center">
              <Text>No Image Available</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-4 left-4 bg-gray-500 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row items-center space-x-2 mt-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../../assets/images/common/star.jpg")}
                  className="h-5 w-5"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars} </Text>
                  <Text className="text-gray-700">
                    ({item.reviews} Reviews){" "}
                    <Text className="font-semibold">{item.reviews}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin stroke="gray" width={15} height={15} />
                <Text className="text-gray-700">Nearby . {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-700 mt-2">{item.description}</Text>
          </View>

          <View className="pb-24 bg-white">
            <Text className="p-4 text-2xl font-bold">Menu</Text>
            {item.dishes?.map((dish: Dish, index: number) => (
              <Dishes key={index} item={dish} />
            ))}
          </View>
        </View>
      </ScrollView>
    </LayoutWrapper>
  );
};

export default RestaurantScreen;
