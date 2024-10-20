import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Dish, RootStackParamList } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "@/store/slices/restaurant";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "@/store/slices/cart";
import NoDataPlaceholder from "@/components/common/noData";

const CartScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { height: screenHeight } = Dimensions.get("window");
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const [groupedItem, setGroupedItem] = useState<{
    [key: string]: Dish & { quantity: number };
  }>({});

  useEffect(() => {
    if (cartItems?.length) {
      const items = cartItems.reduce((group: any, item) => {
        const { id, name, description, price, stars, image, quantity } = item;

        if (group[id]) {
          group[id].quantity += quantity;
        } else {
          group[id] = { id, name, description, price, stars, image, quantity };
        }

        return group;
      }, {});

      setGroupedItem(items);
    } else {
      setGroupedItem({});
    }
  }, [cartItems]);

  return (
    <View
      className="absolute bottom-0 w-full bg-white rounded-t-3xl"
      style={{ height: screenHeight * 0.9 }}
    >
      {/* Back Button */}
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="absolute z-10 rounded-full p-1 shadow top-5 left-4"
        onPress={() => navigation.goBack()}
      >
        <Icon.ArrowLeft strokeWidth={3} className="h-4 w-4" stroke="white" />
      </TouchableOpacity>
      <View>
        <Text className="text-xl text-center font-bold p-2">Your Cart</Text>
        <Text className="text-center text-gray-500">{restaurant?.name}</Text>
      </View>
      {/* Delivery Time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row items-center px-4"
      >
        <Image
          source={require("../../assets/images/common/deliver.png")}
          className="h-20 w-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Delivery in 30-40 min</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItem)?.length > 0 ? (
          Object.entries(groupedItem).map(([key, dish]) => (
            <DishCard key={key} {...dish} />
          ))
        ) : (
          <NoDataPlaceholder message="No Cart Item Available!" />
        )}
      </ScrollView>

      {/* Total */}
      <TotalCard />
    </View>
  );
};

export default CartScreen;

const DishCard: React.FC<Dish & { quantity: number }> = ({ ...props }) => {
  const { name, image, price, quantity } = props;
  const dispatch = useDispatch();

  return (
    <View
      className="flex-row items-center bg-white space-x-3 py-3 px-4 rounded-3xl mx-2 mb-3 shadow-2xl border border-gray-100"
      style={{
        shadowColor: themeColors.bgColor(0.9),
        shadowRadius: 7,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
      }}
    >
      <Text className="font-bold" style={{ color: themeColors.text }}>
        {quantity} x
      </Text>
      <Image source={image} className="h-14 w-14 rounded-full" />

      <Text className="flex-1 font-semibold text-gray-700 text-base">
        {name}
      </Text>
      <Text className="font-semibold text-sm">${price}</Text>
      <TouchableOpacity
        onPress={() =>
          dispatch(
            removeFromCart({
              id: props?.id?.toString(),
            })
          )
        }
        className="rounded-full p-1"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <Icon.Minus strokeWidth={2} className="h-4 w-4" stroke="white" />
      </TouchableOpacity>
    </View>
  );
};

const TotalCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const cartTotal = useSelector(selectCartTotal);
  const deliveryFee = 3;
  return (
    <View
      className="rounded-t-3xl space-y-4 p-6 px-8"
      style={{ backgroundColor: themeColors.bgColor(0.2) }}
    >
      <View className="flex-row justify-between">
        <Text className="text-gray-700">SubTotal</Text>
        <Text className="text-gray-700">${cartTotal?.toFixed(2) || 0}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-700">Delivery Fee</Text>
        <Text className="text-gray-700">${deliveryFee?.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between ">
        <Text className="text-gray-700 font-extrabold">Order Total</Text>
        <Text className="text-gray-700 font-extrabold">
          ${(cartTotal + deliveryFee)?.toFixed(2)}
        </Text>
      </View>
      {/* Place Order Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderPreparing")}
        className="p-3 rounded-full"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <Text className="text-center text-white font-bold text-lg">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};
