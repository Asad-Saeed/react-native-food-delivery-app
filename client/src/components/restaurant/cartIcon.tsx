import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectTotalQuantity,
} from "@/store/slices/cart";

const CartIcon: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartTotal = useSelector(selectCartTotal);

  if (!cartItems?.length) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="text-lg font-extrabold text-white">
            {totalQuantity || 0}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">
          ${cartTotal?.toFixed(2) || 0}
        </Text>
        <Icon.ShoppingCart />
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
