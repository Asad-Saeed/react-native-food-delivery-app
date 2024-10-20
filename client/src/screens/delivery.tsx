import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import LayoutWrapper from "@/components/layout/layout";
import { featured } from "@/constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";

const DeliveryScreen: React.FC = () => {
  const restaurant = featured?.restaurants[0];
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <LayoutWrapper>
      <MapView
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat,
            longitude: restaurant?.lng,
          }}
          title={restaurant?.name}
          description={restaurant?.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-5">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              25 - 35 Minutes
            </Text>
            <Text className="mt-2  text-gray-700 font-semibold">
              Your order is own it's way!
            </Text>
          </View>
          <Image
            source={require("../../assets/images/common/deliver.png")}
            className="h-20 w-20"
          />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.9) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../../assets/images/common/asad-saeed.jpeg")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Asad Saeed</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
                onPress={() => navigation.navigate("Home")}
              />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.X
                stroke="red"
                strokeWidth={4}
                onPress={() => navigation.navigate("Home")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LayoutWrapper>
  );
};

export default DeliveryScreen;
