import { themeColors } from "@/theme";
import { DishesProps } from "@/types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";

const Dishes: React.FC<DishesProps> = ({ ...props }) => {
  const { item } = props;
  return (
    <View
      className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2 border border-gray-100"
      style={{
        shadowColor: themeColors.bgColor(0.9),
        shadowRadius: 7,
        elevation: 5, // Android shadow
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 }, // iOS shadow
      }}
    >
      <Image source={item?.image} className="w-20 h-20 rounded-3xl" />
      <View className="flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl ">{item?.name}</Text>
          <Text className="text-gray-700">{item?.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            ${item?.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="rounded-full p-1"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus strokeWidth={2} className="h-4 w-4" stroke="white" />
            </TouchableOpacity>
            <Text className="px-3">{2}</Text>
            <TouchableOpacity
              className="rounded-full p-1"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus strokeWidth={2} className="h-4 w-4" stroke="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dishes;
